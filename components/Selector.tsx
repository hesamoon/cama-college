"use client";

import Image from "next/image";

type Props = {
  value: string;
  leftIcon: string;
  disabled: boolean;
  width?: number;
  height?: number;
  selected: boolean;
  clickHandler?: () => void;
};

function Selector({
  props: {
    value = "Item",
    leftIcon,
    disabled,
    width = 24,
    height = 24,
    selected = false,
    clickHandler = () => {},
  },
}: {
  props: Props;
}) {
  return (
    <button
      className={`mobile-body-large md:body-large transition-all duration-300 border rounded-full w-fit md:w-full py-2 px-3 hover:border-background-primary-light hover:bg-[#A914180A] focus:border-background-primary-light focus:bg-[#A9141814] ${
        selected
          ? "bg-[#A9141814] border-background-primary-light text-background-primary-light"
          : "border-outline-level0 text-on_surface-light"
      } ${
        disabled
          ? "opacity-36 hover:bg-transparent hover:border-outline-level0"
          : "cursor-pointer"
      }`}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        clickHandler();
      }}
    >
      {leftIcon ? (
        <Image
          src={`/${leftIcon}.svg`}
          alt={leftIcon}
          width={width}
          height={height}
        />
      ) : null}

      {value}
    </button>
  );
}

export default Selector;
