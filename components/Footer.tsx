"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// components
import AboutUs from "./AboutUs";
import StaticMap from "./StaticMap";

function Footer() {
  const pathname = usePathname();

  if (pathname.includes("/checkout")) return;

  return (
    <footer className="bg-shades-light-90">
      <div className="flex flex-col md:grid md:grid-cols-7 gap-4 mobile-grid-system-level0 md:grid-system-level0 pt-8 sm:pt-12 lg:pt-16">
        {/* left section */}
        <div className="col-span-5">
          {/* top - left section */}
          <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                className="w-[45px] h-[49px] md:w-[156px] md:h-[173px]"
                src="/cama-college-logo.png"
                alt="logo"
                width={156}
                height={173}
              />
              <h4 className="whitespace-nowrap block md:hidden header-small text-on_surface-light">
                CAMA College
              </h4>
            </Link>

            {/* About Section */}
            <details className="group md:[&[open]]:block md:open" open>
              <summary className="flex justify-between items-center cursor-pointer md:cursor-default mobile-title-medium md:title-medium text-on_surface-light list-none">
                About
                <span className="md:hidden">
                  <svg
                    className="w-4 h-4 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <ul className="mt-4 space-y-4 mobile-body-large md:body-large text-txt-on-surface-secondary-light [&>li]:hover:text-background-primary-light [&>li]:hover:transition-all [&>li]:hover:ease-in-out [&>li]:hover:duration-300">
                <li>
                  <Link href="/team">About Us</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li>
                <li>Tagline</li>
                <li>Professor TUUM</li>
                <li>
                  <Link href="/identity-chart">Identity Chart</Link>
                </li>
                <li>
                  <Link href="/our-legality-and-legitimacy">
                    Our Legality and Legitimacy
                  </Link>
                </li>
              </ul>
            </details>

            {/* Stay Informed Section */}
            <div className="border-t border-outline-level0 block md:hidden" />
            <details className="group md:[&[open]]:block md:open" open>
              <summary className="flex justify-between items-center cursor-pointer md:cursor-default mobile-title-medium md:title-medium text-on_surface-light list-none">
                Stay Informed
                <span className="md:hidden">
                  <svg
                    className="w-4 h-4 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <ul className="mt-4 space-y-4 mobile-body-large md:body-large text-txt-on-surface-secondary-light [&>li]:hover:text-background-primary-light [&>li]:hover:transition-all [&>li]:hover:ease-in-out [&>li]:hover:duration-300">
                <li>
                  <Link href="/news">News & Blog</Link>
                </li>
                <li>Courses</li>
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>Consultant</li>
              </ul>
            </details>

            {/* Hot Links Section */}
            <div className="border-t border-outline-level0 block md:hidden" />
            <details className="group md:[&[open]]:block md:open" open>
              <summary className="flex justify-between items-center cursor-pointer md:cursor-default mobile-title-medium md:title-medium text-on_surface-light list-none">
                Hot Links
                <span className="md:hidden">
                  <svg
                    className="w-4 h-4 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <ul className="mt-4 space-y-4 mobile-body-large md:body-large text-txt-on-surface-secondary-light [&>li]:hover:text-background-primary-light [&>li]:hover:transition-all [&>li]:hover:ease-in-out [&>li]:hover:duration-300">
                <li>FAQ</li>
                <li>Careers</li>
                <li>
                  <Link href="/work-with-us">Partners</Link>
                </li>
                <li>Instructor Registration</li>
                <li>Representative Inquiry</li>
                <li>Charity & Philanthropy</li>
              </ul>
            </details>
          </div>

          {/* about us description*/}
          <AboutUs sx="hidden md:block" />
        </div>

        {/* right section */}
        <div className="mt-10 md:mt-0 col-span-2 flex flex-col justify-between gap-8">
          {/* contact us */}
          <div className="space-y-5">
            <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
              Contact Us
            </h4>

            {/* location */}
            <StaticMap paddingPer="75%" />

            <ul className="mobile-body-large md:body-large text-txt-on-surface-terriary-light space-y-3">
              <li>
                Phone:{" "}
                <span className="text-txt-on-surface-secondary-light">
                  +1 9382 737
                </span>
              </li>
              <li>
                Email:{" "}
                <span className="text-txt-on-surface-secondary-light">
                  cama@gmail.com
                </span>
              </li>
            </ul>

            {/* social media */}
            <div className="flex items-center gap-4">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
              <Image src="/youtube.svg" alt="youtube" width={24} height={24} />
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* our partners */}
          <div className="space-y-2">
            <h4 className="mobile-title-medium md:title-medium text-on_surface-light">
              Our Partners
            </h4>

            {/* social media */}
            <div className="flex items-center gap-4">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
              <Image src="/youtube.svg" alt="youtube" width={24} height={24} />
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* about us description*/}
      <AboutUs sx="block md:hidden" />

      {/* copyright */}
      <div
        className="mt-2 py-4 flex items-center justify-center gap-1"
        style={{
          backgroundImage: "url('/bg-ptrn3.svg')",
          backgroundSize: "cover",
        }}
      >
        <Image src="/copyright.svg" alt="copyright" width={20} height={20} />
        <p className="text-center mobile-body-large md:body-large text-txt-on-surface-terriary-light">
          CAMA College. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
