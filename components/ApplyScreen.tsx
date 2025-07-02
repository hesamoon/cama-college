"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import Image from "next/image";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Button from "./Button";

const applySteps = [
  {
    id: 1,
    title: "Account Creation",
    desc: "Simply and effortlessly, use your own email address to create your account. By doing so, you can have a wide and clear access to everything we have to offer.",
  },
  {
    id: 2,
    title: "Document Upload and Profile Completion",
    desc: "After uploading a conveniently small number of identification and educational documents, your account will be formally and fully approved by us as a result of which you will be deemed an official student of Canada Management College",
  },
  {
    id: 3,
    title: "College Verification Review",
    desc: "During this quite simple process, your documents and the details of your account will be assessed by our Office of Admissions. And, within 3 business, the results and their needed justifications or instructions will be presented to you.",
  },
  {
    id: 4,
    title: "Course Selection, Wishlist and Payment",
    desc: "You can add your intended courses to your Wishlist after which you can proceed with the payment. Additionally, for students from countries where normal banking means and methods of financial transaction are not accessible, contact us via the dedicated email addresses or contact forms; and, we will do our best to help you with such issues.",
  },
  {
    id: 5,
    title: "Participation in Courses",
    desc: "Generally speaking, we have three types of courses, namely, Online, In-person, and Self-study. During the process of making your choice, do pay attention to such details by consulting the website’s FAQ or our team; after all, time is a more important factor in Online and In-person courses since a certain course might reach maximum capacity after which Waiting Lists and other strategies will be used to maximize your educational potential.",
  },
  {
    id: 6,
    title: "Taking the Final Exam",
    desc: "Given our academic standards, you will have to pass a final exam for certain courses in accordance with what you learn. After successfully doing so for the said courses or after the end of your course (for courses that do not require a final exam), you will officially receive the suitable acknowledgement of your efforts.",
  },
  {
    id: 7,
    title: "Receiving the Certificate/Diploma",
    desc: "After successfully passing your final exam (for courses that require one) or finishing your educational experience, you will receive the electronic copy of your certificate/diploma within at least 10 business days. This copy can be opened and downloaded. Eventually, within at least 30 business days since receiving your electronic certificate/diploma, the physical version will be sent to the address you provide for us.",
  },
];

export default function ApplyScreen() {
  const [currStep, setCurrStep] = useState(applySteps[0]);

  const bgImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });

    timeline.from(bgImage.current, {
      clipPath: "inset(15%)",
    });
  }, []);

  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden z-[99]">
      <div ref={bgImage} className="absolute inset-0">
        <Image
          src="/apply-bg.jpg"
          alt="apply bg"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#17030499" }}
        />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center grid-system-level1 w-full grid items-center grid-cols-3">
          <div className="col-span-1"></div>

          <Content content={currStep} />

          <Navigation currentStep={currStep} navigate={setCurrStep} />
        </div>
      </div>
    </section>
  );
}

function Content({
  content,
}: {
  content: { id: number; title: string; desc: string };
}) {
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: "0px bottom",
        end: "bottom bottom",
        scrub: true,
      },
      bottom: "-200px",
      opacity: 0,
    });
  }, []);

  return (
    <div
      ref={contentRef}
      className="relative col-span-1 space-y-2 text-txt-on-primary-dark"
    >
      <h3 className="underline text-start display-small">{content.id}.</h3>
      <h2 className="text-center header-large">{content.title}</h2>
      <p className="body-large text-center">{content.desc}</p>
    </div>
  );
}

function Navigation({
  currentStep,
  navigate,
}: {
  currentStep: { id: number; title: string; desc: string };
  navigate: Dispatch<
    SetStateAction<{
      id: number;
      title: string;
      desc: string;
    }>
  >;
}) {
  const navigationRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(navigationRef.current, {
      scrollTrigger: {
        trigger: navigationRef.current,
        start: "0px right",
        end: "right+=200px right",
        scrub: true,
      },
      right: "-200px",
      opacity: 0,
    });
  }, []);

  return (
    <div
      ref={navigationRef}
      className="relative col-span-1 flex items-center justify-end"
    >
      <div className="flex flex-col items-center gap-2">
        {currentStep.id !== 1 && (
          <Button
            props={{
              value: "",
              color: "",
              disabled: false,
              leftIcon: "",
              rightIcon: "arrow-up-white",
              type: "text",
              width: 20,
              height: 20,
              clickHandler: () => navigate((prev) => applySteps[prev.id - 2]),
            }}
          />
        )}

        <div className="flex flex-col gap-2">
          {applySteps.map((item) => (
            <div
              key={item.id}
              className={`w-1 h-5 rounded-full transition-all ease-linear duration-300 cursor-pointer ${
                currentStep.id === item.id
                  ? "bg-background-primary-light"
                  : "bg-white"
              }`}
              onClick={() => navigate(item)}
            />
          ))}
        </div>

        {currentStep.id !== 7 && (
          <Button
            props={{
              value: "",
              color: "",
              disabled: false,
              leftIcon: "",
              rightIcon: "arrow-down-white",
              type: "text",
              width: 20,
              height: 20,
              clickHandler: () => navigate((prev) => applySteps[prev.id]),
            }}
          />
        )}
      </div>
    </div>
  );
}
