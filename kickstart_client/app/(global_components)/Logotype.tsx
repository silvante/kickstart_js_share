import Image from "next/image";
import Link from "next/link";

export default function Logotype() {
  return (
    <Link href={"/"} className="inline-block">
      <Image
        src={"/icons/logo.svg"}
        alt="Kickstart js uz, logotype"
        width={158}
        height={30}
      />
    </Link>
  );
}
