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
