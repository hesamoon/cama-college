"use client";

import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import toast from "react-hot-toast";

// types
import { ProgramInProgress } from "@/app/types/types";

// data
import { programsInProgress } from "@/constants/data";

function LessonesNavs() {
  const [program] = useQueryState("program", { defaultValue: "" });
  const [queryLesson, setLesson] = useQueryState("lesson", {
    defaultValue: "",
  });

  const [openID, setOpenID] = useState(-1);

  const programInProgressDetails = programsInProgress.find(
    (p) => p.name === decodeURIComponent(program)
  );

  function findSubjectIDByLessonTitle(
    data: ProgramInProgress,
    lessonTitle: string
  ) {
    for (const subject of data.contents) {
      for (const lesson of subject.lessons) {
        if (lesson.title === lessonTitle) {
          return subject.id;
        }
      }
    }
    return -1;
  }

  useEffect(() => {
    if (programInProgressDetails) {
      const lessonDetails = programInProgressDetails.contents.flatMap(
        (subject) =>
          subject.lessons.filter((lesson) => lesson.title === queryLesson)
      )[0];

      if (lessonDetails) {
        if (lessonDetails.passed === -1) {
          const id = findSubjectIDByLessonTitle(
            programInProgressDetails,
            queryLesson
          );

          const lastInProgressLessonDetails =
            programInProgressDetails.contents.flatMap((subject) =>
              subject.lessons.filter(
                (lesson) => lesson.passed === 0 && subject.id === id
              )
            );

          toast.error("Lesson unavailable!");

          setLesson(
            lastInProgressLessonDetails[
              lastInProgressLessonDetails
                ? lastInProgressLessonDetails.length - 1
                : 0
            ].title
          );
          setOpenID(id);
        } else {
          const id = findSubjectIDByLessonTitle(
            programInProgressDetails,
            queryLesson
          );

          setOpenID(id);
        }
      } else {
        const lessonDetails = programInProgressDetails.contents.flatMap(
          (subject) => subject.lessons.filter((lesson) => lesson.passed === 0)
        );

        const id = findSubjectIDByLessonTitle(
          programInProgressDetails,
          lessonDetails[lessonDetails.length - 1].title
        );

        console.log("id: " + id);
        console.log(lessonDetails);

        setOpenID(id);
        setLesson(lessonDetails[lessonDetails.length - 1].title);
      }
    }
  }, [queryLesson]);

  useEffect(() => {
    if (!queryLesson && programInProgressDetails) {
      const lessonDetails = programInProgressDetails.contents.flatMap(
        (subject) => subject.lessons.filter((lesson) => lesson.passed === 0)
      );

      const id = findSubjectIDByLessonTitle(
        programInProgressDetails,
        lessonDetails[0].title
      );

      setLesson(lessonDetails[0].title);
      setOpenID(id);
    } else if (programInProgressDetails) {
      const id = findSubjectIDByLessonTitle(
        programInProgressDetails,
        queryLesson
      );

      setOpenID(id);
    }
  }, []);

  return (
    <div className="md:border md:border-outline-level1 divide-y divide-outline-level0">
      {programInProgressDetails?.contents.map((content) => (
        <div key={content.id} className="bg-surface0-light">
          <div
            className="flex items-center justify-between bg-surface0-light p-5 cursor-pointer"
            onClick={() =>
              setOpenID((prev) => (prev === content.id ? -1 : content.id))
            }
          >
            <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
              {content.title}
            </h4>

            <div
              className={`transition-all ease-in-out duration-300 ${
                openID === content.id ? "rotate-180" : null
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.07992 8.95035L10.5999 15.4704C11.3699 16.2404 12.6299 16.2404 13.3999 15.4704L19.9199 8.95035"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          {openID === content.id && (
            <div className="bg-white divide-y divide-outline-level1">
              {content.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`p-4 flex items-center justify-between ${
                    lesson.passed === -1 ? null : "cursor-pointer"
                  }`}
                  onClick={() =>
                    lesson.passed === -1 ? null : setLesson(lesson.title)
                  }
                >
                  <div className="flex items-center gap-2">
                    {lesson.type === "video" ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5665 7.15035V12.8503C17.5665 13.7837 17.0665 14.6504 16.2581 15.1254L11.3081 17.9837C10.4998 18.4504 9.49981 18.4504 8.68315 17.9837L3.73314 15.1254C2.92481 14.6587 2.4248 13.792 2.4248 12.8503V7.15035C2.4248 6.21702 2.92481 5.35032 3.73314 4.87532L8.68315 2.01699C9.49148 1.55033 10.4915 1.55033 11.3081 2.01699L16.2581 4.87532C17.0665 5.35032 17.5665 6.20869 17.5665 7.15035Z"
                          stroke={
                            lesson.title === queryLesson ? "#A91418" : "#484647"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.125 10.0001V9.00007C8.125 7.71674 9.03334 7.19177 10.1417 7.83344L11.0083 8.33342L11.875 8.8334C12.9833 9.47506 12.9833 10.5251 11.875 11.1668L11.0083 11.6667L10.1417 12.1667C9.03334 12.8084 8.125 12.2834 8.125 11.0001V10.0001Z"
                          stroke={
                            lesson.title === queryLesson ? "#A91418" : "#484647"
                          }
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.9165 15.0003V5.83366C2.9165 2.50033 3.74984 1.66699 7.08317 1.66699H12.9165C16.2498 1.66699 17.0832 2.50033 17.0832 5.83366V14.167C17.0832 14.2837 17.0832 14.4003 17.0748 14.517"
                          stroke={
                            lesson.title === queryLesson ? "#A91418" : "#484647"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.2915 12.5H17.0832V15.4167C17.0832 17.025 15.7748 18.3333 14.1665 18.3333H5.83317C4.22484 18.3333 2.9165 17.025 2.9165 15.4167V14.875C2.9165 13.5667 3.98317 12.5 5.2915 12.5Z"
                          stroke={
                            lesson.title === queryLesson ? "#A91418" : "#484647"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.6665 5.83301H13.3332"
                          stroke={
                            lesson.title === queryLesson ? "#A91418" : "#484647"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.6665 8.75H10.8332"
                          stroke={
                            lesson.title === queryLesson ? "#A91418" : "#484647"
                          }
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}

                    <h5
                      className={`mobile-title-small md:title-small transition-all ease-in-out duration-300 ${
                        queryLesson === lesson.title
                          ? "text-background-primary-light"
                          : "text-txt-on-surface-secondary-light"
                      }`}
                    >
                      {lesson.title}
                    </h5>
                  </div>

                  <div className="flex items-center gap-2">
                    {lesson.passed === 1 ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.9834 10.0001L8.99173 12.0167L13.0167 7.9834"
                          stroke="#34C759"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.9584 2.0416C9.5334 1.54993 10.4751 1.54993 11.0584 2.0416L12.3751 3.17493C12.6251 3.3916 13.0917 3.5666 13.4251 3.5666H14.8417C15.7251 3.5666 16.4501 4.2916 16.4501 5.17493V6.5916C16.4501 6.9166 16.6251 7.3916 16.8417 7.6416L17.9751 8.95827C18.4667 9.53327 18.4667 10.4749 17.9751 11.0583L16.8417 12.3749C16.6251 12.6249 16.4501 13.0916 16.4501 13.4249V14.8416C16.4501 15.7249 15.7251 16.4499 14.8417 16.4499H13.4251C13.1001 16.4499 12.6251 16.6249 12.3751 16.8416L11.0584 17.9749C10.4834 18.4666 9.54173 18.4666 8.9584 17.9749L7.64173 16.8416C7.39173 16.6249 6.92506 16.4499 6.59173 16.4499H5.15006C4.26673 16.4499 3.54173 15.7249 3.54173 14.8416V13.4166C3.54173 13.0916 3.36673 12.6249 3.1584 12.3749L2.0334 11.0499C1.55007 10.4749 1.55007 9.5416 2.0334 8.9666L3.1584 7.6416C3.36673 7.3916 3.54173 6.92494 3.54173 6.59994V5.1666C3.54173 4.28327 4.26673 3.55827 5.15006 3.55827H6.59173C6.91673 3.55827 7.39173 3.38327 7.64173 3.1666L8.9584 2.0416Z"
                          stroke="#34C759"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : lesson.passed === -1 ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6.66634V5.33301C4 3.12634 4.66667 1.33301 8 1.33301C11.3333 1.33301 12 3.12634 12 5.33301V6.66634"
                          stroke="#484647"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.00016 12.3333C8.92064 12.3333 9.66683 11.5871 9.66683 10.6667C9.66683 9.74619 8.92064 9 8.00016 9C7.07969 9 6.3335 9.74619 6.3335 10.6667C6.3335 11.5871 7.07969 12.3333 8.00016 12.3333Z"
                          stroke="#484647"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.3335 14.667H4.66683C2.00016 14.667 1.3335 14.0003 1.3335 11.3337V10.0003C1.3335 7.33366 2.00016 6.66699 4.66683 6.66699H11.3335C14.0002 6.66699 14.6668 7.33366 14.6668 10.0003V11.3337C14.6668 14.0003 14.0002 14.667 11.3335 14.667Z"
                          stroke="#484647"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : null}

                    <h6 className="mobile-label-small md:label-small text-txt-on-surface-secondary-light">
                      12:32
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LessonesNavs;
