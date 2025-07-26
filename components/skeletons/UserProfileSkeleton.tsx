import { Skeleton } from "@mui/material";

function UserProfileSkeleton() {
  return (
    <div className="space-y-5">
      {/* Profile picture, name, number skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton
          variant="circular"
          width={48}
          height={48}
        />
        <div className="space-y-0.5">
          <Skeleton variant="text" width={120} height={24} />
          <Skeleton variant="text" width={140} height={20} />
        </div>
      </div>

      {/* Apply banner skeleton */}
      <div className="relative overflow-hidden rounded bg-shades-light-90 py-2 px-[13px] flex items-center justify-between gap-2.5">
        <div className="space-y-1">
          <Skeleton variant="text" width={180} height={20} />
          <Skeleton variant="text" width={220} height={16} />
        </div>
        <Skeleton
          variant="circular"
          width={20}
          height={20}
        />
        {/* Background decorative elements skeleton */}
        <div>
          <Skeleton
            variant="rectangular"
            width={97}
            height={97}
            className="absolute -top-[4.4rem] -left-20 opacity-10 rotate-[60deg] rounded-xs"
          />
          <Skeleton
            variant="rectangular"
            width={97}
            height={97}
            className="absolute -bottom-[4.6rem] -right-[0.8rem] opacity-10 rotate-[50deg] rounded-xs"
          />
          <Skeleton
            variant="rectangular"
            width={97}
            height={97}
            className="absolute -bottom-[4.5rem] -right-[2.5rem] opacity-10 rotate-[50deg] rounded-xs"
          />
          <Skeleton
            variant="rectangular"
            width={89}
            height={50}
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfileSkeleton; 