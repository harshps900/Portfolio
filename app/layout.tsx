import type { Metadata } from "next";
import { Fjalla_One, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/common/SmoothScroll";
import CustomCursor from "@/common/CustomCursor";
import "./globals.css";

const fjalla = Fjalla_One({
  weight: "400",
  variable: "--font-fjalla",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Pal Singh | Creative Web Developer",
  description: "Creative Web Developer & Full Stack Engineer specializing in interactive experiences, MERN stack, and performance optimization.",
  verification: {
    google: "04t-yY7FdHhcXNAaeVjAO-maoiOxiOXLDQRTanAXj_g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fjalla.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f7f4eb] text-[#000000]" suppressHydrationWarning>
        <SmoothScroll>
          <CustomCursor />
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}


