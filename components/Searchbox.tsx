"use client";

import { useState } from "react";

// components
import Button from "./Button";

function Searchbox() {
  const [search, setSearch] = useState("");
  return (
    <div
      className={`bg-shades-light-90 flex items-center justify-between gap-2 rounded-full`}
    >
      <input
        type="text"
        placeholder="What you want to learn?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-3.5 outline-none w-[60%] hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200"
      />

      <div className="w-[1px] h-[32px] bg-[#CECECE]" />

      <div
        className={`flex items-center justify-between gap-2 w-[40%] hover:bg-[#eaeaea] rounded-full transition-all ease-linear duration-200 p-1`}
      >
        <div className="flex items-center">
          <select className="px-4 py-2 outline-none">
            <option>Select Type</option>
            <option>Online</option>
            <option>Webinar</option>
            <option>Self Study</option>
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
            padding: "p-3",
            size: "body-large",
            height: 20,
            width: 20,
          }}
        />
      </div>
    </div>
  );
}

export default Searchbox;
