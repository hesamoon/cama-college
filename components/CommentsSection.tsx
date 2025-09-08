"use client";

import { useState } from "react";

// components
import Button from "./Button";
import Comment from "./Comment";
import AISummarizesComments from "./ai-compo/AISummarizesComments";

// data
import { comments } from "@/constants/data";

function CommentsSection({ stars = true }: { stars?: boolean }) {
  const [sortVal, setSortVal] = useState("Most Helpful");
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div id="Comments" className="space-y-5">
      {/* sort */}
      <div className="w-fit flex items-center border border-outline1 rounded px-3">
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

      <AISummarizesComments />

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
              size: "body-medium md:body-large",
              clickHandler: handleShowMore,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default CommentsSection;
