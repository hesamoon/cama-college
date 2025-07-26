/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";

// components
import JobCard from "@/components/JobCard";
import ListHeader from "@/components/ListHeader";
import JobSearcher from "@/components/JobSearcher";

// data
import { jobOffers } from "@/constants/data";

// types
import { Job } from "../types/types";

function page() {
  const [jobList, setJobList] = useState<Job[]>([]);

  const [search] = useQueryState("search", { defaultValue: "" });
  const [jobGroup] = useQueryState("job-group", {
    defaultValue: "",
  });
  const [city] = useQueryState("city", { defaultValue: "" });

  const [sortVal, setSortVal] = useState("Newest");

  useEffect(() => {
    setJobList(
      jobOffers.filter(
        (job) =>
          `${job.title} ${job.company}`
            .toLowerCase()
            .includes(search.toLowerCase()) &&
          job.jobGroup.toLowerCase().includes(jobGroup.toLowerCase()) &&
          job.location.toLowerCase().includes(city.toLowerCase())
      )
    );
  }, [search, jobGroup, city]);

  useEffect(() => {
    setJobList(
      jobOffers
        .sort((a, b) =>
          sortVal === "Newest"
            ? new Date(b.postedAt ?? "").getTime() -
              new Date(a.postedAt ?? "").getTime()
            : new Date(a.postedAt ?? "").getTime() -
              new Date(b.postedAt ?? "").getTime()
        )
        .filter(
          (job) =>
            `${job.title} ${job.company}`
              .toLowerCase()
              .includes(search.toLowerCase()) &&
            job.jobGroup.toLowerCase().includes(jobGroup.toLowerCase()) &&
            job.location.toLowerCase().includes(city.toLowerCase())
        )
    );
  }, [sortVal]);

  useEffect(() => {
    setJobList(
      jobOffers
        .sort(
          (a, b) =>
            new Date(b.postedAt ?? "").getTime() -
            new Date(a.postedAt ?? "").getTime()
        )
        .filter(
          (job) =>
            `${job.title} ${job.company}`
              .toLowerCase()
              .includes(search.toLowerCase()) &&
            job.jobGroup.toLowerCase().includes(jobGroup.toLowerCase()) &&
            job.location.toLowerCase().includes(city.toLowerCase())
        )
    );
  }, []);

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
        {jobList.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default page;
