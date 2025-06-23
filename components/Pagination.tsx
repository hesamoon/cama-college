import { Dispatch, SetStateAction } from "react";

export default function Pagination({
  totalPages = 10,
  currentPage,
  setCurrentPage,
}: {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // Always include first 3 pages
    pages.push(1, 2, 3);

    if (currentPage >= 4 && currentPage <= totalPages - 3) {
      pages.push(currentPage);
    } else {
      pages.push("...");
    }

    // Always include last 3 pages
    pages.push(totalPages - 2, totalPages - 1, totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-9 mt-6 body-medium">
      {/* Previous Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        className="flex items-center gap-1 text-[#A91418] disabled:opacity-30 cursor-pointer disabled:cursor-auto"
        disabled={currentPage === 1}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.97533 4.94165L2.91699 9.99998L7.97533 15.0583"
            stroke="#A91418"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.0836 10H3.05859"
            stroke="#A91418"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span>Previous Page</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-5 body-large">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-3 py-1 rounded-xs cursor-pointer ${
              page === currentPage
                ? "bg-[#FCE8E9] text-[#A91418]"
                : "text-[#9B9798]"
            }`}
          >
            {page === "..." ? (
              <div className=" flex items-center gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-outline-level1"
                  />
                ))}
              </div>
            ) : (
              page
            )}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        className="flex items-center gap-1 text-[#A91418] disabled:opacity-30 cursor-pointer disabled:cursor-auto"
        disabled={currentPage === totalPages}
      >
        <span>Next Page</span>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.025 4.94165L17.0834 9.99998L12.025 15.0583"
            stroke="#A91418"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.91663 10H16.9416"
            stroke="#A91418"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
