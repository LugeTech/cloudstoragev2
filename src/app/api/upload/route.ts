import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prisma/Prisma";
import fs from "fs";
import { encryptBuffer } from "@/app/utils/encryption";
import { getUserData } from "@/app/utils/functions";
import { UserData } from "@/app/utils/interfaces";

const unixTime = Date.now();

export async function POST(request: NextRequest) {
  console.log("POST");

  const user = (await getUserData(request)) as UserData;
  console.log(user.clerk_id);
  const userFolder = user.clerk_id;

  const formData = await request.formData();
  const file = formData.get("file") as File;
  const filename = (formData.get("filename") as string) || file.name;

  if (!file) {
    console.log("No file found");
    console.log(formData);
    return NextResponse.json({ success: false });
  }

  const newFilename = `${filename}_${unixTime}`;

  try {
    if (!fs.existsSync(`./public/uploads/${user.clerk_id}`)) {
      fs.mkdirSync(`./public/uploads/${userFolder}`);
      console.log("Folder created");
    }
  } catch (error) {
    console.log("Error creating folder: ", error);
  }
  try {
    // Convert the File to a Buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Encrypt the Buffer
    const encryptedBuffer = await encryptBuffer(fileBuffer);

    // Write the encrypted Buffer directly to disk
    fs.writeFileSync(
      `./public/uploads/${userFolder}/${newFilename}`,
      encryptedBuffer,
    );
  } catch (error) {
    // Handle the error
    console.error(error);
    return NextResponse.json({ success: false });
  }

  // if(user !=null){
  // try {
  //   const newUser = await prisma.user.create({
  //     data: {
  //       username: user.firstName,
  //       email: user?.emailAddresses,
  //       clerk_id: user?.id,
  //       //files:
  //     },
  //   });
  //   console.log(newUser);
  // } catch (error) {
  //   console.log(error);
  // }
  // }

  // Process the form data
  return NextResponse.json({ success: true });
}
