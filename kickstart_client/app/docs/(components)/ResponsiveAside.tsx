"use client";
import { Menu, X } from "lucide-react";
import AsideLink from "./AsideLink";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ResponsiveAside() {
  const [show, setShow] = useState(false);
  function handleTogle() {
    setShow(!show);
  }
  return (
    <>
      <div className="border-b border-white/10 header_width mx-auto pb-5 flex justify-end">
        <button onClick={handleTogle} className="cursor-pointer">
          <Menu />
        </button>
      </div>
      <div
        className={`w-full h-screen fixed top-0 ${
          !show ? "left-[-100%]" : "left-0"
        } transition-all base_bg pt-20 px-4 space-y-5 z-40`}
      >
        <div className="w-full flex justify-between">
          <h2 className="font-semibold text-2xl">Docs</h2>
          <button onClick={handleTogle} className="cursor-pointer">
            <X />
          </button>
        </div>
        <div>
          <button onClick={handleTogle} className="w-full">
            <AsideLink href="/docs">Intoduction</AsideLink>
          </button>
          <button onClick={handleTogle} className="w-full">
            <AsideLink href="/docs/installation">Installation</AsideLink>
          </button>
          <button onClick={handleTogle} className="w-full">
            <AsideLink href="/docs/usage">Usage</AsideLink>
          </button>
          <div className="mt-5 p-4 bg-black/50 rounded-xl flex flex-col gap-3">
            <Link href={"https://nestjs.com/"} target="_blanck">
              Nest js website ⚡️
            </Link>
            <Link href={"https://nextjs.org/"} target="_blanck">
              Next js website 💫
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold">Author</h4>
          <Link href={"https://xamidov.uz"} target="_blanck">
            <div className="p-3 rounded-xl bg-black/50 space-y-3">
              <Image
                src={"/images/image.png"}
                alt="Kickstart js author's portfolio"
                width={400}
                height={200}
                className="w-full"
              />
              <p>Mardonbek Khamidov | Portfolio</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
