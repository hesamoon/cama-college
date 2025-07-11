"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useQueryState } from "nuqs";

// components
import Pagination from "@/components/Pagination";

// data
import { news, newsGroups } from "@/constants/data";

// types
import { News } from "../types/types";
import Link from "next/link";

function Page() {
  // const [pageNum, setPageNum] = useState(1);
  const [category, setCategory] = useState("News & Articles");
  const [newsList, setNewsList] = useState<News[]>([]);
  const [search] = useQueryState("search", { defaultValue: "" });
  const [type] = useQueryState("type", { defaultValue: "" });
  const [group, setGroup] = useQueryState("group");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setNewsList(
      news
        .sort(
          (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
        )
        .filter(
          (n) =>
            n.title.includes(search) && n.category.includes(group ? group : "")
        )
        .slice((currentPage - 1) * 4, currentPage * 4)
    );
  }, [search, type, group]);

  useEffect(() => {
    setNewsList(
      news
        .sort(
          (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
        )
        .filter(
          (n) =>
            n.title.includes(search) && n.category.includes(group ? group : "")
        )
        .slice((currentPage - 1) * 4, currentPage * 4)
    );
  }, [category]);

  useEffect(() => {
    setNewsList(news.slice((currentPage - 1) * 4, currentPage * 4));
  }, [currentPage]);

  useEffect(() => {
    setNewsList(
      news
        .sort(
          (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
        )
        .filter(
          (n) =>
            n.title.includes(search) && n.category.includes(group ? group : "")
        )
        .slice((currentPage - 1) * 4, currentPage * 4)
    );
  }, []);

  return (
    <div className="space-y-14">
      {/* groups - category */}
      <div className="flex items-center justify-between w-full border-y border-outline-level0 grid-system-level0">
        {/* groups */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          {newsGroups.map((ctgry) => (
            <div
              key={ctgry.id}
              className={`flex flex-col items-center justify-center transition-all duration-300 gap-1 cursor-pointer px-2 pt-6 pb-2 ${
                group === ctgry.label || (ctgry.id === 0 && !group)
                  ? "border-b border-background-primary-light"
                  : null
              }`}
              onClick={() =>
                ctgry.id === 0 ? setGroup(null) : setGroup(ctgry.label)
              }
            >
              <Image
                src="/monitor-mobbile-black.svg"
                alt="monitor-mobbile-black"
                width={20}
                height={20}
              />

              <h5 className="body-large text-on_surface-light">
                {ctgry.label}
              </h5>
            </div>
          ))}
        </div>

        {/* category */}
        <div className="border border-outline1 rounded py-2 px-4">
          <select
            className="outline-none body-large text-txt-on-surface-secondary"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="News & Articles">News & Articles</option>
            <option value="Articles">Articles</option>
            <option value="News">News</option>
          </select>
        </div>
      </div>

      {/* slider section */}
      <div className="grid grid-cols-4 !gap-6 items-center grid-system-level0">
        <div className="col-span-1 flex flex-col gap-3">
          <Link
            href={`/news/This is a title for slider`}
            className="relative rounded overflow-hidden"
          >
            {/* Image */}
            <Image
              className="object-cover w-full"
              src="/c1.png"
              alt="c1"
              width={310}
              height={174}
            />

            <p className="absolute bottom-3.5 left-3.5 title-medium text-txt-on-primary-dark z-20">
              This is a title for slider
            </p>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A030500] to-[#0D000166] z-10" />
          </Link>

          <Link
            href={`/news/This is a title for slider`}
            className="relative rounded overflow-hidden"
          >
            {/* Image */}
            <Image
              className="object-cover w-full"
              src="/c1.png"
              alt="c1"
              width={310}
              height={174}
            />

            <p className="absolute bottom-3.5 left-3.5 title-medium text-txt-on-primary-dark z-20">
              This is a title for slider
            </p>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A030500] to-[#0D000166] z-10" />
          </Link>
        </div>

        <Link
          href={`/news/This is a title for slider`}
          className="col-span-2 relative rounded overflow-hidden"
        >
          {/* Image */}
          <Image
            className="object-cover w-full"
            src="/c1.png"
            alt="c1"
            width={644}
            height={361}
          />

          <div className="absolute bottom-3.5 left-3.5 z-20 space-y-1">
            <p className="title-medium text-txt-on-primary-dark">
              This is a title for slider
            </p>

            <div className="flex items-center gap-3 label-medium text-txt-on-primary-dark">
              {/* author */}
              <div className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z"
                    stroke="#F3F3F3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <mask id="path-2-inside-1_1030_5670" fill="white">
                    <path d="M10.2951 11C10.2951 9.065 8.37008 7.5 6.00008 7.5C3.63008 7.5 1.70508 9.065 1.70508 11" />
                  </mask>
                  <path
                    d="M9.29507 11C9.29507 11.5523 9.74279 12 10.2951 12C10.8474 12 11.2951 11.5523 11.2951 11H9.29507ZM0.705078 11C0.705078 11.5523 1.15279 12 1.70508 12C2.25736 12 2.70508 11.5523 2.70508 11H0.705078ZM10.2951 11H11.2951C11.2951 8.33053 8.72058 6.5 6.00008 6.5V7.5V8.5C8.01958 8.5 9.29507 9.79947 9.29507 11H10.2951ZM6.00008 7.5V6.5C3.27958 6.5 0.705078 8.33053 0.705078 11H1.70508H2.70508C2.70508 9.79947 3.98058 8.5 6.00008 8.5V7.5Z"
                    fill="#F3F3F3"
                    mask="url(#path-2-inside-1_1030_5670)"
                  />
                </svg>

                <span>Reza Bidari</span>
              </div>

              {/* time */}
              <div className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.375 6.625C10.375 9.04 8.415 11 6 11C3.585 11 1.625 9.04 1.625 6.625C1.625 4.21 3.585 2.25 6 2.25C8.415 2.25 10.375 4.21 10.375 6.625Z"
                    stroke="#F3F3F3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 4V6.5"
                    stroke="#F3F3F3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.5 1H7.5"
                    stroke="#F3F3F3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>12 hours ago</span>
              </div>

              {/* like */}
              <div className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.74023 9.17498L5.29023 10.375C5.49023 10.575 5.94023 10.675 6.24023 10.675H8.14023C8.74023 10.675 9.39023 10.225 9.54023 9.62498L10.7402 5.97498C10.9902 5.27498 10.5402 4.67498 9.79023 4.67498H7.79023C7.49023 4.67498 7.24023 4.42498 7.29023 4.07498L7.54023 2.47498C7.64023 2.02498 7.34023 1.52498 6.89023 1.37498C6.49023 1.22498 5.99023 1.42498 5.79023 1.72498L3.74023 4.77498"
                    stroke="#F3F3F3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M1.18945 9.17501V4.27501C1.18945 3.57501 1.48945 3.32501 2.18945 3.32501H2.68945C3.38945 3.32501 3.68945 3.57501 3.68945 4.27501V9.17501C3.68945 9.87501 3.38945 10.125 2.68945 10.125H2.18945C1.48945 10.125 1.18945 9.87501 1.18945 9.17501Z"
                    stroke="#F3F3F3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>253</span>
              </div>

              {/* count of comments */}
              <div className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1H4C2 1 1 2 1 4V10.5C1 10.775 1.225 11 1.5 11H8C10 11 11 10 11 8V4C11 2 10 1 8 1Z"
                    stroke="#F3F3F3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 4.75H8.5"
                    stroke="#F3F3F3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 7.25H7"
                    stroke="#F3F3F3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>26</span>
              </div>
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2A030500] to-[#0D000166] z-10" />
        </Link>

        <div className="col-span-1 flex flex-col gap-3">
          <Link
            href={`/news/This is a title for slider`}
            className="relative rounded overflow-hidden"
          >
            {/* Image */}
            <Image
              className="object-cover w-full"
              src="/c1.png"
              alt="c1"
              width={310}
              height={174}
            />

            <p className="absolute bottom-3.5 left-3.5 title-medium text-txt-on-primary-dark z-20">
              This is a title for slider
            </p>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A030500] to-[#0D000166] z-10" />
          </Link>

          <Link
            href={`/news/This is a title for slider`}
            className="relative rounded overflow-hidden"
          >
            {/* Image */}
            <Image
              className="object-cover w-full"
              src="/c1.png"
              alt="c1"
              width={310}
              height={174}
            />

            <p className="absolute bottom-3.5 left-3.5 title-medium text-txt-on-primary-dark z-20">
              This is a title for slider
            </p>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A030500] to-[#0D000166] z-10" />
          </Link>
        </div>
      </div>

      {/* news section */}
      <div className="grid grid-cols-4 grid-system-level0 !gap-6 pb-14">
        <div className="col-span-3 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {newsList.length > 0 ? (
              newsList.map((n) => (
                <Link
                  key={n.id}
                  href={`/news/${n.title}`}
                  className="border-b border-outline-level0 flex justify-between pb-4 cursor-pointer"
                >
                  <div className="flex flex-col justify-between gap-2 min-h-[174px]">
                    <div className="space-y-3 max-w-[644px]">
                      <div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-[#206F12] rounded-full" />
                          <span className="label-medium-db text-txt-on-surface-secondary-light">
                            {n.category}
                          </span>
                        </div>

                        <h2 className="title-large text-txt-on-surface-secondary-light">
                          {n.title}
                        </h2>
                      </div>

                      <p className="text-justify body-large text-txt-on-surface-secondary-light">
                        {n.mainDesc.length >= 123
                          ? `${n.mainDesc.slice(0, 123)}...`
                          : n.mainDesc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 label-medium text-txt-on-surface-terriary-light">
                      {/* author */}
                      <div className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <mask id="path-2-inside-1_1030_5670" fill="white">
                            <path d="M10.2951 11C10.2951 9.065 8.37008 7.5 6.00008 7.5C3.63008 7.5 1.70508 9.065 1.70508 11" />
                          </mask>
                          <path
                            d="M9.29507 11C9.29507 11.5523 9.74279 12 10.2951 12C10.8474 12 11.2951 11.5523 11.2951 11H9.29507ZM0.705078 11C0.705078 11.5523 1.15279 12 1.70508 12C2.25736 12 2.70508 11.5523 2.70508 11H0.705078ZM10.2951 11H11.2951C11.2951 8.33053 8.72058 6.5 6.00008 6.5V7.5V8.5C8.01958 8.5 9.29507 9.79947 9.29507 11H10.2951ZM6.00008 7.5V6.5C3.27958 6.5 0.705078 8.33053 0.705078 11H1.70508H2.70508C2.70508 9.79947 3.98058 8.5 6.00008 8.5V7.5Z"
                            fill="#9B9798"
                            mask="url(#path-2-inside-1_1030_5670)"
                          />
                        </svg>

                        <span>Reza Bidari</span>
                      </div>

                      {/* time */}
                      <div className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.375 6.625C10.375 9.04 8.415 11 6 11C3.585 11 1.625 9.04 1.625 6.625C1.625 4.21 3.585 2.25 6 2.25C8.415 2.25 10.375 4.21 10.375 6.625Z"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 4V6.5"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.5 1H7.5"
                            stroke="#9B9798"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span>12 hours ago</span>
                      </div>

                      {/* like */}
                      <div className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.74023 9.17498L5.29023 10.375C5.49023 10.575 5.94023 10.675 6.24023 10.675H8.14023C8.74023 10.675 9.39023 10.225 9.54023 9.62498L10.7402 5.97498C10.9902 5.27498 10.5402 4.67498 9.79023 4.67498H7.79023C7.49023 4.67498 7.24023 4.42498 7.29023 4.07498L7.54023 2.47498C7.64023 2.02498 7.34023 1.52498 6.89023 1.37498C6.49023 1.22498 5.99023 1.42498 5.79023 1.72498L3.74023 4.77498"
                            stroke="#9B9798"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M1.18945 9.17501V4.27501C1.18945 3.57501 1.48945 3.32501 2.18945 3.32501H2.68945C3.38945 3.32501 3.68945 3.57501 3.68945 4.27501V9.17501C3.68945 9.87501 3.38945 10.125 2.68945 10.125H2.18945C1.48945 10.125 1.18945 9.87501 1.18945 9.17501Z"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span>253</span>
                      </div>

                      {/* count of comments */}
                      <div className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 1H4C2 1 1 2 1 4V10.5C1 10.775 1.225 11 1.5 11H8C10 11 11 10 11 8V4C11 2 10 1 8 1Z"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.5 4.75H8.5"
                            stroke="#9B9798"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.5 7.25H7"
                            stroke="#9B9798"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span>26</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded overflow-hidden">
                    <Image
                      className="object-cover w-[268px] h-[150px] rounded"
                      src={`/${n.coverImg}.png`}
                      alt={n.coverImg}
                      width={268}
                      height={150}
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center">
                <h3 className="body-large text-txt-on-surface-terriary-light">
                  {search || type ? "News not found" : "No News"}
                </h3>
              </div>
            )}
          </div>

          {/* pagination */}
          {(newsList.length >= 4 || currentPage > 1) && (
            <div>
              <Pagination
                totalPages={Math.ceil(news.length / 4)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>

        <div className="col-span-1 space-y-6 00">
          {/* popular articles title */}
          <div className="relative px-2">
            <h3 className="title-small text-black">Popular articles</h3>
            <div className="absolute left-0 top-0 bg-[#A91418] w-0.5 h-full rounded-full" />
          </div>

          <div className="space-y-5">
            {news.map((n, index) => (
              <div
                key={n.id}
                className={`${index === 0 ? "space-y-3" : "space-y-4"}`}
              >
                {index === 0 ? (
                  <Link href={`/news/${n.title}`}>
                    <div className="space-y-2">
                      <div className="rounded overflow-hidden">
                        <Image
                          className="object-cover w-full"
                          src={`/${n.coverImg}.png`}
                          alt={n.coverImg}
                          width={310}
                          height={174}
                        />
                      </div>

                      {/* title */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-[#206F12] rounded-full" />
                          <span className="label-small text-txt-on-surface-secondary-light">
                            {n.category}
                          </span>
                        </div>

                        <h4 className="body-large text-on_surface-light">
                          {n.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 label-medium text-txt-on-surface-terriary-light">
                      {/* author */}
                      <div className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <mask id="path-2-inside-1_1030_5670" fill="white">
                            <path d="M10.2951 11C10.2951 9.065 8.37008 7.5 6.00008 7.5C3.63008 7.5 1.70508 9.065 1.70508 11" />
                          </mask>
                          <path
                            d="M9.29507 11C9.29507 11.5523 9.74279 12 10.2951 12C10.8474 12 11.2951 11.5523 11.2951 11H9.29507ZM0.705078 11C0.705078 11.5523 1.15279 12 1.70508 12C2.25736 12 2.70508 11.5523 2.70508 11H0.705078ZM10.2951 11H11.2951C11.2951 8.33053 8.72058 6.5 6.00008 6.5V7.5V8.5C8.01958 8.5 9.29507 9.79947 9.29507 11H10.2951ZM6.00008 7.5V6.5C3.27958 6.5 0.705078 8.33053 0.705078 11H1.70508H2.70508C2.70508 9.79947 3.98058 8.5 6.00008 8.5V7.5Z"
                            fill="#9B9798"
                            mask="url(#path-2-inside-1_1030_5670)"
                          />
                        </svg>

                        <span>{n.author}</span>
                      </div>

                      {/* time */}
                      <div className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.375 6.625C10.375 9.04 8.415 11 6 11C3.585 11 1.625 9.04 1.625 6.625C1.625 4.21 3.585 2.25 6 2.25C8.415 2.25 10.375 4.21 10.375 6.625Z"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 4V6.5"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.5 1H7.5"
                            stroke="#9B9798"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span>12 hours ago</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link href={`/news/${n.title}`} className="space-y-2">
                    <div className="flex gap-2">
                      <div className="rounded overflow-hidden">
                        <Image
                          className="object-cover max-h-[48px]"
                          src={`/${n.coverImg}.png`}
                          alt={n.coverImg}
                          width={85}
                          height={48}
                        />
                      </div>

                      {/* title */}
                      <h4 className="body-medium text-on_surface-light">
                        {n.title.length >= 20
                          ? `${n.title.slice(0, 20)}...`
                          : n.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3 label-medium text-txt-on-surface-terriary-light">
                      {/* author */}
                      <div className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <mask id="path-2-inside-1_1030_5670" fill="white">
                            <path d="M10.2951 11C10.2951 9.065 8.37008 7.5 6.00008 7.5C3.63008 7.5 1.70508 9.065 1.70508 11" />
                          </mask>
                          <path
                            d="M9.29507 11C9.29507 11.5523 9.74279 12 10.2951 12C10.8474 12 11.2951 11.5523 11.2951 11H9.29507ZM0.705078 11C0.705078 11.5523 1.15279 12 1.70508 12C2.25736 12 2.70508 11.5523 2.70508 11H0.705078ZM10.2951 11H11.2951C11.2951 8.33053 8.72058 6.5 6.00008 6.5V7.5V8.5C8.01958 8.5 9.29507 9.79947 9.29507 11H10.2951ZM6.00008 7.5V6.5C3.27958 6.5 0.705078 8.33053 0.705078 11H1.70508H2.70508C2.70508 9.79947 3.98058 8.5 6.00008 8.5V7.5Z"
                            fill="#9B9798"
                            mask="url(#path-2-inside-1_1030_5670)"
                          />
                        </svg>

                        <span>{n.author}</span>
                      </div>

                      {/* time */}
                      <div className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.375 6.625C10.375 9.04 8.415 11 6 11C3.585 11 1.625 9.04 1.625 6.625C1.625 4.21 3.585 2.25 6 2.25C8.415 2.25 10.375 4.21 10.375 6.625Z"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 4V6.5"
                            stroke="#9B9798"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.5 1H7.5"
                            stroke="#9B9798"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span>12 hours ago</span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
