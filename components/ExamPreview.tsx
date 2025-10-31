"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { FormControlLabel, Radio, RadioGroup, styled } from "@mui/material";

// components
import Button from "./Button";
import BluredImage from "./BluredImage";

// data
import { exam } from "@/constants/data";

const RedRadio = styled(Radio)({
  color: "#BCBFC2", // default (unchecked)
  "&.Mui-checked": {
    color: "#A91418", // checked state
  },
});

function ExamPreview() {
  const [startExam, setStartExam] = useState(false);

  return startExam ? (
    <Questions />
  ) : (
    <div className="pt-10 md:py-10 h-screen md:h-fit flex flex-col items-center md:justify-center !gap-16 mobile-grid-system-level0 md:grid-system-level0">
      <div className="space-y-12">
        <div className="space-y-3 flex flex-col items-center justify-center">
          <h2 className="text-on_surface-light mobile-header-large md:header-large">
            Final Exam
          </h2>

          <div className="flex items-center justify-between gap-4">
            <h5 className="mobile-title-medium md:title-medium text-txt-on-surface-secondary-light">
              {exam.questions.length} Questions
            </h5>
            <div className="w-2 h-2 rounded-full bg-outline-level2" />
            <h5 className="mobile-title-medium md:title-medium text-txt-on-surface-secondary-light">
              {exam.time} hours
            </h5>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-on_surface-light mobile-title-medium md:title-medium text-center">
            Your diploma after passing the exam:
          </h4>

          <div className="p-2 rounded-lg bg-surface0-light">
            <BluredImage
              url="/diploma.png"
              hash="LDSY:Sof?^%M^k%M.8t7-;RjD%Rj"
              name="diploma"
              imgStyle="w-[521px] h-[267.81px]"
              blurhashStyle="w-[521px] h-[267.81px]"
              cWidth={521}
              cHeight={267.81}
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[422px]">
        <Button
          props={{
            value: "Start",
            disabled: false,
            leftIcon: "",
            rightIcon: "",
            type: "filled",
            color: "red",
            padding: "px-8 py-3 gap-2 !w-full",
            width: 24,
            height: 24,
            clickHandler: () => setStartExam(true),
          }}
        />
      </div>
    </div>
  );
}

export default ExamPreview;

const Questions = () => {
  const [currentQuesNumber, setCurrentQuesNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<
    {
      id: string;
      numOfQues: number;
      ans: string;
    }[]
  >([]);

  const submitQuestionsClickHandler = () => {
    console.log(userAnswer);
  };

  return (
    <div className="h-screen relative w-full flex flex-col justify-between">
      {/* top */}
      <div>
        {/* header */}
        <div className="border-b border-outline-level0 py-3 px-8 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h5 className="text-on_surface-light mobile-label-large-db md:label-large-db">
              {exam.time}
            </h5>
            <span className="text-txt-on-surface-terriary-light mobile-label-small md:label-small">
              to finish exam
            </span>
          </div>

          <div>
            <h5 className="text-txt-on-surface-secondary-light mobile-label-large-db md:label-large-db">
              {userAnswer.length}/ {exam.num} Answered
            </h5>
          </div>
        </div>

        {/* body -> question */}
        <div className="py-3 px-8">
          <Question
            key={exam.questions[currentQuesNumber].id}
            q={exam.questions[currentQuesNumber]}
            currentAnswer={userAnswer}
            setCurrentAnswer={setUserAnswer}
          />
        </div>
      </div>

      {/* footer */}
      <div className="border-t border-outline-level0 py-3 px-8 flex items-center justify-between">
        <Button
          props={{
            value: "Prev",
            disabled: currentQuesNumber === 0,
            leftIcon: "arrow-left",
            rightIcon: "",
            type: "outlined",
            color: "red",
            padding: "px-4 py-2 gap-2",
            width: 24,
            height: 24,
            clickHandler: () => {
              if (currentQuesNumber !== 0) {
                setCurrentQuesNumber((prev) => prev - 1);
              }
            },
          }}
        />

        {/* visual answered and unansweres ques */}
        <div className="flex items-center gap-2">
          {exam.questions.map((q, index) => {
            const answered = userAnswer.some((ua) => ua.id === q.id);

            return (
              <div
                key={q.id}
                className={`transition-all ease-in-out duration-300 ${
                  index > currentQuesNumber && !answered
                    ? "w-0.5 h-2.5 rounded-full bg-[#AEACAD]"
                    : currentQuesNumber === index
                    ? "w-2 h-2 rounded-full bg-[#0088FF]"
                    : answered
                    ? "w-2 h-2 rounded-full bg-[#34C759]"
                    : "w-0.5 h-2.5 rounded-full bg-[#FF383C]"
                }`}
              />
            );
          })}
        </div>

        <Button
          props={{
            value:
              exam.questions.length - 1 === currentQuesNumber
                ? "Submit Questions"
                : "Next",
            disabled: false,
            leftIcon: "",
            rightIcon:
              exam.questions.length - 1 === currentQuesNumber
                ? ""
                : "arrow-right-white",
            type: "filled",
            color: "red",
            padding: "px-4 py-2 gap-2",
            width: 24,
            height: 24,
            clickHandler: () => {
              if (exam.questions.length - 1 === currentQuesNumber) {
                submitQuestionsClickHandler();
              } else {
                setCurrentQuesNumber((prev) => prev + 1);
              }
            },
          }}
        />
      </div>
    </div>
  );
};

const Question = ({
  q,
  currentAnswer,
  setCurrentAnswer,
}: {
  q: {
    id: string;
    numOfQues: number;
    title: string;
    type: string;
    options: {
      id: string;
      option: string;
    }[];
  };
  currentAnswer: {
    id: string;
    numOfQues: number;
    ans: string;
  }[];
  setCurrentAnswer: Dispatch<
    SetStateAction<
      {
        id: string;
        numOfQues: number;
        ans: string;
      }[]
    >
  >;
}) => {
  const initialAns = currentAnswer.find((ua) => ua.id === q.id)?.ans || "";
  const [answer, setAnswer] = useState(q.type === "test" ? "" : initialAns);
  const [selected, setSelected] = useState(q.type === "test" ? initialAns : "");
  const [radioGroupWidth, setRadioGroupWidth] = useState<number>(100);

  const containerRef = useRef<HTMLDivElement>(null);

  // Measure container width
  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setRadioGroupWidth(width);
      }
    };

    measureWidth();
    window.addEventListener("resize", measureWidth);

    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  useEffect(() => {
    const ansValue = q.type === "test" ? selected : answer;

    setCurrentAnswer((prev) => {
      // if empty → remove from user answers
      if (!ansValue.trim()) {
        // only remove if it exists
        if (prev.some((item) => item.id === q.id)) {
          return prev.filter((item) => item.id !== q.id);
        }
        return prev;
      }

      // if exists → update, else add
      const existing = prev.find((item) => item.id === q.id);
      if (existing) {
        if (existing.ans === ansValue) return prev; // avoid redundant updates
        return prev.map((item) =>
          item.id === q.id
            ? { ...item, ans: ansValue, numOfQues: q.numOfQues }
            : item
        );
      }
      return [...prev, { id: q.id, numOfQues: q.numOfQues, ans: ansValue }];
    });
  }, [selected, answer, q, setCurrentAnswer]);

  // Keep local state in sync if currentAnswer updates for the same question
  useEffect(() => {
    const ans = currentAnswer.find((ua) => ua.id === q.id)?.ans || "";
    if (q.type === "test") {
      setSelected(ans);
      setAnswer("");
    } else {
      setAnswer(ans);
      setSelected("");
    }
  }, [q.id, q.type, currentAnswer]);

  return (
    <div className="space-y-3 w-full">
      <div className="space-y-1">
        <h6 className="text-txt-on-surface-terriary-light mobile-label-medium-db md:label-medium-db">
          Question {q.numOfQues}
        </h6>
        <p className="text-on_surface-light mobile-body-large md:body-large">
          {q.title}
        </p>
      </div>

      <div>
        {q.type === "test" ? (
          <RadioGroup
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="space-y-2"
            sx={{ width: `${radioGroupWidth}px` }}
          >
            {q.options.map((op) => (
              <FormControlLabel
                key={op.id}
                className="px-3 flex items-center gap-1.5"
                value={op.option}
                control={<RedRadio />}
                label={
                  <h3 className="text-on_surface-light mobile-body-large md:body-large whitespace-nowrap">
                    {op.option}
                  </h3>
                }
              />
            ))}
          </RadioGroup>
        ) : (
          <div>
            <textarea
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full h-24 p-3 rounded outline-none bg-surface0-light resize-none mobile-body-large md:body-large text-on_surface-light"
            />
          </div>
        )}
      </div>
    </div>
  );
};
