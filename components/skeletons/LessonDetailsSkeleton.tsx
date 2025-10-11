import { Skeleton } from "@mui/material";

export default function LessonDetailsSkeleton() {
  return (
    <div className="w-full mobile-grid-system-level0 !px-0 md:!px-16 md:grid-system-level0 space-y-10 md:py-10">
      <div className="space-y-6">
        <div className="space-y-8">
          {/* title */}
          <div className="flex items-center justify-between">
            <Skeleton variant="text" width="60%" height={32} />
            <Skeleton
              variant="circular"
              width={36}
              height={36}
              className="hidden md:block"
            />
          </div>

          {/* descriptions */}
          <div className="space-y-6">
            {/* title / description 1 */}
            <div className="space-y-3">
              <Skeleton variant="text" width="40%" height={28} />
              <div className="space-y-2">
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="95%" height={20} />
                <Skeleton variant="text" width="90%" height={20} />
                <Skeleton variant="text" width="85%" height={20} />
              </div>
            </div>

            {/* image placeholder */}
            <Skeleton
              variant="rectangular"
              height={438}
              width="100%"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* article */}
        <div className="space-y-4 border border-outline-level1 rounded py-3 px-4">
          <div className="space-y-1.5">
            <Skeleton variant="text" width="30%" height={20} />
            <Skeleton variant="text" width="50%" height={24} />
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <Skeleton variant="text" width={50} height={18} />
            <Skeleton variant="circular" width={6} height={6} />
            <Skeleton variant="text" width={80} height={18} />
            <Skeleton variant="circular" width={6} height={6} />
            <Skeleton variant="text" width={100} height={18} />
          </div>
        </div>
      </div>

      {/* like & dislike */}
      <div className="flex items-center justify-end gap-6 md:gap-12">
        <Skeleton variant="text" width={100} height={20} />
        <div className="flex items-center gap-4">
          <div className="flex items-center md:gap-2">
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="text" width={20} height={20} />
          </div>
          <div className="flex items-center md:gap-2">
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="text" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
