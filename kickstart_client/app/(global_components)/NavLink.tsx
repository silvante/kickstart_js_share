"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={clsx(
        "flex transition-alltransition-all border-b-2 border-transparent font-medium",
        isActive && "flec text-violet-400 transition-all"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
