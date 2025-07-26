// disable interaction / components
import MobileNavbar from "@/components/MobileNavbar";
import LessonesNavs from "@/components/LessonesNavs";
import DisableInteractions from "@/components/DisableInteractions";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DisableInteractions />

      <div className="mobile-grid-system-level0 md:grid-system-level0 md:grid md:grid-cols-4 md:py-10">
        <MobileNavbar />

        {/* left side */}
        <div className="hidden md:block col-span-1 space-y-5 sticky top-[5rem] h-fit max-w-80">
          {/* title */}
          <h3 className="title-large text-on_surface-light">Program Content</h3>

          <LessonesNavs />
        </div>

        {/* right side / details */}
        <div className="col-span-3 mobile-grid-system-level0 !px-0 md:!px-16 md:grid-system-level0">
          {children}
        </div>
      </div>
    </>
  );
}
