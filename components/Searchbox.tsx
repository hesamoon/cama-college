"use client";

import { useState } from "react";
import Image from "next/image";

// components

function Searchbox() {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-shades-light-90 flex items-center gap-2 rounded-full p-1 w-2/3">
      <input
        type="text"
        placeholder="What you want to learn?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 outline-none w-full"
      />
      <div className="flex items-center justify-between w-2/3">
        <div className="flex items-center">
          <div className="w-[1px] h-[32px] bg-[#CECECE]" />
          <select className="px-4 py-2 outline-none">
            <option>Select Type</option>
            <option>Online</option>
            <option>Webinar</option>
            <option>Self Study</option>
          </select>
        </div>

        <div className="bg-primary-shades-10 p-2 rounded-full">
          <Image src="/search-normal.svg" alt="search" height={20} width={20} />
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
