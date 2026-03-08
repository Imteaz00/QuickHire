import type { Metadata } from "next";
import { Epilogue, Inter, Red_Hat_Display, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuickHire",
  description:
    "Great platform for the job seeker that searching for new career heights and passionate about startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${epilogue.variable} ${inter.variable} ${clashDisplay.variable} ${redHatDisplay.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
