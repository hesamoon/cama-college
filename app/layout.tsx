import { Suspense } from "react";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { NuqsAdapter } from "nuqs/adapters/next/app";

// global styles
import "./globals.css";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import DisableInteractions from "@/components/DisableInteractions";

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
    <html lang="en">
      <body className="bg-background h-screen flex flex-col justify-between overflow-x-hidden">
        <DisableInteractions />
        <NuqsAdapter>
          <div>
            <Header />
            <Suspense fallback={<p>Loading search info...</p>}>
              {children}
            </Suspense>
            <Toaster position="bottom-center" />
          </div>
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
