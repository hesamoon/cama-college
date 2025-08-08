/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { useQuery } from "@tanstack/react-query";

// components
import JobCard from "@/components/JobCard";
import ListHeader from "@/components/ListHeader";
import JobSearcher from "@/components/JobSearcher";
import JobCardSkeleton from "@/components/skeletons/JobCardSkeleton";

// api - job-opportunity
import { getJobOpportunities } from "@/lib/api/job-opportunity";

// types
import { JobOffers } from "../types/types";

function page() {
  const { data: jobOffersData, isLoading: isJobOffersLoading } = useQuery({
    queryKey: ["job-opportunities"],
    queryFn: getJobOpportunities,
  });

  const [jobList, setJobList] = useState<JobOffers[]>([]);

  const [search] = useQueryState("search", { defaultValue: "" });
  const [jobGroup] = useQueryState("job-group", {
    defaultValue: "",
  });
  const [city] = useQueryState("city", { defaultValue: "" });

  const [sortVal] = useState("Newest");

  useEffect(() => {
    setJobList(
      jobOffersData?.data.data.filter(
        (job: JobOffers) =>
          `${job.title} ${job.company.name}`
            .toLowerCase()
            .includes(search.toLowerCase()) &&
          job.type.toLowerCase().includes(jobGroup.toLowerCase()) &&
          job.street.name.toLowerCase().includes(city.toLowerCase())
      )
    );
  }, [search, jobGroup, city]);

  useEffect(() => {
    setJobList(
      jobOffersData?.data.data
        .sort((a: JobOffers, b: JobOffers) =>
          sortVal === "Newest"
            ? new Date(b.application_deadline ?? "").getTime() -
              new Date(a.application_deadline ?? "").getTime()
            : new Date(a.application_deadline ?? "").getTime() -
              new Date(b.application_deadline ?? "").getTime()
        )
        .filter(
          (job: JobOffers) =>
            `${job.title} ${job.company.name}`
              .toLowerCase()
              .includes(search.toLowerCase()) &&
            job.type.toLowerCase().includes(jobGroup.toLowerCase()) &&
            job.street.name.toLowerCase().includes(city.toLowerCase())
        )
    );
  }, [sortVal]);

  useEffect(() => {
    if (jobOffersData) {
      setJobList(
        jobOffersData?.data.data
          .sort(
            (a: JobOffers, b: JobOffers) =>
              new Date(b.application_deadline ?? "").getTime() -
              new Date(a.application_deadline ?? "").getTime()
          )
          .filter(
            (job: JobOffers) =>
              `${job.title} ${job.company.name}`
                .toLowerCase()
                .includes(search.toLowerCase()) &&
              job.type.toLowerCase().includes(jobGroup.toLowerCase()) &&
              job.street.name.toLowerCase().includes(city.toLowerCase())
          )
      );
    }
  }, [jobOffersData]);

  return (
    <div className="mobile-grid-system-level0 md:grid-system-level0 space-y-6 py-6">
      {/* search box */}
      <div className="flex items-center justify-center">
        <JobSearcher />
      </div>

      {/* title / sort,filter */}
      <ListHeader title="Job Offers" />

      {/* job offers */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isJobOffersLoading ? (
          [...Array(3)].map((_, index) => <JobCardSkeleton key={index} />)
        ) : jobList?.length > 0 ? (
          jobList.map((job: JobOffers) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-txt-on-surface-secondary-light">
              No job offers found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
