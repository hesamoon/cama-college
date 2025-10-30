import Image from "next/image";

// components
import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-screen">
      <div>
        <Image src="/404-error.svg" alt="404 page" width={428} height={428} />
      </div>

      <div className="flex flex-col justify-center items-center gap-6 max-w-[428px]">
        <div className="flex flex-col justify-center items-center gap-2.5">
          <h1 className="mobile-title-large md:title-large text-on_surface-light">
            404 - Page Not Found
          </h1>
          <p className="mobile-title-medium md:title-medium text-txt-on-surface-secondary-light text-center">
            The page you are looking for either does not exist, has been
            deleted, or has been moved.
          </p>
        </div>

        <Link href="/">
          <Button
            props={{
              value: "Go to home",
              disabled: false,
              leftIcon: "",
              rightIcon: "arrow-right-white",
              type: "filled",
              color: "red",
              padding: "px-6 py-3 gap-2",
              width: 24,
              height: 24,
            }}
          />
        </Link>
      </div>
    </div>
  );
}
