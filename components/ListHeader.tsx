"use client";

import { useQueryState } from "nuqs";

function ListHeader({ title }: { title: string }) {
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
        <div className="flex items-center gap-1 bg-statelayer-neutral-opacity-4 rounded-sm py-2 pl-3 pr-4 cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.50016 1.75H15.5002C16.4168 1.75 17.1668 2.5 17.1668 3.41667V5.25C17.1668 5.91667 16.7502 6.75 16.3335 7.16667L12.7502 10.3333C12.2502 10.75 11.9168 11.5833 11.9168 12.25V15.8333C11.9168 16.3333 11.5835 17 11.1668 17.25L10.0002 18C8.91683 18.6667 7.41683 17.9167 7.41683 16.5833V12.1667C7.41683 11.5833 7.0835 10.8333 6.75016 10.4167L3.5835 7.08333C3.16683 6.66667 2.8335 5.91667 2.8335 5.41667V3.5C2.8335 2.5 3.5835 1.75 4.50016 1.75Z"
              stroke="#44474B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.10833 1.75L5 8.33333"
              stroke="#44474B"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="mobile-body-large md:body-large text-txt-on-surface-secondary">
            Filters
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListHeader;
