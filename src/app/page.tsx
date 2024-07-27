import { HeroCard } from "@/components/hero-card";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen dark:bg-black bg-white text-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Navbar />
      <HeroCard />
    </main>
  );
}
