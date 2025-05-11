import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import LoginButtons from "./LoginButtons";
import SearchBoxContainer from "./SearchBoxContainer";

// utils
import { userAttr } from "@/utilities/userAttr";

function Navbar() {
  return (
    <div className="sticky top-0 z-[99999] bg-white flex items-center justify-between py-3 grid-system-level0 !gap-20">
      {/* left-side -> logo and nav */}
      <div className="flex items-center gap-10">
        {/* logo */}
        <Link href="/">
          <Image
            src="/cama-college-logo.png"
            alt="logo"
            width="60"
            height="66"
          />
        </Link>

        {/* nav */}
        <ul className="flex items-center gap-9 text-on_surface-light">
          <Link href="/programs">
            <li>Programs</li>
          </Link>
          <Link href="/events">
            <li>Events</li>
          </Link>
          <Link href="/apply">
            <li>Apply</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <Suspense fallback={<p>Loading search info...</p>}>
        <SearchBoxContainer />
      </Suspense>

      {/* right-side -> unAuth -> login and shopping cart buttons, auth -> profile button */}
      {userAttr().role === "ADMIN" ? (
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
      )}
    </div>
  );
}

export default Navbar;
