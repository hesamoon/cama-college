"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function TeacherMenu() {
  const pathname = usePathname();

  return (
    <div className="flex items-center border-b border-outline-level0 mobile-grid-system-level0 md:grid-system-level0 !gap-0">
      <Link
        href="./enrolled"
        className={`mobile-body-large md:body-large py-4 px-8 transition-all ease-in-out duration-300 ${
          pathname.includes("/enrolled")
            ? "text-background-primary-light border-b border-background-primary-light"
            : "text-txt-on-surface-secondary-light"
        }`}
      >
        Enrolled Programs
      </Link>

      <Link
        href="./my-programs"
        className={`mobile-body-large md:body-large py-4 px-8 transition-all ease-in-out duration-300 ${
          pathname.includes("/my-programs")
            ? "text-background-primary-light border-b border-background-primary-light"
            : "text-txt-on-surface-secondary-light"
        }`}
      >
        My Programs
      </Link>
    </div>
  );
}

export default TeacherMenu;
