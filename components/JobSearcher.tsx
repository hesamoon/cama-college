"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";

// components
import Button from "./Button";

function JobSearcher() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [job, setJob] = useQueryState("job-group", { defaultValue: "" });
  const [city, setCity] = useQueryState("city", { defaultValue: "" });

  const [jobVal, setJobVal] = useState(job);
  const [cityVal, setCityVal] = useState(city);
  const [searchVal, setSearchVal] = useState(search);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchClickHandler();
    }
  };

  const searchClickHandler = () => {
    setSearch(searchVal.trim().replace(/\s+/g, " ").trim());
    setJob(jobVal);
    setCity(cityVal.trim().replace(/\s+/g, " ").trim());
  };

  return (
    <div
      className="bg-shades-light-90 rounded-full flex items-center justify-between gap-2"
      onKeyDown={handleKeyDown}
    >
      <input
        type="text"
        placeholder="Job or Company title..."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        className="px-4 py-4 outline-none hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200"
      />

      <div className="w-[1px] h-[32px] bg-[#CECECE]" />

      <div className="flex items-center pr-4 hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200">
        <select
          className="px-4 py-4 outline-none"
          value={jobVal}
          onChange={(e) => {
            setJobVal(e.target.value);
          }}
        >
          <option value="">Select Job Group</option>
          <option value="IT">IT</option>
          <option value="Crypto">Crypto</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      <div className="w-[1px] h-[32px] bg-[#CECECE]" />

      <div className="flex items-center p-1 justify-between gap-1 hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200">
        <input
          type="text"
          placeholder="City..."
          value={cityVal}
          onChange={(e) => setCityVal(e.target.value)}
          className="px-4 py-3 outline-none"
        />

        <Button
          props={{
            value: "",
            type: "filled",
            color: "red",
            disabled: false,
            leftIcon: "search-normal",
            rightIcon: "",
            padding: "p-3",
            size: "body-large",
            height: 20,
            width: 20,
            clickHandler: searchClickHandler,
          }}
        />
      </div>
    </div>
  );
}

export default JobSearcher;
