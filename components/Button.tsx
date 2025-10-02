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
  hover?: string;
  clickHandler?: () => void;
  loading?: boolean;
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
    hover = "hover:bg-primary-opacity-40 focus:bg-primary-opacity-12",
    clickHandler = () => {},
    loading = false,
  },
}: {
  props: Props;
}) {
  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-full transition-all duration-300 ${hover} ${padding} ${size} ${
        disabled ? "opacity-40" : "cursor-pointer"
      } text-primary-shades-80 ${
        type === "filled"
          ? `${
              color === "red"
                ? "text-white"
                : color === "orange"
                ? "!bg-gradient-to-br from-[#F78B5D] to-[#CE6312]"
                : null
            } bg-primary-shades-10`
          : type === "outlined"
          ? `${
              color === "red"
                ? "!text-primary-shades-10"
                : color === "white"
                ? "text-white"
                : null
            } border border-outline1`
          : type === "text"
          ? color === "red"
            ? "!text-primary-shades-10"
            : null
          : type === "tonal"
          ? "bg-primary-shades-10-opacity-4"
          : null
      }`}
      disabled={disabled || loading}
      onClick={(e) => {
        e.stopPropagation();
        if (!loading) {
          clickHandler();
        }
      }}
    >
      {loading ? (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="31.416"
            strokeDashoffset="31.416"
            className="opacity-75"
          />
        </svg>
      ) : leftIcon ? (
        <Image
          src={`/${leftIcon}.svg`}
          alt={leftIcon}
          width={width}
          height={height}
        />
      ) : null}

      {value}

      {!loading && rightIcon ? (
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
