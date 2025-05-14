"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useQueryState } from "nuqs";

// components
import CourseCard from "@/components/CourseCard";

// data
import { categories, programs } from "@/constants/data";

// types
import { Program } from "../types/types";

function Page() {
  // const [pageNum, setPageNum] = useState(1);
  const [sortVal, setSortVal] = useState("Newest");
  const [programList, setProgramList] = useState<Program[]>([]);
  const [search] = useQueryState("search", { defaultValue: "" });
  const [type] = useQueryState("type", { defaultValue: "" });
  const [category, setCategory] = useQueryState("category");

  useEffect(() => {
    setProgramList(
      programs
        .sort((a, b) => a.status.localeCompare(b.status))
        .filter(
          (program) =>
            program.name.includes(search) &&
            program.type.includes(type) &&
            program.category.includes(category ? category : "")
        )
    );
  }, [search, type, category]);

  useEffect(() => {
    setProgramList(
      programs
        .sort((a, b) =>
          sortVal === "Newest"
            ? new Date(b.publishDate ?? "").getTime() -
              new Date(a.publishDate ?? "").getTime()
            : new Date(a.publishDate ?? "").getTime() -
              new Date(b.publishDate ?? "").getTime()
        )
        .sort((a, b) => a.status.localeCompare(b.status))
        .filter(
          (program) =>
            program.name.includes(search) && program.type.includes(type)
        )
    );
  }, [sortVal]);

  useEffect(() => {
    setProgramList(
      programs
        .sort((a, b) => a.status.localeCompare(b.status))
        .filter(
          (program) =>
            program.name.includes(search) &&
            program.type.includes(type) &&
            program.category.includes(category ? category : "")
        )
    );
  }, []);

  return (
    <div className="space-y-14">
      {/* categories - sort and filtring */}
      <div className="flex items-center justify-between w-full border-y border-outline-level0 grid-system-level0">
        {/* categories */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {categories.map((ctgry) => (
            <div
              key={ctgry.id}
              className={`flex flex-col items-center justify-center transition-all duration-300 gap-1 cursor-pointer px-2 pt-6 pb-2 ${
                category === ctgry.label
                  ? "border-b border-background-primary-light"
                  : null
              }`}
              onClick={() => setCategory(ctgry.label)}
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

        {/* sort and filtring */}
        <div className="flex items-center gap-1">
          {/* sort */}
          <div className="flex items-center border border-outline1 rounded py-0.5 pl-3 pr-4">
            <span className="body-large text-txt-on-surface-terriary-light">
              Sort By:
            </span>
            <select
              className="px-4 py-2 outline-none body-large text-txt-on-surface-secondary"
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
          <div className="flex items-center gap-1 bg-statelayer-neutral-opacity-4 rounded-sm py-2 pl-3 pr-4 cursor-pointer">
            <Image src="/filter.svg" alt="filter" width={20} height={20} />
            <span className="body-large text-txt-on-surface-secondary">
              Filters
            </span>
          </div>
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
