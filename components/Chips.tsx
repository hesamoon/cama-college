import Image from "next/image";

// types
import { Chip } from "@/app/types/types";

function Chips({
  chips: {
    lable = "label",
    leftIcon,
    rightIcon,
    type = "filled",
    disabled,
    width = 24,
    height = 24,
  },
}: {
  chips: Chip;
}) {
  return (
    <div
      className={`flex items-center justify-center whitespace-nowrap w-fit gap-1 rounded-sm py-4 px-6 transition-all duration-300 text-sm sm:text-base lg:text-base text-on-surface-secondary ${
        disabled ? "opacity-40 hover:bg-transparent" : null
      } ${
        type === "tonal"
          ? "bg-statelayer-neutral-opacity-4 hover:bg-statelayer-neutral-opacity-8 focus:bg-statelayer-neutral-opacity-12"
          : type === "outline"
          ? ""
          : type === "text"
          ? ""
          : null
      }`}
    >
      {leftIcon ? (
        <Image
          src={`/${leftIcon}.svg`}
          alt={leftIcon}
          width={width}
          height={height}
        />
      ) : null}

      {lable}

      {rightIcon ? (
        <Image
          src={`/${rightIcon}.svg`}
          alt={rightIcon}
          width={width}
          height={height}
        />
      ) : null}
    </div>
  );
}

export default Chips;
