/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useQueryState } from "nuqs";

// components
import JobCard from "@/components/JobCard";
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
    <div className="grid-system-level0 space-y-6 py-6">
      {/* search box */}
      <div className="flex items-center justify-center">
        <JobSearcher />
      </div>

      {/* title / sort,filter */}
      <div className="flex items-center justify-between">
        {/* title */}
        <h2 className="title-large text-on_surface-light">Job Offers</h2>

        {/* sort, filter */}
        <div className="flex items-center gap-2">
          {/* sort */}
          <div className="flex items-center border border-outline1 rounded py-0.5 pl-3 pr-4">
            <span className="body-large text-txt-on-surface-terriary-light">
              Sort By:
            </span>

            <select
              className="px-1 py-2 outline-none body-large text-txt-on-surface-secondary"
              value={sortVal}
              onChange={(e) => {
                setSortVal(e.target.value);
              }}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>

          {/* filtring */}
          <div className="flex items-center gap-1 bg-statelayer-neutral-opacity-4 rounded-sm py-2.5 pl-3 pr-4 cursor-pointer">
            <Image src="/filter.svg" alt="filter" width={20} height={20} />

            <span className="body-large text-txt-on-surface-secondary">
              Filters
            </span>
          </div>
        </div>
      </div>

      {/* job offers */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {jobList.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default page;
