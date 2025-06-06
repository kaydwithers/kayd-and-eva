import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }

    // Use Prisma Client to create a new entry in the database
    const newEntry = await prisma.guestbook.create({
      data: {
        name: name,
        message: message,
      },
    });

    // Show new entries immediately
    // revalidatePath("/");

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error("Failed to create guestbook entry:", error);
    return NextResponse.json(
      { error: "Failed to create guestbook entry." },
      { status: 500 }
    );
  }
}
