"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// components
import LoginButtons from "./LoginButtons";

function RoleBaseView({ role }: { role: string }) {
  const pathname = usePathname();

  if (pathname === "/apply") return;

  return role !== "UNSIGNED" ? (
    <Link
      href="/profile"
      className="rounded-full flex items-center gap-2 p-1 pr-2 cursor-pointer border border-outline1"
    >
      <Image
        className="rounded-full"
        src="/profile.jpg"
        alt="profile"
        width={40}
        height={40}
      />

      <Image
        className="rounded-full"
        src="/arrow-down.svg"
        alt="arrow-down"
        width={20}
        height={20}
      />
    </Link>
  ) : (
    <LoginButtons />
  );
}

export default RoleBaseView;
