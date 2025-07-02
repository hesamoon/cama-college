import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import Navbar from "./Navbar";
import RoleBaseView from "./RoleBaseView";
import SearchBoxContainer from "./SearchBoxContainer";

// utils
import { userAttr } from "@/utilities/userAttr";

function Header() {
  return (
    <div className="sticky top-0 z-40 bg-white flex items-center justify-between py-3 grid-system-level0 border-b border-outline-level0 h-[3.75rem]">
      {/* left-side -> logo and nav */}
      <div className="flex items-center gap-10">
        {/* logo */}
        <Link href="/">
          <Image
            src="/cama-college-logo.png"
            alt="logo"
            width={43}
            height={48}
          />
        </Link>

        {/* nav */}
        <Navbar />
      </div>

      <Suspense fallback={<p>Loading search info...</p>}>
        <SearchBoxContainer />
      </Suspense>

      {/* right-side -> unAuth -> login and shopping cart buttons, auth -> profile button */}
      <RoleBaseView role={userAttr().role} />
    </div>
  );
}

export default Header;
