import Image from "next/image";
import Link from "next/link";

// components
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* left-side -> logo and nav */}
      <div className="flex items-center gap-10">
        {/* logo */}
        <Link href="/">
          <Image
            src="/cama-college-logo.png"
            alt="logo"
            width="60"
            height="66"
          />
        </Link>

        {/* nav */}
        <ul className="flex items-center gap-6 text-on_surface-light">
          <Link href="/programs">
            <li>Progrmas</li>
          </Link>
          <Link href="/events">
            <li>Events</li>
          </Link>
          <Link href="/apply">
            <li>Apply</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      {/* right-side -> login and shopping cart buttons */}
      <div className="flex items-center gap-2">
        <Button
          props={{
            value: "Login | Signup",
            leftIcon: "login",
            rightIcon: "",
            type: "outlined",
            disabled: false,
            color: "black",
            width: 24,
            height: 24,
            padding: "px-4 py-2",
          }}
        />

        <Button
          props={{
            value: "",
            leftIcon: "bag",
            rightIcon: "",
            type: "outlined",
            disabled: false,
            textColor: "primary-shades-80",
            hoverColor: "btn-primary-bg-hover",
            pressedColor: "btn-primary-bg-pressed",
            width: 24,
            height: 24,
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
