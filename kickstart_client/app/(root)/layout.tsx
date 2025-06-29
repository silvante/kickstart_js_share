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
  title: "Kickstart JS uz",
  description:
    "Kickstart JS Uzbekistan, Open source Startup Template generator with Authentication",
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
