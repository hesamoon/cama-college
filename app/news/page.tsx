"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useQueryState } from "nuqs";

// components
import CourseCard from "@/components/CourseCard";

// data
import { newsCategories, programs } from "@/constants/data";

// types
import { Program } from "../types/types";

function Page() {
  // const [pageNum, setPageNum] = useState(1);
  const [category, setCategory] = useState("News & Articles");
  const [programList, setProgramList] = useState<Program[]>([]);
  const [search] = useQueryState("search", { defaultValue: "" });
  const [type] = useQueryState("type", { defaultValue: "" });
  const [group, setGroup] = useQueryState("group");

  useEffect(() => {
    setProgramList(
      programs
        .sort((a, b) => a.status.localeCompare(b.status))
        .filter(
          (program) =>
            program.name.includes(search) &&
            program.type.includes(type) &&
            program.category.includes(group ? group : "")
        )
    );
  }, [search, type, group]);

  useEffect(() => {
    setProgramList(
      programs
        .sort((a, b) => a.status.localeCompare(b.status))
        .filter(
          (program) =>
            program.name.includes(search) &&
            program.type.includes(type) &&
            program.type.includes(category)
        )
    );
  }, [category]);

  useEffect(() => {
    setProgramList(
      programs
        .sort((a, b) => a.status.localeCompare(b.status))
        .filter(
          (program) =>
            program.name.includes(search) &&
            program.type.includes(type) &&
            program.category.includes(group ? group : "")
        )
    );
  }, []);

  return (
    <div className="space-y-14">
      {/* categories - sort and filtring */}
      <div className="flex items-center justify-between w-full border-y border-outline-level0 grid-system-level0">
        {/* categories */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          {newsCategories.map((ctgry) => (
            <div
              key={ctgry.id}
              className={`flex flex-col items-center justify-center transition-all duration-300 gap-1 cursor-pointer px-2 pt-6 pb-2 ${
                group === ctgry.label || (ctgry.id === 0 && !group)
                  ? "border-b border-background-primary-light"
                  : null
              }`}
              onClick={() =>
                ctgry.id === 0 ? setGroup(null) : setGroup(ctgry.label)
              }
            >
              <Image
                src="/monitor-mobbile-black.svg"
                alt="monitor-mobbile-black"
                width={20}
                height={20}
              />

              <h5 className="body-large text-on_surface-light">
                {ctgry.label}
              </h5>
            </div>
          ))}
        </div>

        {/* category */}
        <div className="border border-outline1 rounded py-2 px-4">
          <select
            className="outline-none body-large text-txt-on-surface-secondary"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="News & Articles">News & Articles</option>
            <option value="Articles">Articles</option>
            <option value="News">News</option>
          </select>
        </div>
      </div>

      {/* programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 grid-system-level0 pb-14">
        {programList.length > 0 ? (
          programList.map((program) => (
            <CourseCard key={program.id} data={program} type="programs" />
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center">
            <h3 className="body-large text-txt-on-surface-terriary-light">
              {search || type ? "Program not found" : "No Programs"}
            </h3>
          </div>
        )}
      </div>

      {/* pagination */}
      {/* {programs.length > 19 ? (
        <div className="flex items-center justify-center bg-red-400 p-2">
          <Pagination
            size={programs.length}
            currPage={pageNum}
            setCurrPage={setPageNum}
          />
        </div>
      ) : null} */}
    </div>
  );
}

export default Page;
