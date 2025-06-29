import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "../(global_components)/Header";
import LeftSidebar from "./(components)/LeftSidebar";
import RightSidebar from "./(components)/RightSidebar";
import ResponsiveAside from "./(components)/ResponsiveAside";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "Kickstart JS uz | Docs",
  description:
    "Kickstart JS Uzbekistan, Open source Startup Template generator with Authentication documentation",
  keywords: [
    "Kickstart JS",
    "kickstart js",
    "kickstart js uz",
    "Kickstart JS Uz",
    "Kickstart Uz",
    "kickstart uz",
    "Authentication generator uzbekistan js",
    "Structured template",
    "Mardonbek Khamidov",
    "mardonbek khamidov",
    "Mardonbek Xamidov",
    "mardonbek xamidov",
    "Mardonbek Hamidov",
    "mardonbek hamidov",
    "sayt",
    "Template",
    "kickstartjs",
    "kickstartjs uz",
    "kickstart-js-uz",
  ],
  alternates: {
    canonical: "https://kickstartjs.uz",
  },
  openGraph: {
    title: "Kickstart JS | Uzbekistan",
    description:
      "Kickstart JS Uzbekistan Open source Startup Template generator with Authentication",
    url: "https://xamidov.com",
    siteName: "Kickstart JS | Uzbekistan",
    // continue
    images: [
      {
        url: "https://github.com/silvante/portfolio/blob/main/app/assets/og_image.png?raw=true",
        width: 280,
        height: 280,
        type: "image/png",
        alt: "Mardonbek Khamidov Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mardonbek Khamidov | Portfolio",
    description:
      "Welcome to the official portfolio of Mardonbek Khamidov — a Full-Stack Software Engineer specializing in high-performance web applications using Ruby on Rails, Next.js, and NestJS. Discover my work, skills, and digital journey.",
    images: [
      "https://github.com/silvante/portfolio/blob/main/app/assets/og_image.png?raw=true",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icons/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased space-y-5 flex flex-col`}
      >
        <Header />
        <ResponsiveAside />
        <main className="header_width mx-auto flex justify-between items-start gap-10">
          <LeftSidebar />
          <div className="flex-1">{children}</div>
          <RightSidebar />
        </main>
      </body>
    </html>
  );
}
