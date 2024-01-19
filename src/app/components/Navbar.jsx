import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex">
      <ul className="flex">
        <li>
          <Link href="/">Test</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
