import { Suspense } from "react";
import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

// global styles
import "./globals.css";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

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
      <body className="bg-background h-screen flex flex-col justify-between">
        <NuqsAdapter>
          <div>
            <Navbar />
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
