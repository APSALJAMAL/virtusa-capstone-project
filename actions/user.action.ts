/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { prisma } from '@/lib/prisma';
import { stackServerApp } from '@/stack';
import { neon } from '@neondatabase/serverless';
import type { Role } from '@prisma/client';

/**
 * Get single user from Neon via SQL and sync role
 */
export async function getUserDetails(userId: string | undefined) {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
  if (!userId) return null;

  const sql = neon(process.env.DATABASE_URL!);
  const [neonUser] = await sql`SELECT * FROM neon_auth.users_sync WHERE id = ${userId};`;

  if (!neonUser) return null;

  // Save to Prisma
  await saveUserToDb(neonUser);

  // Fetch role from Prisma
  const prismaUser = await prisma.user.findUnique({
    where: { id: neonUser.id },
    select: { role: true },
  });

  // Merge role into Neon user object
  return {
    ...neonUser,
    role: prismaUser?.role || 'USER',
    email: neonUser.email, // Ensure email is included in the return object
  };
}

/**
 * Get current user ID from Stack auth
 */
export async function getUserId() {
  const user = await stackServerApp.getUser();
  return user?.id || null;
}

/**
 * Get user email from Neon + Prisma
 */
export async function getUserEmail() {
  const userId = await getUserId();
  if (!userId) return null;

  const user = await getUserDetails(userId);
  return user?.email || null;
}

/**
 * Get all users from Neon and merge with Prisma roles
 */
export async function getAllUserDetails() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

  const sql = neon(process.env.DATABASE_URL);
  const usersFromNeon = await sql`SELECT * FROM neon_auth.users_sync;`;

  const usersWithRole = await Promise.all(
    usersFromNeon.map(async (neonUser: any) => {
      const prismaUser = await prisma.user.findUnique({
        where: { id: neonUser.id },
        select: { role: true },
      });

      return {
        ...neonUser,
        role: prismaUser?.role || 'USER',
      };
    })
  );

  return usersWithRole;
}

/**
 * Save or update user in Prisma
 */
export async function saveUserToDb(user: any) {
  try {
    const existing = await prisma.user.findUnique({ where: { id: user.id } });

    if (existing) {
      // Update existing user, but keep existing role if present
      await prisma.user.update({
        where: { id: user.id },
        data: {
          email: user.email ?? existing.email,
          name: user.name ?? existing.name,
          role: existing.role || 'USER',
          displayName: user.display_name || user.raw_json?.display_name || existing.displayName,
          profileImageUrl: user.profile_image_url || user.raw_json?.profile_image_url || existing.profileImageUrl,
          updatedAt: new Date(),
        },
      });

      return { success: true, updated: true };
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.email || null,
        name: user.name || null,
        role: (user.role as Role) || 'USER',
        displayName: user.display_name || user.raw_json?.display_name || null,
        profileImageUrl: user.profile_image_url || user.raw_json?.profile_image_url || null,
        createdAt: user.created_at ? new Date(user.created_at) : new Date(),
        updatedAt: user.updated_at ? new Date(user.updated_at) : new Date(),
        deletedAt: user.deleted_at ? new Date(user.deleted_at) : null,
        primaryEmail: user.primary_email || null,
        primaryEmailVerified: user.primary_email_verified || false,
        lastActiveAtMillis: user.last_active_at_millis || null,
        signedUpAtMillis: user.signed_up_at_millis || null,
        isAnonymous: user.is_anonymous || false,
        hasPassword: user.has_password || false,
        otpAuthEnabled: user.otp_auth_enabled || false,
        passkeyAuthEnabled: user.passkey_auth_enabled || false,
        primaryEmailAuthEnabled: user.primary_email_auth_enabled || false,
        requiresTotpMfa: user.requires_totp_mfa || false,
        authWithEmail: user.raw_json?.auth_with_email ?? false,

        rawJson: user.raw_json || {},
        clientMetadata: user.client_metadata || {},
        clientReadOnlyMetadata: user.client_read_only_metadata || {},
        serverMetadata: user.server_metadata || {},
        oauthProviders: user.oauth_providers || [],
        selectedTeam: user.selected_team || null,
        selectedTeamId: user.selected_team_id || null,
      },
    });

    return { success: true, newUser };
  } catch (error: any) {
    console.error('❌ saveUserToDb error:', error);
    return { success: false, error: error.message };
  }
}
