"use client";

import { useState } from "react";

// components
import Button from "./Button";
import Comment from "./Comment";

// data
import { comments } from "@/constants/data";

function CommentsSection({ stars = true }: { stars?: boolean }) {
  const [sortVal, setSortVal] = useState("Most Helpful");
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="space-y-8">
      {/* sort */}
      <div className="flex items-center w-fit border border-outline1 rounded py-0.5 pl-3 pr-4">
        <span className="body-large text-txt-on-surface-terriary-light">
          Sort By:
        </span>
        <select
          className="px-1 py-2 outline-none body-large text-txt-on-surface-secondary"
          value={sortVal}
          onChange={(e) => {
            setSortVal(e.target.value);
          }}
        >
          <option value="Most Helpful">Most Helpful</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>

      {comments.slice(0, visibleCount).map((comment) => (
        <Comment key={comment.id} comment={comment} stars={stars} />
      ))}

      {visibleCount < comments.length && (
        <div className="flex items-center justify-center">
          <Button
            props={{
              value: "Show more",
              type: "outlined",
              color: "red",
              leftIcon: "",
              rightIcon: "arrow-down-red",
              disabled: false,
              width: 24,
              height: 24,
              padding: "py-2 px-6",
              clickHandler: handleShowMore,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default CommentsSection;
