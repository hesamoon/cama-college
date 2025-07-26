import { Skeleton } from "@mui/material";

function BioSkeleton() {
  return (
    <div className="space-y-2">
      {/* Title skeleton */}
      <Skeleton variant="text" width={100} height={24} />
      {/* Bio text skeleton (multiple lines) */}
      <Skeleton variant="text" width="90%" height={20} />
      <Skeleton variant="text" width="95%" height={20} />
      <Skeleton variant="text" width="80%" height={20} />
    </div>
  );
}

export default BioSkeleton;