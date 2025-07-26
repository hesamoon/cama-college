// components
import ProfileNavs from "@/components/ProfileNavs";
import UserProfile from "@/components/UserProfile";
import MobileNavbar from "@/components/MobileNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-5 border border-outline-level0 divide-x divide-outline-level0 grid-system-level">
      {/* Top nav bar (mobile only) */}
      <MobileNavbar />

      {/* Sidebar */}
      <div className="hidden md:block col-span-1 py-7 px-4 space-y-6 overflow-y-auto no-scrollbar">
        {/* profile, number, name, apply button */}
        <UserProfile />

        {/* divider */}
        <div className="border border-outline-level0" />

        {/* navs */}
        <ProfileNavs />
      </div>

      {/* Main content */}
      <div className="flex-1 md:col-span-4 w-full md:py-7 space-y-12 overflow-y-auto no-scrollbar">
        {children}
      </div>
    </div>
  );
}
