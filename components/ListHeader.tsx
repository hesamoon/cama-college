"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useQueryState } from "nuqs";

// components
import Chips from "./Chips";
import FiltersModal from "./modal/FiltersModal";

function ListHeader({
  title,
  filters,
  setFilters,
}: {
  title: string;
  filters: {
    programTypes: string[];
    priceRange: { min: number; max: number };
  } | null;
  setFilters: Dispatch<
    SetStateAction<{
      programTypes: string[];
      priceRange: { min: number; max: number };
    } | null>
  >;
}) {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useQueryState("sortBy", { defaultValue: "Newest" });

  return (
    <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
      {/* title */}
      <h2 className="mobile-title-large md:title-large text-on_surface-light">
        {title}
      </h2>

      {/* sort, filter */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* sort */}
        <div className="flex items-center border border-outline1 rounded pl-3 pr-4">
          <span className="mobile-body-large md:body-large text-txt-on-surface-terriary-light">
            Sort By:
          </span>
          <select
            className="md:px-4 py-2 outline-none mobile-body-large md:body-large text-txt-on-surface-secondary"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>

        {/* filtring */}
        <div className="cursor-pointer" onClick={() => setOpen(true)}>
          <Chips
            chips={{
              lable: "Filters",
              leftIcon: "filter",
              rightIcon: "",
              disabled: false,
              type: "tonal",
              padding:
                "py-2 pl-3 pr-4 mobile-body-large md:body-large text-txt-on-surface-secondary",
              width: 20,
              height: 20,
            }}
          />
        </div>
      </div>

      <FiltersModal
        open={open}
        onClose={() => setOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}

export default ListHeader;
