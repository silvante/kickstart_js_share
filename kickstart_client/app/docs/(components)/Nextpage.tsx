import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function NextPage({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <div className="w-full flex justify-end items-center">
      <div className="p-5 space-y-2 rounded-xl border border-white/10">
        <h4 className="text-xl font-semibold">{title}</h4>
        <Link href={url} className="flex items-center gap-2 text-violet-400">
          Move to next page <MoveRight />
        </Link>
      </div>
    </div>
  );
}
