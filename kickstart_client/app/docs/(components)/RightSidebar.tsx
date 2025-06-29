import Image from "next/image";
import Link from "next/link";

export default function RightSidebar() {
  return (
    <aside className="w-72 sticky top-26 space-y-5 hidden">
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
    </aside>
  );
}
