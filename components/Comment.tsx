"use client";

import { useState } from "react";
import Image from "next/image";

// components
import Button from "./Button";

// types
import { CommentT } from "@/app/types/types";

function Comment({ comment, stars }: { comment: CommentT; stars?: boolean }) {
  const [like, setLike] = useState(12);
  const [dislike, setDislike] = useState(2);
  return (
    <div className="border-b border-outline-level0 space-y-7 pb-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h3 className="title-medium text-on_surface-light">
            {comment.title}
          </h3>

          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src="/profile.jpg"
              alt="profile"
              width={36}
              height={36}
            />

            <h5 className="body-medium text-txt-low-important">
              {comment.author}
            </h5>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* rating */}
          {stars && (
            <>
              <div className="flex items-center gap-0.5">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                    fill="#34C759"
                  />
                </svg>
                <span className="label-large-db text-green">
                  {comment.rating}
                </span>
              </div>

              <div className="w-1.5 h-1.5 bg-outline-level1 rounded-full" />
            </>
          )}

          {/* date */}
          <span className="label-small text-txt-low-important">
            {new Date(comment.date)
              .toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
              })
              .toUpperCase()}
          </span>

          <div className="w-1.5 h-1.5 bg-outline-level1 rounded-full" />

          {/* flag */}
          <Button
            props={{
              value: "",
              type: "text",
              color: "red",
              leftIcon: "",
              rightIcon: "flag",
              disabled: false,
            }}
          />
        </div>
      </div>

      <p className="body-large text-txt-secondary ">{comment.text}</p>

      <div className="flex items-center justify-end gap-12">
        <span className="label-small text-txt-low-important">
          Is this comment helpful?
        </span>

        <div className="flex items-center gap-4">
          {/* dislike */}
          <div className="flex items-center gap-2">
            <Button
              props={{
                value: "",
                type: "text",
                color: "red",
                leftIcon: "",
                rightIcon: "dislike",
                disabled: false,
                clickHandler: () => setDislike((prev) => prev + 1),
              }}
            />

            <span className="label-large text-on_surface-light">{dislike}</span>
          </div>

          {/* like */}
          <div className="flex items-center gap-2">
            <Button
              props={{
                value: "",
                type: "text",
                color: "red",
                leftIcon: "",
                rightIcon: "like",
                disabled: false,
                clickHandler: () => setLike((prev) => prev + 1),
              }}
            />

            <span className="label-large text-on_surface-light">{like}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
