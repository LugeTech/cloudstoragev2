"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { FrontPage } from "@/components/front-page";

export default function Home() {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded || !isSignedIn) {
    return (
      <button onClick={() => (window.location.href = "/sign-in")}>
        Sign In
      </button>
    );
  } else {
    return (
      <main className="flex min-h-screen w-full flex-col items-center sm:px-24 ">
        <FrontPage />
      </main>
    );
  }
}
