"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

function CommentsSection() {
  const comments = [
    {
      id: 1,
      title: "Title of comment",
      author: "Biran amri",
      date: "2025-05-08",
      text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis.",
      rating: 4,
      likes: 12,
      disLike: 2,
    },
    {
      id: 2,
      title: "Title of comment",
      author: "Biran amri",
      date: "2025-05-08",
      text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis.",
      rating: 4,
      likes: 12,
      disLike: 2,
    },
    {
      id: 3,
      title: "Title of comment",
      author: "Biran amri",
      date: "2025-05-08",
      text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis.",
      rating: 4,
      likes: 12,
      disLike: 2,
    },
    {
      id: 4,
      title: "Title of comment",
      author: "Biran amri",
      date: "2025-05-08",
      text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis.",
      rating: 4,
      likes: 12,
      disLike: 2,
    },
    {
      id: 5,
      title: "Title of comment",
      author: "Biran amri",
      date: "2025-05-08",
      text: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada vel faucibus urna placerat duis.",
      rating: 4,
      likes: 12,
      disLike: 2,
    },
  ];

  const [sortVal, setSortVal] = useState("Most Helpful");
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div id="Comments" className="space-y-8 pt-8">
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
        <div
          key={comment.id}
          className="border-b border-outline-level0 space-y-7 pb-8"
        >
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
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.15039 2V22"
                    stroke="#9B9798"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.15039 4H16.3504C19.0504 4 19.6504 5.5 17.7504 7.4L16.5504 8.6C15.7504 9.4 15.7504 10.7 16.5504 11.4L17.7504 12.6C19.6504 14.5 18.9504 16 16.3504 16H5.15039"
                    stroke="#9B9798"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5197 5.6499L13.4197 3.2499C13.0197 2.8499 12.1197 2.6499 11.5197 2.6499H7.71973C6.51973 2.6499 5.21973 3.5499 4.91973 4.7499L2.51973 12.0499C2.01973 13.4499 2.91973 14.6499 4.41973 14.6499H8.41973C9.01973 14.6499 9.51973 15.1499 9.41973 15.8499L8.91973 19.0499C8.71973 19.9499 9.31973 20.9499 10.2197 21.2499C11.0197 21.5499 12.0197 21.1499 12.4197 20.5499L16.5197 14.4499"
                    stroke="#170304"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M21.6201 5.65V15.45C21.6201 16.85 21.0201 17.35 19.6201 17.35H18.6201C17.2201 17.35 16.6201 16.85 16.6201 15.45V5.65C16.6201 4.25 17.2201 3.75 18.6201 3.75H19.6201C21.0201 3.75 21.6201 4.25 21.6201 5.65Z"
                    stroke="#170304"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="label-large text-on_surface-light">
                  {comment.disLike}
                </span>
              </div>

              {/* like */}
              <div className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.48047 18.35L10.5805 20.75C10.9805 21.15 11.8805 21.35 12.4805 21.35H16.2805C17.4805 21.35 18.7805 20.45 19.0805 19.25L21.4805 11.95C21.9805 10.55 21.0805 9.34997 19.5805 9.34997H15.5805C14.9805 9.34997 14.4805 8.84997 14.5805 8.14997L15.0805 4.94997C15.2805 4.04997 14.6805 3.04997 13.7805 2.74997C12.9805 2.44997 11.9805 2.84997 11.5805 3.44997L7.48047 9.54997"
                    stroke="#170304"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M2.37988 18.3499V8.5499C2.37988 7.1499 2.97988 6.6499 4.37988 6.6499H5.37988C6.77988 6.6499 7.37988 7.1499 7.37988 8.5499V18.3499C7.37988 19.7499 6.77988 20.2499 5.37988 20.2499H4.37988C2.97988 20.2499 2.37988 19.7499 2.37988 18.3499Z"
                    stroke="#170304"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="label-large text-on_surface-light">
                  {comment.likes}
                </span>
              </div>
            </div>
          </div>
        </div>
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
