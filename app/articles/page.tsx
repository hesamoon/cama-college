"use client";

import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";

// components
import ListHeader from "@/components/ListHeader";
import Pagination from "@/components/Pagination";
import ArticlePreview from "@/components/ArticlePreview";
import ArticleSearcher from "@/components/ArticleSearcher";

// types
import { Article } from "../types/types";

// data
import { articles } from "@/constants/data";

function Page() {
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [sort] = useQueryState("sortBy", { defaultValue: "" });
  const [search] = useQueryState("search", { defaultValue: "" });
  const [since] = useQueryState("since", { defaultValue: "" });

  useEffect(() => {
    setArticlesList(
      articles
        .sort((a, b) => (sort === "" ? b.year - a.year : a.year - b.year))
        .filter((article) =>
          since
            ? article.title.toLowerCase().includes(search.toLowerCase()) &&
              article.year >= +since
            : article.title.toLowerCase().includes(search.toLowerCase())
        )
    );

    setCurrentPage(1);
  }, [sort, search, since]);

  useEffect(() => {
    setArticlesList(
      articles
        .slice((currentPage - 1) * 4, currentPage * 4)
        .sort((a, b) => (sort === "" ? b.year - a.year : a.year - b.year))
        .filter((article) =>
          since
            ? article.title.toLowerCase().includes(search.toLowerCase()) &&
              article.year >= +since
            : article.title.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="mobile-grid-system-level0 md:grid-system-level1 space-y-6 md:space-y-12 py-6">
      {/* search box */}
      <div className="flex items-center justify-center">
        <ArticleSearcher />
      </div>

      {/* body */}
      <div className="space-y-5 md:space-y-10 md:px-3">
        {/* Header */}
        <ListHeader title="Articles" />

        <div className="space-y-10">
          <div className="space-y-4 divide-y divide-outline-level0">
            {articlesList.length > 0 ? (
              articlesList
                .slice(0, 4)
                .map((article) => (
                  <ArticlePreview key={article.id} data={article} />
                ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center">
                <h3 className="mobile-body-large md:body-large text-txt-on-surface-terriary-light">
                  {search || since ? "Article not found" : "No Articles"}
                </h3>
              </div>
            )}
          </div>

          {/* pagination */}
          {(articlesList.length >= 4 || currentPage > 1) && (
            <div className="flex items-center justify-center pb-7 md:pb-14">
              <Pagination
                totalPages={Math.ceil(articles.length / 4)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
