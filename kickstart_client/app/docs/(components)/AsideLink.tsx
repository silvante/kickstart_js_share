"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function AsideLink({ href, children }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={clsx(
        "flex transition-alltransition-all border-b-2 border-transparent font-medium py-1 px-2 rounded-md",
        isActive && "font-semibold bg-white/5"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
