import Image from "next/image";
import Hero from "@/components/hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-[1200px] w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <FaHome/>},
          {name: "About", link: "#about", icon: <FaHome/>}
        ]} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
