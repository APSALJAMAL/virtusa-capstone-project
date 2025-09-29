/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getUserId } from "@/actions/user.action";

const prisma = new PrismaClient();



// GET one applicant by id
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const userId = await getUserId();
  const { id } = params;

  try {
    // Allow admin/anonymous to fetch
    const applicant = await prisma.applicant.findUnique({ where: { id } });
    if (!applicant) return NextResponse.json({ error: "Applicant not found" }, { status: 404 });

    // Optional: check ownership if needed
    if (applicant.userId && applicant.userId !== userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    return NextResponse.json(applicant);
  } catch (err: any) {
    console.error("Error fetching applicant:", err);
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}

// DELETE applicant by id
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const userId = await getUserId();
  const { id } = params;

  try {
    const applicant = await prisma.applicant.findUnique({ where: { id } });
    if (!applicant) return NextResponse.json({ error: "Applicant not found" }, { status: 404 });

    if (applicant.userId && applicant.userId !== userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await prisma.applicant.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error deleting applicant:", err);
    return NextResponse.json({ error: err.message || "Failed to delete" }, { status: 500 });
  }
}

// UPDATE applicant by id

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const userId = await getUserId();
  const { id } = params;
  const data = await req.json();

  try {
    const applicant = await prisma.applicant.findUnique({ where: { id } });
    if (!applicant) {
      return NextResponse.json({ error: "Applicant not found" }, { status: 404 });
    }

    // Only the owner can update
    if (applicant.userId && applicant.userId !== userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Prepare update object
    const updateData: any = {
      fullName: data.fullName,
      contactNumber: data.contactNumber,
      email: data.email,
      address: data.address,
      governmentId: data.governmentId,
      reason: data.reason,
      status: data.status,
      passType: data.passType,
    };

    const now = new Date();

    if (data.status === 'APPROVED') {
      // Set validFrom and validTo based on passType
      updateData.validFrom = now;

      switch (data.passType) {
        case 'PERSONAL':
          updateData.validTo = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 1 day
          break;
        case 'ORGANIZATION':
          updateData.validTo = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 1 week
          break;
        case 'INTER_DISTRICT':
          updateData.validTo = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 days
          break;
        case 'INTER_STATE':
          updateData.validTo = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
          break;
        case 'VEHICLE':
          updateData.validTo = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days
          break;
        default:
          updateData.validTo = new Date(now.getTime() + 24 * 60 * 60 * 1000); // default 1 day
      }
    } else if (data.status === 'REJECTED') {
      // Clear validFrom and validTo if rejected
      updateData.validFrom = null;
      updateData.validTo = null;
    }

    const updated = await prisma.applicant.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    console.error("Error updating applicant:", err);
    return NextResponse.json({ error: err.message || "Update failed" }, { status: 400 });
  }
}
