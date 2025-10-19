import { Skeleton } from "@mui/material";

function InProgressEventsSkeletone() {
  return (
    <div className="mobile-grid-system-level0 md:grid-system-level0 w-full space-y-9 py-5">
      {/* Schedule Section */}
      <div className="space-y-4">
        <Skeleton variant="text" width={180} height={32} />
        <div className="grid grid-cols-12 gap-1 items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="rounded flex flex-col items-center justify-center w-16 h-20 overflow-hidden"
            >
              <Skeleton variant="rectangular" width="100%" height="100%" />
            </div>
          ))}
        </div>
      </div>

      {/* events skeleton */}
      <div className="space-y-9">
        {/* upcoming events skeleton */}
        <div className="space-y-4">
          {/* title skeleton */}
          <div>
            <Skeleton variant="text" width={180} height={32} />
          </div>

          {/* event cards skeleton */}
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="min-w-[267px]">
                <Skeleton
                  variant="rounded"
                  width={267}
                  height={260}
                  sx={{ borderRadius: "16px" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* events history skeleton */}
        <div className="space-y-6">
          {/* search box */}
          <Skeleton variant="text" width="100%" height={32} />

          <div className="space-y-4 pb-10 md:pb-0">
            {/* title, filter box */}
            <div className="flex items-center justify-between">
              {/* title skeleton */}
              <div>
                <Skeleton variant="text" width={160} height={32} />
              </div>

              {/* filter skeleton */}
              <div className="flex items-center border border-outline1 rounded px-2 md:pl-3 md:pr-4 mobile-body-large md:body-large">
                <Skeleton
                  variant="text"
                  width={60}
                  height={24}
                  sx={{ mr: 1 }}
                />
                <Skeleton
                  variant="rounded"
                  width={120}
                  height={36}
                  sx={{ borderRadius: "8px" }}
                />
              </div>
            </div>

            {/* events list skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="min-w-[267px]">
                  <Skeleton
                    variant="rounded"
                    width={267}
                    height={260}
                    sx={{ borderRadius: "16px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InProgressEventsSkeletone;
