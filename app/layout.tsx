import type { Metadata } from "next";
import { Fjalla_One, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/common/SmoothScroll";
import ScrollProgress from "@/common/ScrollProgress";
import PageTransition from "@/common/PageTransition";
import Preloader from "@/common/Preloader";
import CustomCursor from "@/common/CustomCursor";
import Script from "next/script";
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
  metadataBase: new URL("https://portfolio-mocha-two-84yz194zfg.vercel.app"),
  title: {
    default: "Harsh Pal Singh | Full Stack & Frontend Developer",
    template: "%s | Harsh Pal Singh",
  },
  description: "Full Stack & Frontend Developer specializing in React.js, Next.js, MERN stack, and high-performance web applications. Available for full-time and project roles.",
  keywords: [
    "Harsh Pal Singh",
    "Full Stack Developer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "MERN Stack Engineer",
    "Web Developer Portfolio",
    "SoftSource Technolabs",
    "JavaScript Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Harsh Pal Singh", url: "https://github.com/harshps900" }],
  creator: "Harsh Pal Singh",
  publisher: "Harsh Pal Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-mocha-two-84yz194zfg.vercel.app",
    title: "Harsh Pal Singh | Full Stack & Frontend Developer",
    description: "Full Stack & Frontend Developer specializing in React.js, Next.js, MERN stack, and high-performance web applications.",
    siteName: "Harsh Pal Singh Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Pal Singh - Full Stack & Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Pal Singh | Full Stack & Frontend Developer",
    description: "Full Stack & Frontend Developer specializing in React.js, Next.js, MERN stack, and high-performance web applications.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "04t-yY7FdHhcXNAaeVjAO-maoiOxiOXLDQRTanAXj_g",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Harsh Pal Singh",
  "jobTitle": "Full Stack & Frontend Developer",
  "url": "https://portfolio-mocha-two-84yz194zfg.vercel.app",
  "image": "https://portfolio-mocha-two-84yz194zfg.vercel.app/profile.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/harsh-pal-singh-dev/",
    "https://github.com/harshps900"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "SoftSource Technolabs"
  },
  "knowsAbout": [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "REST APIs"
  ]
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
      <body className="min-h-full flex flex-col font-sans bg-[#09090b] text-[#f4f4f5] selection:bg-zinc-800 selection:text-zinc-100" suppressHydrationWarning>
        {/* JSON-LD Structured Data for Google Rich Snippets */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V9NVEGWTYE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V9NVEGWTYE');
          `}
        </Script>
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <PageTransition>
            {children}
          </PageTransition>
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}



