"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";

// components
import Button from "./Button";

function AISearchBox() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });

  const [searchVal, setSearchVal] = useState(search);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchClickHandler();
    }
  };

  const searchClickHandler = () => {
    setSearch(searchVal.trim().replace(/\s+/g, " ").trim());
  };

  // const openTUUMAssistantClickHandler = () => {
  //   const tuumEl = document.getElementById("tuum-ai-assistant-btn");
  //   tuumEl?.click();
  // };

  return (
    <section className="space-y-2.5 md:space-y-5 min-w-85 max-w-xs md:max-w-2xl md:min-w-xl z-20">
      <h5 className="mobile-body-large md:body-large text-txt-on-primary-dark text-start">
        What you want to learn?
      </h5>

      {/* searchbox */}
      <div
        className={`bg-shades-light-90 flex items-center justify-between gap-2 rounded-full pr-1`}
        onKeyDown={handleKeyDown}
      >
        <input
          type="text"
          placeholder="Type here..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="px-4 py-3.5 mobile-body-medium md:body-medium outline-none hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200 w-full"
        />

        <Button
          props={{
            value: "",
            type: "filled",
            color: "orange",
            hover: "hover:to-[#F78B5D]/80 focus:from-[#F78B5D]/50",
            disabled: false,
            leftIcon: "search-normal",
            rightIcon: "",
            padding: "p-2 md:p-3",
            size: "body-large",
            height: 20,
            width: 20,
            clickHandler: searchClickHandler,
          }}
        />
      </div>

      {/* <div className="flex items-center gap-2">
        <span className="body-large text-txt-on-surface-terriary-light">
          OR
        </span>

        <Button
          props={{
            value: "Ask question",
            disabled: false,
            leftIcon: "",
            rightIcon: "arrow-right",
            type: "text",
            color: "red",
            width: 20,
            height: 20,
            size: "mobile-body-medium md:body-large",
            padding: "px-4 py-1",
            clickHandler: () => openTUUMAssistantClickHandler(),
          }}
        />
      </div> */}
    </section>
  );
}

export default AISearchBox;
