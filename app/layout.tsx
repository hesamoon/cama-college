import type { Metadata } from "next";
import "./globals.css";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <body className="bg-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
