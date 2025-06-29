import NavLink from "@/app/(global_components)/NavLink";
import AsideLink from "./AsideLink";

export default function LeftSidebar() {
  return (
    <aside className="w-72">
      <AsideLink href="/docs">Intoduction</AsideLink>
      <AsideLink href="/docs/installation">Installation</AsideLink>
      <AsideLink href="/docs">Intoduction</AsideLink>
    </aside>
  );
}
