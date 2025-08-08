import { Skeleton } from "@mui/material";

function JobDetailsSkeleton() {
  return (
    <div className="md:col-span-3 p-4 md:grid md:grid-cols-3 md:gap-6">
      {/* Main content */}
      <div className="col-span-2 space-y-12">
        {/* Header section */}
        <div className="space-y-6 md:space-y-3">
          {/* Title and action buttons */}
          <div className="flex justify-between">
            <Skeleton
              variant="text"
              width={300}
              height={32}
              className="mobile-title-large md:title-large"
            />

            <div className="flex items-center gap-2 md:gap-3">
              <Skeleton
                variant="circular"
                width={20}
                height={20}
              />
              <Skeleton
                variant="circular"
                width={20}
                height={20}
              />
            </div>
          </div>

          {/* Important details */}
          <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-16">
            {/* Salary */}
            <div className="space-y-1">
              <Skeleton
                variant="text"
                width={60}
                height={20}
                className="mobile-body-large md:body-large"
              />
              <Skeleton
                variant="text"
                width={120}
                height={20}
                className="mobile-body-large md:body-large"
              />
            </div>

            {/* Location */}
            <div className="space-y-1">
              <Skeleton
                variant="text"
                width={60}
                height={20}
                className="mobile-body-large md:body-large"
              />
              <Skeleton
                variant="text"
                width={100}
                height={20}
                className="mobile-body-large md:body-large"
              />
            </div>

            {/* Time */}
            <div className="space-y-1">
              <Skeleton
                variant="text"
                width={60}
                height={20}
                className="mobile-body-large md:body-large"
              />
              <Skeleton
                variant="text"
                width={80}
                height={20}
                className="mobile-body-large md:body-large"
              />
            </div>
          </div>
        </div>

        {/* Company details */}
        <div className="border border-outline-level1 rounded p-4 space-y-3">
          <div className="flex justify-between">
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

            <Skeleton
              variant="rectangular"
              width={80}
              height={32}
              className="rounded"
            />
          </div>

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

        {/* Job description */}
        <div className="space-y-3">
          <Skeleton
            variant="text"
            width={200}
            height={24}
            className="mobile-title-medium md:title-medium"
          />

          <div className="space-y-2">
            <Skeleton
              variant="text"
              width="100%"
              height={20}
              className="mobile-body-large md:body-large"
            />
            <Skeleton
              variant="text"
              width="95%"
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
              width="98%"
              height={20}
              className="mobile-body-large md:body-large"
            />
            <Skeleton
              variant="text"
              width="85%"
              height={20}
              className="mobile-body-large md:body-large"
            />
            <Skeleton
              variant="text"
              width="92%"
              height={20}
              className="mobile-body-large md:body-large"
            />
            <Skeleton
              variant="text"
              width="88%"
              height={20}
              className="mobile-body-large md:body-large"
            />
            <Skeleton
              variant="text"
              width="96%"
              height={20}
              className="mobile-body-large md:body-large"
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="relative col-span-1">
        <div className="md:sticky md:top-0 col-span-1 md:bg-shades-light-90 md:rounded-sm md:border md:border-outline-level0 pt-6 md:pb-4 md:space-y-6 md:h-fit md:min-w-80 md:max-w-fit">
          {/* Prerequisites title */}
          <Skeleton
            variant="text"
            width={120}
            height={24}
            className="hidden md:block title-medium mx-6"
          />

          {/* Prerequisites details */}
          <div className="hidden md:block space-y-2 px-6">
            {/* Career history */}
            <div className="flex items-center justify-between gap-3 body-large">
              <Skeleton
                variant="text"
                width={100}
                height={20}
              />
              <div className="w-full border border-dashed border-outline-level0" />
              <Skeleton
                variant="text"
                width={60}
                height={20}
              />
            </div>

            {/* Age */}
            <div className="flex items-center justify-between gap-3 body-large">
              <Skeleton
                variant="text"
                width={40}
                height={20}
              />
              <div className="w-full border border-dashed border-outline-level0" />
              <Skeleton
                variant="text"
                width={60}
                height={20}
              />
            </div>

            {/* Gender */}
            <div className="flex items-center justify-between gap-3 body-large">
              <Skeleton
                variant="text"
                width={60}
                height={20}
              />
              <div className="w-full border border-dashed border-outline-level0" />
              <Skeleton
                variant="text"
                width={100}
                height={20}
              />
            </div>

            {/* Education */}
            <div className="flex items-center justify-between gap-3 body-large">
              <Skeleton
                variant="text"
                width={80}
                height={20}
              />
              <div className="w-full border border-dashed border-outline-level0" />
              <Skeleton
                variant="text"
                width={100}
                height={20}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block border border-outline-level0" />

          {/* Send CV button */}
          <div className="md:px-6">
            <Skeleton
              variant="rectangular"
              width="100%"
              height={48}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsSkeleton; 