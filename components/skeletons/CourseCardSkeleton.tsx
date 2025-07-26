import { Skeleton } from "@mui/material";

function CourseCardSkeleton({ type }: { type: string }) {
  if (type === "post") {
    return (
      <div className="space-y-3">
        <div className="space-y-2">
          <Skeleton
            variant="rectangular"
            width="100%"
            height={174}
            className="rounded-sm aspect-16-9"
          />
          <div>
            <div className="flex items-center gap-1">
              <Skeleton variant="circular" width={6} height={6} />
              <Skeleton variant="text" width={40} height={16} />
            </div>
            <Skeleton variant="text" width="80%" height={24} />
          </div>
        </div>
        <Skeleton variant="text" width={80} height={16} />
      </div>
    );
  }

  return (
    <div className="space-y-2 relative">
      <Skeleton
        variant="rectangular"
        width="100%"
        height={174}
        className="rounded-sm aspect-16-9"
      />
      {/* Sold Out badge skeleton */}
      <div className="absolute top-2 left-2">
        <Skeleton variant="rectangular" width={60} height={20} />
      </div>
      <div className="space-y-3">
        <Skeleton variant="text" width="80%" height={24} />
        {type === "programs" ? (
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-1">
                <Skeleton variant="circular" width={12} height={12} />
                <Skeleton variant="text" width={40} height={16} />
              </div>
              <div className="flex items-center gap-1">
                <Skeleton variant="circular" width={12} height={12} />
                <Skeleton variant="text" width={40} height={16} />
              </div>
              <div className="flex items-center gap-1">
                <Skeleton variant="circular" width={12} height={12} />
                <Skeleton variant="text" width={40} height={16} />
              </div>
            </div>
            <Skeleton variant="text" width={100} height={20} />
          </div>
        ) : type === "events" ? (
          <div className="flex items-center gap-4">
            <Skeleton variant="text" width={60} height={24} />
            <div className="flex-1">
              <Skeleton variant="rectangular" width="100%" height={2} />
            </div>
            <Skeleton variant="text" width={60} height={16} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CourseCardSkeleton;
