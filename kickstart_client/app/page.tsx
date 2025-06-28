import Image from "next/image";
import Hero from "./(global_components)/Hero";
import Frameworks from "./(global_components)/Frameworks";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <p className="text-2xl font-semibold text-center">Main frameworks</p>
      <Frameworks />
    </div>
  );
}
