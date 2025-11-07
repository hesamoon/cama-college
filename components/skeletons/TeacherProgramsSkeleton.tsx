import { Skeleton } from "@mui/material";

function TeacherProgramsSkeleton() {
  return (
    <div className="mobile-grid-system-level0 md:grid-system-level0 w-full space-y-9 py-0">
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
    </div>
  );
}

export default TeacherProgramsSkeleton;
