import { Skeleton } from "@mui/material";

export default function CartItemsSkeleton() {
  return (
    <div className="spa">
      {/* Generate 3 skeleton items */}
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-4 justify-between"
        >
          {/* Item name skeleton */}
          <Skeleton variant="text" width="80%" height={48} />
          {/* Price skeleton */}
          <Skeleton variant="text" width="20%" height={48} />
        </div>
      ))}
    </div>
  );
}
