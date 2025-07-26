// components
import MobileNavbar from "@/components/MobileNavbar";
import PoliciesNavs from "@/components/PoliciesNavs";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mobile-grid-system-level0 md:grid-system-level1 md:grid md:grid-cols-3 md:space-y-8 md:py-10">
      <MobileNavbar />

      {/* left side */}
      <div className="hidden md:block col-span-1">
        {/* navs */}
        <PoliciesNavs />
      </div>

      {/* right side / details */}
      <div className="col-span-2">{children}</div>
    </div>
  );
}
