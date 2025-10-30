import Image from "next/image";

// components
import Button from "./Button";

function ApplyBanner() {
  return (
    <div className="relative bg-primary-tints-90 rounded-lg flex items-center flex-col-reverse md:grid md:grid-cols-2 pt-12 pb-2 gap-8 overflow-hidden">
      <div className="col-span-1 z-30 px-9 md:pl-20">
        <h2 className="mobile-header-large md:header-large text-on_surface-light">
          Apply for admissions
        </h2>
        <p className="mt-2 text-txt-on-surface-secondary-light mobile-body-large md:body-large text-justify">
          No matter your level, your experiences, who you are, where you are, or
          when you have the time to start your journey, CAMA College is here for
          you. We are an exclusive society of future-shapers, one that excludes
          nobody!
        </p>

        <div className="py-10 md:pt-10 md:pb-20">
          <Button
            props={{
              value: "Apply now",
              type: "filled",
              disabled: false,
              leftIcon: "",
              rightIcon: "arrow-right-white",
              color: "red",
              width: 20,
              height: 20,
              size: "body-large",
              padding: "px-8 py-4",
            }}
          />
        </div>
      </div>

      <div className="col-span-1 flex items-center justify-center w-[278px] h-[278px] md:w-[385px] md:h-[385px]">
        <Image src="/learning-amico.svg" alt="amico" width={385} height={385} />
      </div>

      <Image
        className="absolute -top-10 md:top-0 -left-4 md:left-0"
        src="/rec-t-l.svg"
        alt="rec-t-l"
        width={150}
        height={150}
      />
      <Image
        className="absolute top-0 -right-32 md:right-8"
        src="/rec-t-r.svg"
        alt="rec-t-r"
        width={204}
        height={204}
      />
      <Image
        className="hidden md:block absolute bottom-0 right-0"
        src="/rec-b-r.svg"
        alt="rec-b-r"
        width={150}
        height={150}
      />
      <Image
        className="absolute -bottom-12 md:-bottom-10 left-0"
        src="/rec1.svg"
        alt="rec1"
        width={50}
        height={50}
      />
      <Image
        className="absolute -bottom-14 md:-bottom-10 left-0"
        src="/rec2.svg"
        alt="rec2"
        width={100}
        height={100}
      />
      <Image
        className="absolute -bottom-14 md:-bottom-10 left-0"
        src="/rec3.svg"
        alt="rec3"
        width={150}
        height={150}
      />
      <Image
        className="absolute -bottom-14 md:-bottom-10 left-0"
        src="/rec4.svg"
        alt="rec4"
        width={200}
        height={200}
      />
    </div>
  );
}

export default ApplyBanner;
