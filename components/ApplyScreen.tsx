"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const containerRef = useRef(null);
  const stickyRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const totalSteps = applySteps.length;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${totalSteps * 100}vh`,
      scrub: true,
      pin: stickyRef.current,
      onUpdate: (self) => {
        const index = Math.floor(self.progress * totalSteps);
        setCurrStep(applySteps[Math.min(index, totalSteps - 1)]);
      },
    });

    return () => {
      trigger.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-screen z-[99]">
      <div className="sticky top-0 h-screen" ref={stickyRef}>
        <Background />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center md:grid md:grid-cols-3 w-full items-center mobile-grid-system-level0 md:grid-system-level1">
            <div className="hidden md:block col-span-1" />
            <Content content={currStep} />
            <StepIndicator currentStep={currStep} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Background() {
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "+=500px",
        scrub: true,
      },
    });

    tl.from(bgRef.current, { clipPath: "inset(15%)" });
  }, []);

  return (
    <div ref={bgRef} className="absolute inset-0 z-0">
      <Image src="/apply-bg.jpg" alt="apply bg" fill className="object-cover" />
      <div className="absolute inset-0 bg-[#17030499]" />
    </div>
  );
}

function Content({
  content,
}: {
  content: { id: number; title: string; desc: string };
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = contentRef.current;

    const tl = gsap.timeline();
    tl.fromTo(
      el,
      { autoAlpha: 0, y: 50, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    return () => {
      gsap.set(el, { autoAlpha: 0 });
    };
  }, [content.id]);

  return (
    <div ref={contentRef} className="relative col-span-1 space-y-4 text-white">
      <h3 className="underline text-start mobile-display-small md:display-small">
        {content.id}.
      </h3>
      <h2 className="text-center mobile-header-large md:header-large">
        {content.title}
      </h2>
      <p className="mobile-body-large md:body-large text-center">
        {content.desc}
      </p>
    </div>
  );
}

function StepIndicator({ currentStep }: { currentStep: { id: number } }) {
  return (
    <div className="absolute bottom-5 right-10 md:bottom-0 md:right-0 md:relative col-span-1 flex items-center justify-end">
      <div className="flex flex-col items-center gap-2">
        {currentStep.id !== 1 && (
          <Image
            src="/arrow-up-white.svg"
            alt="arrow up"
            width={20}
            height={20}
          />
        )}

        {applySteps.map((item) => (
          <div
            key={item.id}
            className={`w-1 h-5 rounded-full transition-all duration-300 ${
              currentStep.id === item.id
                ? "bg-background-primary-light"
                : "bg-white"
            }`}
          />
        ))}
        {currentStep.id !== 7 && (
          <Image
            src="/arrow-down-white.svg"
            alt="arrow down"
            width={20}
            height={20}
          />
        )}
      </div>
    </div>
  );
}
