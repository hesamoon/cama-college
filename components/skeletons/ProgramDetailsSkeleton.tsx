import { Skeleton } from "@mui/material";

function ProgramDetailsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {/* Top section - cover image and title */}
        <div className="grid grid-cols-3 gap-6 mobile-grid-system-level0 md:grid-system-level1 space-y-6 mt-4">
          <div className="col-span-3 space-y-6">
            <div className="space-y-8">
              {/* Cover image skeleton */}
              <Skeleton
                variant="rectangular"
                width="100%"
                height={438}
                className="rounded-sm aspect-16-9"
              />
              {/* Title skeleton */}
              <Skeleton variant="text" width="70%" height={48} />
            </div>
          </div>
        </div>

        {/* Tabs skeleton */}
        <div className="sticky top-[3.75rem] bg-white z-[35] md:grid-system-level1">
          <div className="flex items-center justify-between border-b border-outline-level0 md:w-2/3">
            <div className="flex items-center gap-4">
              {["Description", "Content", "Comments", "Related Programs"].map((tab) => (
                <Skeleton key={tab} variant="text" width={80} height={24} />
              ))}
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Skeleton variant="rectangular" width={100} height={40} />
              <Skeleton variant="rectangular" width={40} height={40} />
            </div>
          </div>
        </div>

        {/* Main content and sidebar */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 space-y-6 mt-4 pb-10">
          {/* Main content */}
          <div className="col-span-2 mobile-grid-system-level0 md:grid-system-level1 space-y-8">
            {/* Description section skeleton */}
            <div className="space-y-6">
              <Skeleton variant="text" width={120} height={32} />
              <div className="space-y-4">
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="95%" height={20} />
                <Skeleton variant="text" width="90%" height={20} />
                <Skeleton variant="text" width="85%" height={20} />
              </div>
            </div>

            {/* Content section skeleton */}
            <div className="space-y-6">
              <Skeleton variant="text" width={100} height={32} />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Skeleton variant="circular" width={20} height={20} />
                    <Skeleton variant="text" width="60%" height={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden border-t border-t-outline-level0 pt-2">
            <div className="mobile-grid-system-level0 md:grid-system-level1 flex items-center justify-between gap-2">
              <Skeleton variant="rectangular" width={120} height={40} />
              <Skeleton variant="text" width={80} height={24} />
            </div>
          </div>

          {/* Sidebar card skeleton */}
          <div className="hidden md:block sticky top-[4.5rem] z-[36] col-span-1 bg-shades-light-90 rounded-sm border border-outline-level0 pt-6 pb-4 px-6 space-y-6 h-fit min-w-96 max-w-fit">
            {/* Price skeleton */}
            <Skeleton variant="text" width={100} height={32} />

            {/* Details grid skeleton */}
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-1 space-y-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <Skeleton variant="circular" width={16} height={16} />
                    <Skeleton variant="text" width={60} height={20} />
                  </div>
                ))}
              </div>
              <div className="col-span-1 space-y-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} variant="text" width={80} height={20} />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border border-outline-level1" />

            {/* Bottom section */}
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Skeleton variant="circular" width={20} height={20} />
                <Skeleton variant="text" width={140} height={20} />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton variant="rectangular" width="100%" height={40} />
                <Skeleton variant="rectangular" width={40} height={40} />
              </div>
              <Skeleton variant="text" width={150} height={20} />
            </div>
          </div>
        </div>

        {/* Comments section skeleton */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-3 mobile-grid-system-level0 md:grid-system-level1 space-y-6 pt-10">
          <div className="col-span-2 space-y-4">
            <Skeleton variant="text" width={100} height={32} />
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="text" width={120} height={20} />
                </div>
                <Skeleton variant="text" width="100%" height={16} />
                <Skeleton variant="text" width="80%" height={16} />
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <Skeleton variant="rectangular" width="100%" height={200} />
          </div>
        </div>

        {/* Related programs skeleton */}
        <div className="grid grid-cols-3 mobile-grid-system-level0 md:grid-system-level1 space-y-6 mt-4">
          <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton variant="rectangular" width="100%" height={174} className="rounded-sm aspect-16-9" />
                <Skeleton variant="text" width="80%" height={24} />
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <Skeleton variant="text" width={40} height={16} />
                    <Skeleton variant="text" width={40} height={16} />
                    <Skeleton variant="text" width={40} height={16} />
                  </div>
                  <Skeleton variant="text" width={80} height={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apply section skeleton */}
      <section className="flex items-center justify-center md:mt-20">
        <div className="mobile-grid-system-level0 md:grid-system-level1 relative bg-primary-tints-90 flex flex-col-reverse md:grid md:grid-cols-2 space-y-8 md:space-y-0 overflow-hidden py-10">
          <div className="col-span-1 z-30 space-y-6 md:space-y-4">
            <div className="space-y-3">
              <Skeleton variant="text" width="80%" height={32} />
              <div className="space-y-2">
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="90%" height={20} />
                <Skeleton variant="text" width="85%" height={20} />
              </div>
            </div>
            <div className="space-y-2 md:space-y-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Skeleton variant="circular" width={12} height={12} />
                  <Skeleton variant="text" width={120} height={20} />
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <Skeleton variant="rectangular" width={120} height={40} />
            </div>
          </div>
          <div className="col-span-1 flex items-end justify-center gap-4">
            <div className="hidden md:block pb-4">
              <Skeleton variant="rectangular" width={120} height={40} />
            </div>
            <Skeleton variant="rectangular" width={296} height={221} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProgramDetailsSkeleton; 