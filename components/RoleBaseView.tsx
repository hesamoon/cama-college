"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useQuery } from "@tanstack/react-query";

// components
import LoginButtons from "./LoginButtons";
import BluredImage from "./BluredImage";

// api
// import { getMe } from "@/lib/api/auth";

function RoleBaseView({
  role,
  landingHeader,
}: {
  role: string;
  landingHeader?: boolean;
}) {
  // const { data: myData } = useQuery({
  //   queryKey: ["me"],
  //   queryFn: () => getMe(),
  // });

  // console.log(myData?.data.data);

  const pathname = usePathname();

  if (pathname === "/apply") return;

  return role !== "UNSIGNED" ? (
    <Link
      href="/profile"
      className="rounded-full flex items-center gap-2 p-1 pr-2 cursor-pointer border border-outline1"
    >
      <BluredImage
        url="/profile.jpg"
        name="profile"
        imgStyle="!rounded-full w-10 h-10"
        blurhashStyle="!rounded-full w-10 h-10"
        cWidth={40}
        cHeight={40}
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
    <LoginButtons color={landingHeader ? "white" : "black"} icon={landingHeader ? "login-white" : "login"} />
  );
}

export default RoleBaseView;
