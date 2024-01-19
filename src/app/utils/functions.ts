import { UserData } from "./interfaces";
import { currentUser } from "@clerk/nextjs";
export async function getUserData() {
  const user = await currentUser();

  if (!user) {
    return null;
  }
  const userData = user as unknown as UserData;

  return userData;
}
