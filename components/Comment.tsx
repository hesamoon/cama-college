"use client";

import { useState } from "react";
import Image from "next/image";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

// components
import Button from "./Button";

// types
import { CommentType } from "@/app/types/types";

// apis
import { addDislike, addLike } from "@/lib/api/comments";

function Comment({
  comment,
  stars,
}: {
  comment: CommentType;
  stars?: boolean;
}) {
  // POST
  const { mutate: addLikeMutation, isPending: isAddingLike } = useMutation({
    mutationFn: addLike,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);

      if (error instanceof AxiosError) {
        if (error.response?.data?.errors) {
          console.log(error.response.data.errors);
          toast.error(error.response.data.errors.text[0], {
            position: "top-center",
          });
        } else {
          toast.error(error.response?.data?.message || error?.message, {
            position: "top-center",
          });
        }
      } else {
        toast.error("An unknown error occurred.", { position: "top-center" });
      }
    },
  });
  const { mutate: addDislikeMutation, isPending: isAddingDislike } =
    useMutation({
      mutationFn: addDislike,
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);

        if (error instanceof AxiosError) {
          if (error.response?.data?.errors) {
            console.log(error.response.data.errors);
            toast.error(error.response.data.errors.text[0], {
              position: "top-center",
            });
          } else {
            toast.error(error.response?.data?.message || error?.message, {
              position: "top-center",
            });
          }
        } else {
          toast.error("An unknown error occurred.", { position: "top-center" });
        }
      },
    });

  const [like, setLike] = useState(comment.likes_count);
  const [dislike, setDislike] = useState(comment.dislikes_count);

  return (
    <div className="border-b border-outline-level0 space-y-3.5 md:space-y-7 pb-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h3 className="mobile-title-medium md:title-medium text-on_surface-light">
            {comment.comment}
          </h3>

          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src="/profile.jpg"
              alt="profile"
              width={36}
              height={36}
            />

            <h5 className="mobile-body-medium md:body-medium text-txt-low-important">
              {comment.user.name} {comment.user.family}
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
                <span className="mobile-label-large-db md:label-large-db text-green">
                  {comment.score}
                </span>
              </div>

              <div className="w-1.5 h-1.5 bg-outline-level1 rounded-full" />
            </>
          )}

          {/* date */}
          <span className="mobile-label-small md:label-small text-txt-low-important">
            {new Date(comment.created_at)
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

      <p className="mobile-body-large md:body-large text-justify text-txt-secondary">
        {comment.comment}
      </p>

      <div className="flex items-center justify-end gap-6 md:gap-12">
        <span className="mobile-label-small md:label-small text-txt-low-important">
          Is this comment helpful?
        </span>

        <div className="flex items-center gap-4">
          {/* dislike */}
          <div className="flex items-center md:gap-2">
            <Button
              props={{
                value: "",
                type: "text",
                color: "red",
                leftIcon: "",
                rightIcon: "dislike",
                disabled: isAddingDislike,
                loading: isAddingDislike,
                clickHandler: () => {
                  addDislikeMutation(`${comment.id}`);
                  setDislike((prev) => prev + 1);
                },
              }}
            />

            <span className="mobile-label-large md:label-large text-on_surface-light">
              {dislike}
            </span>
          </div>

          {/* like */}
          <div className="flex items-center md:gap-2">
            <Button
              props={{
                value: "",
                type: "text",
                color: "red",
                leftIcon: "",
                rightIcon: "like",
                disabled: isAddingLike,
                loading: isAddingLike,
                clickHandler: () => {
                  addLikeMutation(`${comment.id}`);
                  setLike((prev) => prev + 1);
                },
              }}
            />

            <span className="mobile-label-large md:label-large text-on_surface-light">
              {like}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
