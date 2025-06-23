"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";

// components
import Button from "./Button";

function ArticleSearcher() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [since, setSince] = useQueryState("since", { defaultValue: "" });

  const [sinceVal, setSinceVal] = useState(since);
  const [searchVal, setSearchVal] = useState(search);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchClickHandler();
    }
  };

  const searchClickHandler = () => {
    setSearch(searchVal.trim().replace(/\s+/g, " ").trim());
    setSince(sinceVal.trim().replace(/\s+/g, " ").trim());
  };

  return (
    <div
      className="bg-shades-light-90 rounded-full flex items-center justify-between gap-2"
      onKeyDown={handleKeyDown}
    >
      {/* title */}
      <input
        type="text"
        placeholder="Search in articles..."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        className="px-4 py-4 outline-none hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200"
      />

      <div className="w-[1px] h-[16px] bg-[#EAEAEA]" />

      <div className="flex items-center p-1 justify-between gap-1 hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200">
        {/* since when */}
        <input
          type="text"
          placeholder="since when?"
          value={sinceVal}
          onChange={(e) => setSinceVal(e.target.value)}
          className="px-4 py-3 outline-none"
        />

        {/* serach button */}
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

export default ArticleSearcher;
