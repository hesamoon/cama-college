import { Skeleton } from "@mui/material";

export default function SubjectsSkeleton() {
  return (
    <div className="md:border md:border-outline-level1 divide-y divide-outline-level0">
      <div className="bg-surface0-light">
        {/* Subject Header */}
        <div className="flex items-center justify-between bg-surface0-light p-5">
          <Skeleton variant="text" width="40%" height={28} />
          <Skeleton variant="circular" width={24} height={24} />
        </div>

        {/* Lessons */}
        <div className="bg-white divide-y divide-outline-level1">
          {[...Array(2)].map((_, j) => (
            <div
              key={j}
              className="p-4 flex items-center justify-between cursor-default"
            >
              <div className="flex items-center gap-2">
                <Skeleton variant="circular" width={20} height={20} />
                <Skeleton variant="text" width={150} height={20} />
              </div>

              <div className="flex items-center gap-2">
                <Skeleton variant="circular" width={16} height={16} />
                <Skeleton variant="text" width={40} height={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
