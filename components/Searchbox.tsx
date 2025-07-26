"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";

// components
import Button from "./Button";

function Searchbox() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [type, setType] = useQueryState("type", { defaultValue: "" });

  const [searchVal, setSearchVal] = useState(search);
  const [typVal, setTypeVal] = useState(type);

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

  return (
    <div
      className={`bg-shades-light-90 flex items-center justify-between gap-2 rounded-full`}
      onKeyDown={handleKeyDown}
    >
      <input
        type="text"
        placeholder="What you want to learn?"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        className="px-4 py-3.5 mobile-body-medium md:body-medium outline-none md:w-[60%] hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200"
      />

      <div className="w-[1px] h-[32px] bg-[#CECECE]" />

      <div
        className={`flex items-center justify-between gap-4 md:gap-2 md:w-[40%] hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200 p-1`}
      >
        <div className="flex items-center mobile-body-medium md:body-medium">
          <select
            className="outline-none"
            value={typVal === "" ? "Select Type" : typVal}
            onChange={(e) =>
              e.target.value === "Select Type"
                ? setTypeVal("")
                : setTypeVal(e.target.value)
            }
          >
            <option value="Select Type">Select Type</option>
            <option value="Online">Online</option>
            <option value="Webinar">Webinar</option>
            <option value="Self Study">Self Study</option>
          </select>
        </div>

        <Button
          props={{
            value: "",
            type: "filled",
            color: "red",
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
    </div>
  );
}

export default Searchbox;
