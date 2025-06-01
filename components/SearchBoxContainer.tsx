"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";
import { usePathname } from "next/navigation";

// components
import Button from "./Button";

function SearchBoxContainer() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [type, setType] = useQueryState("type", { defaultValue: "" });

  const pathname = usePathname();
  const [typVal] = useState(type);
  const [searchVal, setSearchVal] = useState(search);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchClickHandler();
    }
  };

  const searchClickHandler = () => {
    setSearch(searchVal.trim().replace(/\s+/g, " ").trim());
    setType(typVal);
  };

  if (
    (pathname !== "/programs" &&
      pathname.includes("/profile/transaction") &&
      pathname !== "/events") ||
    pathname === "/" ||
    pathname === "/job-offers"
  )
    return null;
  return (
    <div className="flex-1">
      <div
        className="bg-shades-light-90 hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200 p-1 flex items-center justify-between gap-2"
        onKeyDown={handleKeyDown}
      >
        <input
          type="text"
          placeholder={
            pathname === "/events"
              ? "Search in Events..."
              : pathname === "/programs"
              ? "Search in Programs..."
              : pathname.includes("/job-offers/")
              ? "Search in Job Offers"
              : "What you want to learn?"
          }
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="px-4 py-2 outline-none flex-1 body-medium"
        />
        <div className="flex items-center justify-between gap-4">
          {/* {pathname !== "/events" &&
            !pathname.includes("/job-offers/") &&
            pathname !== "/identity-chart" &&
            pathname !== "/our-legality-and-legitimacy" && (
              <div className="flex items-center">
                <div className="w-[1px] h-[32px] bg-[#CECECE]" />
                <select
                  className="px-4 py-2 outline-none"
                  value={typVal}
                  onChange={(e) => {
                    setTypeVal(e.target.value);
                  }}
                >
                  <option value="">Select Type</option>
                  <option value="Online">Online</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Self Study">Self Study</option>
                </select>
              </div>
            )} */}

          <Button
            props={{
              value: "",
              type: "filled",
              color: "red",
              disabled: false,
              leftIcon: "search-normal",
              rightIcon: "",
              padding: "p-2",
              size: "body-large",
              height: 20,
              width: 20,
              clickHandler: searchClickHandler,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBoxContainer;
