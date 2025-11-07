"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { useQuery } from "@tanstack/react-query";

// components
import ScheduleView from "@/components/ScheduleView";
import CourseInProgress from "@/components/CourseInProgress";
import SearchBoxContainer from "@/components/SearchBoxContainer";
import InProgressSkeletone from "@/components/skeletons/InProgressSkeletone";

// types
import { Program } from "@/app/types/types";

// api
import { getRegisteredPrograms } from "@/lib/api/programs";

function Page() {
  // GET
  const { data: programsData, isLoading: isLoadingPrograms } = useQuery({
    queryKey: ["reg-programs"],
    queryFn: getRegisteredPrograms,
  });

  console.log(programsData);

  const [filter, setFilter] = useQueryState("filter", { defaultValue: "" });
  const [search] = useQueryState("search", { defaultValue: "" });

  const [controlledList, setControlledList] = useState<Program[]>([]);

  useEffect(() => {
    if (programsData?.data.data.length > 0)
      setControlledList(
        programsData?.data.data.filter(
          (pIP: Program) =>
            pIP.name.toLowerCase().includes(search.toLowerCase()) &&
            pIP.subject.includes(filter ? filter : "")
        )
      );
  }, [search, filter]);

  useEffect(() => {
    console.log(programsData?.data.data);
    if (programsData?.data.data.length > 0)
      setControlledList(programsData?.data.data);
  }, [programsData]);

  console.log(controlledList);

  if (isLoadingPrograms) return <InProgressSkeletone />;

  return (
    <div className="mobile-grid-system-level0 md:grid-system-level0 w-full space-y-9">
      {/* schedule */}
      <div className="space-y-4">
        <h2 className="mobile-title-large md:title-large text-on_surface-light">
          Programs Schedule
        </h2>

        <ScheduleView />
      </div>

      {/* progrmas */}
      <div className="space-y-9">
        {/* last program section */}
        {programsData?.data.data.length > 0 ? (
          <div className="space-y-4">
            <h2 className="mobile-title-large md:title-large text-on_surface-light">
              Last Program
            </h2>

            <CourseInProgress courseDetails={programsData?.data.data[0]} />
          </div>
        ) : null}

        {/* all program section */}
        <div className="space-y-6">
          <SearchBoxContainer
            placeholder="Search in programs..."
            isSearchCourse={true}
          />

          <div className="space-y-4 pb-10 md:pb-0">
            {/* title, filter box */}
            <div className="flex items-center justify-between">
              <h2 className="mobile-title-large md:title-large text-on_surface-light">
                All Programs
              </h2>

              {/* filter */}
              <div className="flex items-center border border-outline1 rounded px-2 md:pl-3 md:pr-4 mobile-body-large md:body-large">
                <span className="text-txt-on-surface-terriary-light">
                  Filter:
                </span>

                <select
                  className="md:px-1 py-2 outline-none text-txt-on-surface-secondary cursor-pointer"
                  value={filter === "" ? "All Programs" : filter}
                  onChange={(e) =>
                    e.target.value === "All Programs"
                      ? setFilter("")
                      : setFilter(e.target.value)
                  }
                >
                  <option value="All Programs">All Programs</option>
                  <option value="IT & AI">IT & AI</option>
                </select>
              </div>
            </div>

            {/* courses */}
            <div className="space-y-8">
              {controlledList.length > 0 ? (
                controlledList.map((pIP) => (
                  <CourseInProgress key={pIP.id} courseDetails={pIP} />
                ))
              ) : filter || search ? (
                <h5 className="col-span-8 p-3 text-center">
                  Program not found!
                </h5>
              ) : (
                <div className="col-span-8 flex flex-col items-center justify-center py-2 px-4">
                  <h3 className="mobile-body-large md:body-large text-txt-on-surface-terriary-light mb-2">
                    You don&#39;t have any program yet!
                  </h3>
                  <p className="mobile-body-medium md:body-medium text-txt-on-surface-terriary-light text-center">
                    Add some programs to get started with your learning journey
                  </p>
                  <Link
                    href="/programs"
                    className="mobile-body-medium md:body-medium text-background-primary-light underline text-center max-w-sm"
                  >
                    Browse programs
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
