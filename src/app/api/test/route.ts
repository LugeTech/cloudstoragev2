import { NextRequest, NextResponse } from "next/server";
import prisma 
export async function GET(request: NextRequest) {
  try {
    const data = await prisma.file.findUnique({
      where: {
        userId: "user_2XM8vsWSmFUAg1gxZGeqtEB99Yw",
      },
    });
    console.log(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
  }
}
