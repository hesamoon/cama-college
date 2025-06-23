// components
import ProfileNavs from "@/components/ProfileNavs";
import UserProfile from "@/components/UserProfile";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <div className="h-screen grid-system-level grid grid-cols-5 border rounded-t-sm border-outline-level0 divide-x divide-outline-level0">
      {/* left side */}
      <div className="col-span-1 py-7 px-4 space-y-6 overflow-y-auto no-scrollbar">
        {/* profile, number, name, apply button */}
        <UserProfile />

        {/* divider */}
        <div className="border border-outline-level0" />

        {/* navs */}
        <ProfileNavs />
      </div>

      {/* right side / details */}
      <div className="col-span-4 w-full py-7 space-y-12 overflow-y-auto no-scrollbar">
        {children}
      </div>
    </div>
  );
}
