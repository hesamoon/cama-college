import { Skeleton } from "@mui/material";

function JobCardSkeleton({
  border = true,
  archFlag = true,
  divider = true,
  cvBtn = true,
}: {
  border?: boolean;
  archFlag?: boolean;
  divider?: boolean;
  cvBtn?: boolean;
}) {
  return (
    <div
      className={`${
        border ? "rounded border border-outline-level1" : ""
      } p-3`}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-2">
          {/* Company logo skeleton */}
          <Skeleton
            variant="rectangular"
            width={48}
            height={48}
            className="rounded-xs"
          />

          <div className="space-y-1">
            {/* Job title skeleton */}
            <Skeleton
              variant="text"
              width={100}
              height={24}
              className="mobile-title-medium md:title-medium"
            />

            {/* Company name skeleton */}
            <Skeleton
              variant="text"
              width={100}
              height={20}
              className="mobile-body-medium md:body-medium"
            />
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {archFlag && (
            <>
              {/* Archive button skeleton */}
              <Skeleton
                variant="circular"
                width={24}
                height={24}
              />

              <div className="w-1 h-1 rounded-full bg-outline-level0" />
            </>
          )}

          {/* Deadline skeleton */}
          <Skeleton
            variant="text"
            width={80}
            height={16}
            className="mobile-label-small md:label-small"
          />
        </div>
      </div>

      <div className="mt-4 pl-12 md:pl-14 space-y-1">
        {/* Location skeleton */}
        <Skeleton
          variant="text"
          width={150}
          height={20}
          className="mobile-body-medium md:body-medium"
        />
        
        {/* Work type skeleton */}
        <Skeleton
          variant="text"
          width={120}
          height={20}
          className="mobile-body-medium md:body-medium"
        />
      </div>

      {divider && <div className="mt-6 border border-outline-level0" />}

      <div className="flex justify-between items-center pt-3">
        {/* Salary skeleton */}
        <Skeleton
          variant="text"
          width={140}
          height={20}
          className="mobile-label-medium-db md:label-medium-db"
        />

        {cvBtn && (
          <Skeleton
            variant="rectangular"
            width={80}
            height={32}
            className="rounded"
          />
        )}
      </div>
    </div>
  );
}

export default JobCardSkeleton; 