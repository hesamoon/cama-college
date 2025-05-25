// components
import PoliciesNavs from "@/components/PoliciesNavs";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid-system-level1 grid grid-cols-3 py-10">
      {/* left side */}
      <div className="col-span-1">
        {/* navs */}
        <PoliciesNavs />
      </div>

      {/* right side / details */}
      <div className="col-span-2">{children}</div>
    </div>
  );
}
