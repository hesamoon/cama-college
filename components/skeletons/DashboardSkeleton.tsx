import { Skeleton } from "@mui/material";

export default function DashboardSkeleton() {
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

      {/* Last Program Section */}
      <div className="space-y-4">
        <Skeleton variant="text" width={180} height={32} />
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Left image skeleton */}
          <div className="w-full md:w-[282px]">
            <Skeleton
              variant="rectangular"
              width="100%"
              height={121}
            />
          </div>

          {/* Right section */}
          <div className="flex flex-col gap-2 justify-between w-full">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                {/* Title */}
                <Skeleton variant="text" width={180} height={28} />

                {/* Metadata (level, type, duration) */}
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-1">
                      <Skeleton variant="circular" width={12} height={12} />
                      <Skeleton variant="text" width={50} height={20} />
                    </div>
                  ))}
                </div>
              </div>

              {/* More button */}
              <Skeleton variant="circular" width={24} height={24} />
            </div>

            {/* Bottom section */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mt-2">
              {/* Progress bar */}
              <div className="space-y-2 w-full md:w-[50%]">
                <div className="flex justify-between">
                  <Skeleton variant="text" width={60} height={20} />
                  <Skeleton variant="text" width={30} height={20} />
                </div>
                <Skeleton
                  variant="rectangular"
                  height={6}
                  className="rounded-full"
                />
              </div>

              {/* Continue button */}
              <div className="md:flex md:items-center md:justify-end w-full md:w-auto">
                <Skeleton
                  variant="rectangular"
                  width={180}
                  height={36}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="space-y-4">
        <Skeleton variant="text" width={180} height={32} />
        <div className="space-y-3 md:grid md:grid-cols-3 md:gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative overflow-hidden bg-surface0-light border border-outline-level0 rounded-lg h-48"
            >
              <Skeleton variant="rectangular" width="100%" height="100%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
