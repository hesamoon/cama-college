import { Skeleton } from "@mui/material";

function GeneralInformationSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* First Name skeleton */}
      <div className="space-y-1">
        <Skeleton variant="text" width={80} height={20} />
        <Skeleton variant="rectangular" width="100%" height={56} />
      </div>

      {/* Last Name skeleton */}
      <div className="space-y-1">
        <Skeleton variant="text" width={80} height={20} />
        <Skeleton variant="rectangular" width="100%" height={56} />
      </div>

      {/* Phone Number skeleton */}
      <div className="space-y-1">
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="rectangular" width="100%" height={56} />
      </div>

      {/* Job Title Select skeleton */}
      <div className="space-y-1">
        <Skeleton variant="text" width={80} height={20} />
        <Skeleton variant="rectangular" width="100%" height={56} />
      </div>
    </div>
  );
}

export default GeneralInformationSkeleton; 