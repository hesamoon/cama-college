"use client";

import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

// components
import Button from "@/components/Button";
import ExamPreview from "@/components/ExamPreview";
import MeetPreview from "@/components/MeetPreview";
import BluredImage from "@/components/BluredImage";
import LessonDetailsSkeleton from "@/components/skeletons/LessonDetailsSkeleton";

// data
import { articles } from "@/constants/data";

// utils
import { parseStyledText } from "@/utilities/utils";

// api
import { getLessons } from "@/lib/api/lessons";
import { getProgram } from "@/lib/api/programs";
import { getExams } from "@/lib/api/exam/exams";

// types
import { Lesson, Subject } from "@/app/types/types";

function Page() {
  const [queryLesson] = useQueryState("lesson", { defaultValue: "" });
  const [courseId] = useQueryState("courseId", { defaultValue: "" });
  const [lessonId] = useQueryState("lessonID", {
    defaultValue: "",
  });

  // const [getVideo, setGetVideo] = useState(false);
  const [getVideo] = useState(false);
  const [lessonDetails, setLessonsDetails] = useState<Lesson>(null);

  // GET
  const {
    data: lessonsData,
    isLoading: isLoadingLessons,
    error,
  } = useQuery({
    queryKey: ["lessons", lessonId],
    queryFn: () => getLessons(lessonId),
    enabled: getVideo,
  });
  const { data: programDetails, isLoading: isLoadingProgramDetails } = useQuery(
    {
      queryKey: ["programDetails", courseId],
      queryFn: () => getProgram(courseId || ""),
      enabled: false,
    }
  );
  const {
    data: examsData,
    isLoading: isLoadingExams,
    error: examError,
  } = useQuery({
    queryKey: ["exams"],
    queryFn: getExams,
    enabled: true,
  });

  const router = useRouter();

  const { title, year, author, open } = articles[1];

  const [like, setLike] = useState(12);
  const [dislike, setDislike] = useState(2);

  useEffect(() => {
    if (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const message =
        axiosError.response?.data?.message || "Something went wrong!";
      toast.error(message, { position: "top-center" });
    }
  }, [error]);

  useEffect(() => {
    if (programDetails?.data.data) {
      setLessonsDetails(
        programDetails?.data.data.subjects.flatMap((subject: Subject) =>
          subject.lessons.filter((lesson: Lesson) => lesson?.id === lessonId)
        )[0]
      );
    }
  }, [programDetails, queryLesson, lessonId]);

  // useEffect(() => {
  //   setGetVideo(true);
  // }, [lessonId]);

  console.log(lessonDetails);
  console.log(programDetails);
  console.log({
    examsData,
    isLoadingExams,
    examError,
  });
  // console.log(lessonsData)

  return queryLesson === "Lesson Title 1-3" ? (
    <MeetPreview />
  ) : queryLesson === "Lesson Title 1-4" ? (
    <ExamPreview />
  ) : isLoadingLessons || isLoadingProgramDetails ? (
    <LessonDetailsSkeleton />
  ) : lessonDetails ? (
    <div className="relative w-full">
      {/* error showing */}
      <div
        className={`h-screen absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[90%] md:w-[60%] transition-all duration-300 flex items-center justify-center ${
          error ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <h2 className="text-on_surface-light text-center py-3 px-4 rounded-lg shadow-lg">
          {(error as AxiosError<{ message: string }>)?.response?.data
            ?.message || "Something went wrong!"}
        </h2>
      </div>

      <div
        className={`mobile-grid-system-level0 !px-0 md:!px-16 md:grid-system-level0 space-y-10 md:py-10 ${
          error ? "blur-lg" : null
        }`}
      >
        <div className="space-y-6">
          <div className="space-y-8">
            {/* title */}
            <div className="flex items-center justify-between">
              <h2 className="mobile-title-large md:title-large text-on_surface-light">
                {lessonDetails?.title}
              </h2>

              {!!lessonDetails && (
                <div className="hidden md:block">
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
              )}
            </div>

            {/* descriptions */}
            <div
              className="space-y-6"
              data-presentation-type={
                programDetails?.data.data.presentation_type
              }
            >
              {/* title / description 1 */}
              <div className="space-y-3">
                <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
                  {lessonDetails?.title}
                </h4>

                <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
                  {parseStyledText(lessonDetails?.content || "")}
                </p>
              </div>

              {/* warning or info */}
              {!!lessonDetails?.is_free && (
                <div className="flex items-center gap-2 py-2 px-3 bg-[#F1FA9E] rounded">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 5.1697V17.2397C22 18.1997 21.22 19.0997 20.26 19.2197L19.93 19.2597C17.75 19.5497 14.39 20.6597 12.47 21.7197C12.21 21.8697 11.78 21.8697 11.51 21.7197L11.47 21.6997C9.54997 20.6497 6.20003 19.5497 4.03003 19.2597L3.73999 19.2197C2.77999 19.0997 2 18.1997 2 17.2397V5.15969C2 3.96969 2.96997 3.0697 4.15997 3.1697C6.25997 3.3397 9.43997 4.39973 11.22 5.50973L11.47 5.65969C11.76 5.83969 12.24 5.83969 12.53 5.65969L12.7 5.54971C13.33 5.15971 14.13 4.7697 15 4.4197V8.49972L17 7.1697L19 8.49972V3.27975C19.27 3.22975 19.53 3.19971 19.77 3.17971H19.83C21.02 3.07971 22 3.9697 22 5.1697Z"
                      stroke="#2C3003"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 5.99023V20.9902"
                      stroke="#2C3003"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19 3.28027V8.50024L17 7.17023L15 8.50024V4.42023C16.31 3.90023 17.77 3.48027 19 3.28027Z"
                      stroke="#2C3003"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p className="mobile-body-large md:body-large text-[#2C3003]">
                    Velit ut tortor pretium viverra suspendisse potenti nullam
                  </p>
                </div>
              )}

              {!!lessonDetails?.avatar && (
                <BluredImage
                  url={lessonDetails?.avatar || ""}
                  hash={lessonDetails?.avatar_hash}
                  name={`${lessonDetails?.title} cover`}
                  imgStyle="w-full max-h-[438px]"
                  blurhashStyle="w-full max-h-[438px]"
                  cWidth={781}
                  cHeight={438}
                />
              )}

              {/* title / description 2 */}
              {/* <div className="space-y-3">
              <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
                Title
              </h4>

              <div className="space-y-2">
                <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                  cursus vitae congue mauris rhoncus aenean vel elit
                  scelerisque. In egestas erat imperdiet sed euismod nisi
                  porta lorem mollis. Morbi tristique senectus et netus.
                  Mattis pellentesque id nibh tortor id aliquet lectus proin.
                  Sapien faucibus et molestie ac feugiat sed lectus
                  vestibulum. Ullamcorper velit sed ullamcorper morbi
                  tincidunt ornare massa eget. Dictum varius duis at
                  consectetur lorem. Nisi vitae suscipit tellus mauris a diam
                  maecenas sed enim. Velit ut tortor pretium viverra
                  suspendisse potenti nullam. Et molestie ac feugiat sed
                </p>

                <p className="text-justify mobile-body-large md:body-large text-txt-on-surface-secondary-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                  cursus vitae congue mauris rhoncus aenean vel elit
                  scelerisque. In egestas erat imperdiet sed euismod nisi
                  porta lorem mollis. Morbi tristique senectus et netus.
                  Mattis pellentesque id nibh tortor id aliquet lectus proin.
                  Sapien faucibus et molestie ac feugiat sed lectus
                  vestibulum. Ullamcorper velit sed ullamcorper morbi
                  tincidunt ornare massa eget. Dictum varius duis at
                  consectetur lorem. Nisi vitae suscipit tellus mauris a diam
                  maecenas sed enim. Velit ut tortor pretium viverra
                  suspendisse potenti nullam. Et molestie ac feugiat sed
                </p>
              </div>
            </div> */}
            </div>
          </div>

          {/* article */}
          {!!lessonDetails?.content && (
            <div className="relative space-y-4 border border-outline-level1 rounded py-3 px-4">
              <div className="space-y-1.5">
                <h4 className="mobile-title-small md:title-small text-txt-on-surface-terriary-light">
                  For Further Reading
                </h4>
                <h3 className="mobile-title-medium md:title-medium text-on_surface-light">
                  {title}
                </h3>
              </div>

              {/* year, author, open acccess */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <span className="mobile-body-medium md:body-medium text-txt-on-surface-secondary-light">
                  {year}
                </span>

                <div className="w-1 h-1 rounded-full bg-txt-on-surface-terriary-light" />

                <span className="mobile-body-medium md:body-medium text-txt-on-surface-terriary-light">
                  {author}
                </span>

                {open && (
                  <>
                    <div className="w-1 h-1 rounded-full bg-txt-on-surface-terriary-light" />

                    <span className="mobile-body-medium md:body-medium text-txt-on-surface-terriary-light">
                      Open Access
                    </span>
                  </>
                )}
              </div>

              <div className="absolute bottom-2 right-2 -rotate-45 ">
                <Button
                  props={{
                    value: "",
                    disabled: false,
                    leftIcon: "",
                    rightIcon: "arrow-right-black",
                    type: "outlined",
                    width: 20,
                    height: 20,
                    clickHandler: () => router.push(`/articles/${title}`),
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* like & dislike */}
        {!!lessonDetails?.content && (
          <div className="flex items-center justify-end gap-6 md:gap-12">
            <span className="mobile-label-small md:label-small text-txt-low-important">
              Is this helpful?
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
                    disabled: false,
                    clickHandler: () => setDislike((prev) => prev + 1),
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
                    disabled: false,
                    clickHandler: () => setLike((prev) => prev + 1),
                  }}
                />

                <span className="mobile-label-large md:label-large text-on_surface-light">
                  {like}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center">
      <h2 className="text-on_surface-light text-center py-3 px-4">
        This course has no lessons.
      </h2>
    </div>
  );
}

export default Page;
