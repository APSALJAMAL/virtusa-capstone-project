/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { prisma } from '@/lib/prisma';
import { stackServerApp } from '@/stack';
import { neon } from '@neondatabase/serverless';


//  Get single user from Neon via SQL
export async function getUserDetails(userId: string | undefined) {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }

  if (!userId) {
    return null;
  }

  const sql = neon(process.env.DATABASE_URL!);
  const [user] = await sql`SELECT * FROM neon_auth.users_sync WHERE id = ${userId};`;

  // Optional: Save to Prisma
  if (user) {

    await saveUserToDb(user);
  }

  return user;
}


//  Get current user ID from stack (auth layer)
export async function getUserId() {
  const user = await stackServerApp.getUser(); // get user from auth
  const userId = user?.id;
  return userId;
}

export async function getUserEmail() {
  const userId = await getUserId();
  if (!userId) return null;

  const user = await getUserDetails(userId);
  return user?.email || null;
}



//  Get all users from Neon (read-only)
export async function getAllUserDetails() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }

  const sql = neon(process.env.DATABASE_URL);
  const users = await sql`SELECT * FROM neon_auth.users_sync;`;

  // ✅ Save all users to Prisma
  for (const user of users) {

    await saveUserToDb(user);
  }

  return users;
}


//  Save user to Prisma DB
export async function saveUserToDb(user: any) {
  try {
    const existing = await prisma.user.findUnique({ where: { id: user.id } });
    if (existing) {

      return { success: true, existing };
    }

    const newUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        displayName: user.display_name || user.raw_json?.display_name,
        profileImageUrl: user.profile_image_url || user.raw_json?.profile_image_url,
        createdAt: user.created_at ? new Date(user.created_at) : undefined,
        updatedAt: user.updated_at ? new Date(user.updated_at) : undefined,
        deletedAt: user.deleted_at ? new Date(user.deleted_at) : null,
        primaryEmail: user.primary_email,
        primaryEmailVerified: user.primary_email_verified,
        lastActiveAtMillis: user.last_active_at_millis,
        signedUpAtMillis: user.signed_up_at_millis,
        isAnonymous: user.is_anonymous,
        hasPassword: user.has_password,
        otpAuthEnabled: user.otp_auth_enabled,
        passkeyAuthEnabled: user.passkey_auth_enabled,
        primaryEmailAuthEnabled: user.primary_email_auth_enabled,
        requiresTotpMfa: user.requires_totp_mfa,
        authWithEmail: user.raw_json?.auth_with_email ?? false,

        rawJson: user.raw_json,
        clientMetadata: user.client_metadata,
        clientReadOnlyMetadata: user.client_read_only_metadata,
        serverMetadata: user.server_metadata,
        oauthProviders: user.oauth_providers,

        selectedTeam: user.selected_team,
        selectedTeamId: user.selected_team_id,
      },
    });


    return { success: true, newUser };
  } catch (error: any) {

    return { success: false, error: error.message };
  }
}
