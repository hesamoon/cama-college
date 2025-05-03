"use client";

import Image from "next/image";

type Props = {
  value: string;
  leftIcon: string;
  rightIcon: string;
  type: string;
  disabled: boolean;
  color?: string;
  width?: number;
  height?: number;
  size?: string;
  padding?: string;
  clickHandler?: () => void;
};

function Button({
  props: {
    value = "Button",
    leftIcon,
    rightIcon,
    type = "filled",
    disabled,
    color,
    width = 24,
    height = 24,
    size = "body-large",
    padding = "p-2",
    clickHandler = () => {},
  },
}: {
  props: Props;
}) {
  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-full transition-all duration-300 hover:bg-primary-opacity-40 focus:bg-primary-opacity-12 ${padding} ${size} ${
        disabled ? "opacity-40 hover:bg-transparent" : "cursor-pointer"
      } text-primary-shades-80 ${
        type === "filled"
          ? `${color === "red" ? "text-white" : null} bg-primary-shades-10`
          : type === "outlined"
          ? `${
              color === "red" ? "!text-primary-shades-10" : null
            } border border-outline1`
          : type === "text"
          ? color === "red"
            ? "!text-primary-shades-10"
            : null
          : type === "tonal"
          ? "bg-primary-shades-10-opacity-4"
          : null
      }`}
      disabled={disabled}
      onClick={clickHandler}
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

      {rightIcon ? (
        <Image
          src={`/${rightIcon}.svg`}
          alt={rightIcon}
          width={width}
          height={height}
        />
      ) : null}
    </button>
  );
}

export default Button;
