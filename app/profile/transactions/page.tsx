/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useQueryState } from "nuqs";

// components
import Button from "@/components/Button";
import Pagination from "@/components/Pagination";
import TransactionsTable from "@/components/TransactionsTable";

// data
import { transactions } from "@/constants/data";

// types
import { Transaction } from "@/app/types/types";

function page() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [activeTab, setActiveTab] = useState("Programs");
  const [sortVal, setSortVal] = useState("Newest");
  const [searchVal, setSearchVal] = useState(search);
  const [currentPage, setCurrentPage] = useState(1);

  const [transactionList, setTransactionList] = useState<Transaction[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearch(searchVal.trim().replace(/\s+/g, " ").trim());
    }
  };

  useEffect(() => {
    setTransactionList(
      transactions.filter((transaction) =>
        transaction.program.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    setTransactionList(
      transactions
        .sort((a, b) =>
          sortVal === "Newest"
            ? new Date(b.date ?? "").getTime() -
              new Date(a.date ?? "").getTime()
            : new Date(a.date ?? "").getTime() -
              new Date(b.date ?? "").getTime()
        )
        .filter((transaction) =>
          transaction.program.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [sortVal]);

  useEffect(() => {
    setTransactionList(
      transactions.slice((currentPage - 1) * 7, currentPage * 7)
    );
  }, [currentPage]);

  useEffect(() => {
    setTransactionList(
      transactions.filter((transaction) =>
        transaction.program.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, []);

  return (
    <div className="w-full">
      {/* tabs */}
      <div className="bg-white md:grid-system-level0 !gap-0 grid grid-cols-2 text-center md:flex border-b border-outline-level0">
        {["Programs", "Events"].map((tab) => (
          <div
            key={tab}
            className={
              activeTab === tab
                ? "border-b border-background-primary-light"
                : ""
            }
          >
            <button
              className={`py-3 px-4 mobile-body-large md:body-large cursor-pointer transition-all ease-linear duration-200 ${
                activeTab === tab
                  ? "text-background-primary-light"
                  : "text-txt-on-surface-terriary-light"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      <div className="mobile-grid-system-level0 md:grid-system-level0 py-6 space-y-6">
        {/* search, sort, filter */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* search */}
          <div
            className="bg-shades-light-90 flex items-center justify-between gap-2 w-full md:w-1/3 rounded-full p-1"
            onKeyDown={handleKeyDown}
          >
            <input
              type="text"
              placeholder="Search in Transactions..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="mobile-body-medium md:body-medium px-4 py-2 outline-none w-full"
            />

            <Button
              props={{
                value: "",
                type: "filled",
                color: "red",
                disabled: false,
                leftIcon: "search-normal",
                rightIcon: "",
                padding: "p-2",
                size: "mobile-body-large md:body-large",
                height: 20,
                width: 20,
                clickHandler: () =>
                  setSearch(searchVal.trim().replace(/\s+/g, " ").trim()),
              }}
            />
          </div>

          {/* sort, filter */}
          <div className="flex items-center gap-2">
            {/* sort */}
            <div className="flex items-center border border-outline1 rounded pl-3 pr-4">
              <span className="mobile-body-large md:body-large text-txt-on-surface-terriary-light">
                Sort By:
              </span>
              <select
                className="md:px-4 py-2 outline-none mobile-body-large md:body-large text-txt-on-surface-secondary"
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
              <span className="mobile-body-large md:body-large text-txt-on-surface-secondary">
                Filters
              </span>
            </div>
          </div>
        </div>

        {/* transactions list */}
        <TransactionsTable
          title={activeTab}
          transactions={transactionList.slice(0, 7)}
        />

        {/* pagination */}
        {(transactionList.length >= 7 || currentPage > 1) && (
          <div>
            <Pagination
              totalPages={Math.ceil(transactions.length / 7)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
