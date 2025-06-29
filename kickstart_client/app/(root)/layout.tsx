import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "../(global_components)/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Kickstart JS | Uzbekistan",
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
        url: "https://raw.githubusercontent.com/silvante/kickstart_js_share/refs/heads/main/kickstart_client/public/og.png",
        width: 280,
        height: 280,
        type: "image/png",
        alt: "Kickstart js uz logotype",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kickstart JS | Uzbekistan",
    description:
      "Kickstart JS Uzbekistan Open source Startup Template generator with Authentication",
    images: [
      "https://raw.githubusercontent.com/silvante/kickstart_js_share/refs/heads/main/kickstart_client/public/og.png",
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
      <body className={`${roboto.className} antialiased space-y-5`}>
        <Header />
        <main className="main_width mx-auto">{children}</main>
      </body>
    </html>
  );
}
