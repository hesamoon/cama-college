"use client";

import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";

// components
import ScheduleView from "@/components/ScheduleView";
import CourseInProgress from "@/components/CourseInProgress";
import SearchBoxContainer from "@/components/SearchBoxContainer";

// types
import { ProgramInProgress } from "@/app/types/types";

// data
import { programsInProgress } from "@/constants/data";

function Page() {
  const [filter, setFilter] = useQueryState("filter", { defaultValue: "" });
  const [search] = useQueryState("search", { defaultValue: "" });

  const [controlledList, setControlledList] = useState<ProgramInProgress[]>([]);

  useEffect(() => {
    setControlledList(
      programsInProgress.filter(
        (pIP) =>
          pIP.name.toLowerCase().includes(search.toLowerCase()) &&
          pIP.category.includes(filter ? filter : "")
      )
    );
  }, [search, filter]);

  useEffect(() => {
    setControlledList(programsInProgress);
  }, []);

  return (
    <div className="grid-system-level0 w-full space-y-9">
      {/* schedule */}
      <div className="space-y-4">
        <h2 className="title-large text-on_surface-light">Programs Schedule</h2>

        <ScheduleView />
      </div>

      {/* progrmas */}
      <div className="space-y-9">
        {/* last program section */}
        <div className="space-y-4">
          <h2 className="title-large text-on_surface-light">Last Program</h2>

          <CourseInProgress courseDetails={programsInProgress[0]} />
        </div>

        {/* all program section */}
        <div className="space-y-6">
          <SearchBoxContainer
            placeholder="Search in programs..."
            isSearchCourse={true}
          />

          <div className="space-y-4">
            {/* title, filter box */}
            <div className="flex items-center justify-between">
              <h2 className="title-large text-on_surface-light">
                All Programs
              </h2>

              {/* filter */}
              <div className="flex items-center border border-outline1 rounded py-0.5 pl-3 pr-4">
                <span className="body-large text-txt-on-surface-terriary-light">
                  Filter:
                </span>

                <select
                  className="px-1 py-2 outline-none body-large text-txt-on-surface-secondary cursor-pointer"
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
            <div className="space-y-3">
              {controlledList.length > 0 ? (
                controlledList.map((pIP) => (
                  <CourseInProgress key={pIP.id} courseDetails={pIP} />
                ))
              ) : filter || search ? (
                <h5 className="col-span-8 p-3 text-center">
                  Program not found!
                </h5>
              ) : (
                <h5 className="col-span-8 p-3 text-center">
                  You don&#39;t have any program yet!
                </h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
