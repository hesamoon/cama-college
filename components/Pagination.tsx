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
    const range = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2); // -> 1
    const end = Math.min(totalPages, start + maxVisible - 1); // -> 2
    if (end - start < maxVisible - 1) start = Math.max(1, end - maxVisible + 1);
    for (let i = start; i <= end; i++) range.push(i);
    console.log(range);
    return range;
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
            {page}
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
