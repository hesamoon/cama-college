import { Skeleton } from "@mui/material";

function CompanyPreviewSkeleton() {
  return (
    <div className="border border-outline-level1 rounded p-4 space-y-3">
      <div className="flex justify-between">
        {/* Company logo and info */}
        <div className="flex gap-2">
          <Skeleton
            variant="rectangular"
            width={48}
            height={48}
            className="rounded-xs"
          />

          <div className="space-y-1.5">
            <Skeleton
              variant="text"
              width={150}
              height={24}
              className="mobile-title-medium md:title-medium"
            />

            <Skeleton
              variant="text"
              width={100}
              height={16}
              className="mobile-label-small md:label-small"
            />
          </div>
        </div>

        {/* Website button */}
        <Skeleton
          variant="rectangular"
          width={80}
          height={32}
          className="rounded"
        />
      </div>

      {/* Company description */}
      <div className="space-y-2">
        <Skeleton
          variant="text"
          width="100%"
          height={20}
          className="mobile-body-large md:body-large"
        />
        <Skeleton
          variant="text"
          width="90%"
          height={20}
          className="mobile-body-large md:body-large"
        />
        <Skeleton
          variant="text"
          width="95%"
          height={20}
          className="mobile-body-large md:body-large"
        />
      </div>
    </div>
  );
}

export default CompanyPreviewSkeleton; 