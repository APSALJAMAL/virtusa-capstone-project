/* eslint-disable @typescript-eslint/no-explicit-any */
 
// app/api/item/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserEmail, getUserId } from '@/actions/user.action';


export async function POST(req: Request) {
  try {
    const userId = await getUserId();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const { fullName, contactNumber, email, address, governmentId, reason } = body;

    // Build data object
    const data: any = { userId,fullName, contactNumber, email, address, governmentId, reason };

    

    const applicant = await prisma.applicant.create({ data });
    return NextResponse.json(applicant);
  } catch (error: any) {
    console.error('Error creating applicant:', error);
    return NextResponse.json({ error: error.message || 'Error creating applicant' }, { status: 500 });
  }
}
// export async function GET() {
//   // const userId = await getUserId();
//   // if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

//   const items = await prisma.item.findMany({
//     // where: { userId },
//     orderBy: { createdAt: 'desc' },
//   });

//   return NextResponse.json(items);
// }

export async function GET() {
  try {
    const applicants = await prisma.applicant.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(applicants) // ✅ must be an array
  } catch (err) {
    console.error(err)
    return NextResponse.json([], { status: 500 })
  }
}

export async function getItemsByUserEmail() {
  const email = await getUserEmail();
  if (!email) return [];

  const plants = await prisma.applicant.findMany({
    where: {
      user: {
        email,
      },
    },
  });

  return plants;
}