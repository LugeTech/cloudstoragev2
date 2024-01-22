"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { FrontPage } from "@/components/front-page";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center sm:px-24 ">
      <FrontPage />
    </main>
  );
}
