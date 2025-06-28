import Image from "next/image";
import Link from "next/link";
import CopyInput from "./CopyInput";

export default function Hero() {
  return (
    <div className="flex justify-between gap-5 items-center">
      <div className="flex-3/5 space-y-5">
        <h1 className="text-5xl font-bold">
          <span className="text-violet-500">Kickstart JS Uzbekistan</span> Open
          source Startup Template generator with Authentication
        </h1>
        <p className="text-lg">
          Server and Client ready app template with Multi provider
          authentication with{" "}
          <span className="font-semibold">Github and Google</span>
        </p>
        <div className="flex gap-5">
          <Link
            href={"docs"}
            className="py-3 px-4 bg-violet-600 font-semibold rounded-xl"
          >
            Get started
          </Link>{" "}
          <CopyInput command="kickstart new blogapp" />
        </div>
      </div>
      <div className="flex-2/5 flex justify-center items-center">
        <Image
          src={"/images/hero.svg"}
          alt="kickstart js uz hero image"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
