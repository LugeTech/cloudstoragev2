import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prisma/Prisma";
export async function GET(request: NextRequest) {
  try {
    const data = await prisma.file.findMany({
      where: {
        userId: "user_2XM8vsWSmFUAg1gxZGeqtEB99Yw",
      },
    });
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
  }
}
