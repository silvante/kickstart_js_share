import NavLink from "@/app/(global_components)/NavLink";
import AsideLink from "./AsideLink";
import Link from "next/link";

export default function LeftSidebar() {
  return (
    <aside className="w-72 sticky top-26">
      <AsideLink href="/docs">Intoduction</AsideLink>
      <AsideLink href="/docs/installation">Installation</AsideLink>
      <AsideLink href="/docs/usage">Usage</AsideLink>
      <div className="mt-5 p-4 bg-black/50 rounded-xl flex flex-col gap-3">
        <Link href={"https://nestjs.com/"} target="_blanck">Nest js website ⚡️</Link>
        <Link href={"https://nextjs.org/"} target="_blanck">Next js website 💫</Link>
      </div>
    </aside>
  );
}
