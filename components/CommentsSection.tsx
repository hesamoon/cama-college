"use client";

import { useState } from "react";

// components
import Button from "./Button";
import Comment from "./Comment";
import AISummarizesComments from "./ai-compo/AISummarizesComments";

// type
import { CommentType } from "@/app/types/types";

function CommentsSection({
  stars = true,
  comments,
}: {
  stars?: boolean;
  comments: CommentType[];
}) {
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

      {comments.length > 0 && <AISummarizesComments />}

      {comments.length > 0 ? (
        comments
          .slice(0, visibleCount)
          .map((comment) => (
            <Comment key={comment.id} comment={comment} stars={stars} />
          ))
      ) : (
        <h3 className="text-center text-on_surface-light mobile-body-large md:body-large">
          No Comment
        </h3>
      )}

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
