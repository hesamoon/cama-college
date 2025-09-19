import { Suspense } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import QueryProvider from "@/components/QueryProvider";

// global styles
import "./globals.css";

// components
import TUUM from "@/components/TUUM";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextSelectionPopupProps from "@/components/TextSelectionPopup";

const dylanCopperplate = localFont({
  src: [
    {
      path: "../public/fonts/dylancopperplate_xlight_macroman/Dylan-CopperplateXLight-webfont.woff2",
      weight: "200",
    },
    {
      path: "../public/fonts/dylancopperplate_light_macroman/Dylan-CopperplateLight-webfont.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/dylancopperplate_normal_macroman/Dylan-CopperplateNormal-webfont.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/dylancopperplate_medium_macroman/Dylan-CopperplateMedium-webfont.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/dylancopperplate_bold_macroman/Dylan-CopperplateBold-webfont.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/dylancopperplate_xbold_macroman/Dylan-CopperplateXBold-webfont.woff2",
      weight: "800",
    },
  ],
  display: "swap",
  variable: "--font-dylan-copperplate",
});

export const metadata: Metadata = {
  title: "CAMA College",
  description: "Shape your future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dylanCopperplate.variable}>
      <body className="bg-background h-screen flex flex-col justify-between overflow-x-hidden">
        <QueryProvider>
          <NuqsAdapter>
            <div>
              <Header />
              <TUUM />
              <Suspense fallback={<p>Loading search info...</p>}>
                {children}
              </Suspense>
              <Toaster position="bottom-center" />
            </div>
            <Footer />
            <TextSelectionPopupProps />
          </NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  );
}
