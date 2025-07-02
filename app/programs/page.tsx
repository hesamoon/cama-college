"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useQueryState } from "nuqs";

// components
import CourseCard from "@/components/CourseCard";
import Pagination from "@/components/Pagination";

// data
import {
  categories,
  LIMITNUMBEROFSCROLL,
  LIMITOfLOADEDLIST,
  LIMITOfLOADEDLISTINONEPAGE,
  programs,
} from "@/constants/data";

// types
import { Program } from "../types/types";

function Page() {
  const [sortVal, setSortVal] = useState("Newest");
  const [programList, setProgramList] = useState<Program[]>([]);
  const [search] = useQueryState("search", { defaultValue: "" });
  const [type] = useQueryState("type", { defaultValue: "" });
  const [category, setCategory] = useQueryState("category");
  const [numOfScroll, setNumOfScroll] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = programs;
      setProgramList((prev) =>
        [...prev, ...newItems].slice(
          0,
          numOfScroll === LIMITNUMBEROFSCROLL
            ? LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST - 1
            : LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST
        )
      );
      setNumOfScroll((prev) => prev + 1);
      setLoading(false);
    }, 1000); // simulate loading
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container || loading) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      if (numOfScroll === LIMITNUMBEROFSCROLL + 1) return;
      else {
        loadMore();
      }
    }
  };

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
        .slice(
          0,
          numOfScroll === LIMITNUMBEROFSCROLL
            ? LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST - 1
            : LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST
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
        .slice(
          0,
          numOfScroll === LIMITNUMBEROFSCROLL
            ? LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST - 1
            : LIMITOfLOADEDLIST * numOfScroll + LIMITOfLOADEDLIST
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
        .slice(
          0,
          numOfScroll === 3 ? 12 * numOfScroll + 11 : 12 * numOfScroll + 12
        )
    );
  }, []);

  console.log(programList);

  return (
    <div className="">
      {/* categories - sort and filtring */}
      <div className="flex items-center justify-between w-full border-y border-outline-level0 grid-system-level0">
        {/* categories */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {categories.map((ctgry) => (
            <div
              key={ctgry.id}
              className={`flex flex-col items-center justify-center transition-all duration-300 gap-1 cursor-pointer px-2 pt-6 pb-2 ${
                category === ctgry.label || (ctgry.id === 0 && !category)
                  ? "border-b border-background-primary-light"
                  : null
              }`}
              onClick={() =>
                ctgry.id === 0 ? setCategory(null) : setCategory(ctgry.label)
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
      <div className="grid-system-level0">
        {programList.length > 0 ? (
          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-auto h-screen no-scrollbar py-14"
          >
            {programList.map((program) => (
              <CourseCard key={program.id} data={program} type="programs" />
            ))}
          </div>
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center">
            <h3 className="body-large text-txt-on-surface-terriary-light py-10">
              {search || type ? "Program not found" : "No Programs"}
            </h3>
          </div>
        )}

        {loading && (
          <div
            aria-label="Loading..."
            role="status"
            className="flex items-center justify-center pb-14"
          >
            <svg
              className="h-12 w-12 animate-spin stroke-[#a91418]"
              viewBox="0 0 256 256"
            >
              <line
                x1="128"
                y1="32"
                x2="128"
                y2="64"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="195.9"
                y1="60.1"
                x2="173.3"
                y2="82.7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="224"
                y1="128"
                x2="192"
                y2="128"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="195.9"
                y1="195.9"
                x2="173.3"
                y2="173.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="128"
                y1="224"
                x2="128"
                y2="192"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="60.1"
                y1="195.9"
                x2="82.7"
                y2="173.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="32"
                y1="128"
                x2="64"
                y2="128"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
              <line
                x1="60.1"
                y1="60.1"
                x2="82.7"
                y2="82.7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
            </svg>
          </div>
        )}
      </div>

      {/* pagination */}
      {numOfScroll === LIMITNUMBEROFSCROLL + 1
        ? (programList.length >= LIMITOfLOADEDLISTINONEPAGE ||
            currentPage > 1) && (
            <div className="flex items-center justify-center pb-14">
              <Pagination
                totalPages={Math.ceil(350 / LIMITOfLOADEDLISTINONEPAGE)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )
        : null}
    </div>
  );
}

export default Page;
