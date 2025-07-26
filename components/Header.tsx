import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

// components
import Navbar from "./Navbar";
import RoleBaseView from "./RoleBaseView";
import MobileMenuToggle from "./MobileMenuToggle";
import SearchBoxContainer from "./SearchBoxContainer";

// utils
import { userAttr } from "@/utilities/userAttr";

function Header() {
  const user = userAttr();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-outline-level0">
      <div className="mobile-grid-system-level0 md:grid-system-level0 flex items-center justify-between py-3 h-[3.75rem] gap-4">
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center gap-2 md:gap-10 flex-shrink-0">
          <Link href="/" className="shrink-0">
            <Image
              src="/cama-college-logo.png"
              alt="logo"
              width={43}
              height={48}
              className="w-auto h-10"
            />
          </Link>

          {/* Hamburger menu (mobile only) */}
          <div className="flex md:hidden">
            <MobileMenuToggle role={user.role} />
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:block">
            <Navbar />
          </div>
        </div>

        {/* Center: Search box */}
        <div className="w-full md:flex-1 md:mx-6">
          <Suspense fallback={<p>Loading search info...</p>}>
            <SearchBoxContainer />
          </Suspense>
        </div>

        {/* Right: Auth/Profile buttons */}
        <div className="hidden md:block flex-shrink-0">
          <RoleBaseView role={user.role} />
        </div>
      </div>
    </header>
  );
}

export default Header;
