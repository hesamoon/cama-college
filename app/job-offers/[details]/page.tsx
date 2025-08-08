"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

// components
import Button from "@/components/Button";
import FileUpload from "@/components/FileUpload";
import JobCard from "@/components/JobCard";
import CompanyPreview from "@/components/CompanyPreview";
import JobCardSkeleton from "@/components/skeletons/JobCardSkeleton";
import JobDetailsSkeleton from "@/components/skeletons/JobDetailsSkeleton";

// utils
import { getTimeRemaining } from "@/utilities/utils";

// api - job-opportunity
import {
  getJobOpportunities,
  getJobOpportunity,
} from "@/lib/api/job-opportunity";

// types
import { JobOffers } from "@/app/types/types";

function Page() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");

  // GET
  const { data: jobOpportunitiesData, isLoading: isJobpportunitiesLoading } =
    useQuery({
      queryKey: ["job-opportunities"],
      queryFn: getJobOpportunities,
    });
  const { data: jobOpportunityData, isLoading: isLoadingJobOpportunityData } =
    useQuery({
      queryKey: ["job-opportunity", jobId],
      queryFn: () => getJobOpportunity(jobId || ""),
    });

  const jobDetails: JobOffers = jobOpportunityData?.data.data;

  console.log(jobDetails);

  return (
    <div className="relative mobile-grid-system-level md:grid-system-level">
      <div className="border border-outline-level0 md:grid md:grid-cols-4 md:h-screen">
        {/* related jobs */}
        <div className="hidden md:block col-span-1 overflow-y-auto no-scrollbar border-r border-outline-level0">
          {/* title */}
          <h5 className="sticky top-0 p-6 bg-white">Related Jobs</h5>

          {/* jobs */}
          <div>
            {isJobpportunitiesLoading ? (
              [...Array(3)].map((_, index) => (
                <JobCardSkeleton
                  key={index}
                  border={false}
                  archFlag={false}
                  divider={false}
                  cvBtn={false}
                />
              ))
            ) : jobOpportunitiesData?.data.data.length > 0 ? (
              jobOpportunitiesData?.data.data.map((job: JobOffers) => (
                <>
                  <JobCard
                    key={job.id}
                    job={job}
                    archFlag={false}
                    border={false}
                    divider={false}
                    cvBtn={false}
                  />

                  <div className="border border-outline-level0 w-full" />
                </>
              ))
            ) : (
              <div className="flex items-center justify-center">
                <p className="text-txt-on-surface-secondary-light">
                  No job offers found
                </p>
              </div>
            )}
          </div>
        </div>

        {isLoadingJobOpportunityData ? (
          <JobDetailsSkeleton />
        ) : (
          <>
            <div className="md:col-span-2 p-4 md:overflow-y-auto no-scrollbar">
              <div className="col-span-2 space-y-12">
                {/* header section */}
                <div className="space-y-6 md:space-y-3">
                  {/* title */}
                  <div className="flex justify-between gap-2">
                    <h3 className="mobile-title-large md:title-large">
                      {jobDetails?.title}
                    </h3>

                    <div className="flex items-center justify-end gap-2 md:gap-4 w-32 md:w-fit">
                      <Button
                        props={{
                          value: "",
                          type: "text",
                          color: "red",
                          leftIcon: "",
                          rightIcon: "archive-add-white",
                          disabled: false,
                          width: 20,
                          height: 20,
                        }}
                      />

                      <Button
                        props={{
                          value: "",
                          type: "text",
                          color: "red",
                          leftIcon: "",
                          rightIcon: "share",
                          disabled: false,
                          width: 20,
                          height: 20,
                        }}
                      />
                    </div>
                  </div>

                  {/* important details */}
                  <div className="grid grid-cols-2 md:flex items-center gap-4 md:gap-16 mobile-body-large md:body-large">
                    {/* salary */}
                    <div>
                      <h5 className="text-txt-on-surface-terriary-light">
                        Salary
                      </h5>
                      <p className="text-green">
                        ${jobDetails?.salary_min} - ${jobDetails?.salary_max}{" "}
                        per hour
                      </p>
                    </div>

                    {/* location */}
                    <div>
                      <h5 className="text-txt-on-surface-terriary-light">
                        Location
                      </h5>
                      <p className="text-txt-on-surface-secondary-light">
                        {jobDetails?.street.name}
                      </p>
                    </div>

                    {/* time */}
                    <div>
                      <h5 className="text-txt-on-surface-terriary-light">
                        Time
                      </h5>
                      <p className="text-txt-on-surface-secondary-light">
                        {getTimeRemaining(jobDetails?.application_deadline)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* card */}
                <div className="block md:hidden bg-shades-light-90 rounded-sm border border-outline-level0 py-3 space-y-3 h-fit w-full">
                  {/* Prerequisites */}
                  <h3 className="block md:hidden mobile-title-medium md:title-medium text-on_surface-light px-3">
                    Prerequisites
                  </h3>

                  {/* important details */}
                  <div className="block md:hidden space-y-2 px-3 mobile-body-large md:body-large">
                    {/* career history */}
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                        Career history
                      </h4>

                      <div className="w-full border border-dashed border-outline-level0" />

                      <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                        {jobDetails?.experience_years} years
                      </h5>
                    </div>

                    {/* age */}
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                        Age
                      </h4>

                      <div className="w-full border border-dashed border-outline-level0" />

                      <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                        {jobDetails?.min_age} - {jobDetails?.max_age}
                      </h5>
                    </div>

                    {/* gender */}
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                        Gender
                      </h4>

                      <div className="w-full border border-dashed border-outline-level0" />

                      <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                        {jobDetails?.gender}
                      </h5>
                    </div>

                    {/* education */}
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                        Education
                      </h4>

                      <div className="w-full border border-dashed border-outline-level0" />

                      <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                        {jobDetails?.education_level}
                      </h5>
                    </div>
                  </div>
                </div>

                {/* company details */}
                <CompanyPreview companyDetails={jobDetails?.company} />

                {/* job description */}
                <div className="space-y-3">
                  <h2 className="mobile-title-medium md:title-medium text-on_surface-light">
                    {jobDetails?.title}
                  </h2>

                  <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
                    {jobDetails?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* card */}
            <div className="hidden md:block col-span-1 m-4">
              {/* card */}
              <div className="md:sticky md:top-[4.5rem] col-span-1 md:bg-shades-light-90 md:rounded-sm md:border md:border-outline-level0 pt-6 md:pb-4 md:space-y-6 md:h-fit md:w-full">
                {/* Prerequisites */}
                <h3 className="title-medium text-on_surface-light px-6">
                  Prerequisites
                </h3>

                {/* important details */}
                <div className="space-y-2 px-6">
                  {/* career history */}
                  <div className="flex items-center justify-between gap-3 body-large">
                    <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                      Career history
                    </h4>

                    <div className="w-full border border-dashed border-outline-level0" />

                    <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                      {jobDetails?.experience_years} years
                    </h5>
                  </div>

                  {/* age */}
                  <div className="flex items-center justify-between gap-3 body-large">
                    <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                      Age
                    </h4>

                    <div className="w-full border border-dashed border-outline-level0" />

                    <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                      {jobDetails?.min_age} - {jobDetails?.max_age}
                    </h5>
                  </div>

                  {/* gender */}
                  <div className="flex items-center justify-between gap-3 body-large">
                    <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                      Gender
                    </h4>

                    <div className="w-full border border-dashed border-outline-level0" />

                    <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                      {jobDetails?.gender}
                    </h5>
                  </div>

                  {/* education */}
                  <div className="flex items-center justify-between gap-3 body-large">
                    <h4 className="whitespace-nowrap text-txt-on-surface-terriary-light">
                      Education
                    </h4>

                    <div className="w-full border border-dashed border-outline-level0" />

                    <h5 className="whitespace-nowrap text-txt-on-surface-secondary-light">
                      {jobDetails?.education_level}
                    </h5>
                  </div>
                </div>
                {jobDetails.is_active === 1 ? (
                  <>
                    {/* divider */}
                    <div className="hidden md:block border border-outline-level0" />

                    {/* send cv btn */}

                    <div className="md:px-6">
                      <FileUpload
                        buttonText="Send CV"
                        showFileName={true}
                        id={jobDetails.id}
                      />
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </>
        )}
      </div>

      {/* send cv btn */}
      {!isLoadingJobOpportunityData && jobDetails.is_active === 1 ? (
        <div className="block md:hidden sticky bottom-0 p-4 border-t border-outline-level0 bg-white">
          <FileUpload
            buttonText="Send CV"
            showFileName={true}
            id={jobDetails?.id}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Page;
