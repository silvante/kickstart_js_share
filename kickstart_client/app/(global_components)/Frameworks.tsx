import Image from "next/image";
import Link from "next/link";

export default function Frameworks() {
  return (
    <div className="w-full flex gap-10 items-center justify-between flex-col md:flex-row">
      <div className="flex-1 bg-black/50 rounded-2xl p-8 flex gap-10 items-center">
        <div>
          <Image
            src={"/images/nest.svg"}
            alt="nest js logo"
            width={180}
            height={180}
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Nest JS</h3>
          <p>
            Pre configured with mailers, JWT, Prisma with PostgreSQL and
            Background Jobs with BullMQ
          </p>
          <Link
            href={"https://nestjs.com/"}
            target="_blanck"
            className="text-violet-500"
          >
            visit website
          </Link>
        </div>
      </div>
      <div className="flex-1 bg-black/50 rounded-2xl p-8 flex gap-10 items-center">
        <div>
          <Image
            src={"/images/next.svg"}
            alt="nest js logo"
            width={180}
            height={180}
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Next JS</h3>
          <p>
            Clean API via axios architecture, pre configured Redux toolkit.
            Root, Authentication and Panel pages.
          </p>
          <Link
            href={"https://nextjs.org/"}
            target="_blanck"
            className="text-violet-500"
          >
            visit website
          </Link>
        </div>
      </div>
    </div>
  );
}
