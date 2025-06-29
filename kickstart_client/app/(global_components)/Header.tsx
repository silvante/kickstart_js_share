import Link from "next/link";
import Logotype from "./Logotype";
import { Github } from "lucide-react";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="border-b w-full border-white/10 sticky top-0 left-0 right-0 z-50 base_bg">
      <nav className="mx-auto header_width py-4 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Logotype />{" "}
          <p>
            by{" "}
            <Link
              href={"https://www.xamidov.uz"}
              target="_blanck"
              className="font-bold"
            >
              Mardonbek Khamidov
            </Link>
          </p>
        </div>
        <div className="flex gap-7 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/docs">Docs</NavLink>
          <Link
            href={"https://www.xamidov.uz/contacts"}
            target="_blanck"
            className="py-3 px-4 bg-violet-600 font-semibold rounded-xl"
          >
            Contact me
          </Link>
          <Link
            href={"https://github.com/silvante/kickstart_js"}
            target="_blanck"
          >
            <Github />
          </Link>
        </div>
      </nav>
    </header>
  );
}
