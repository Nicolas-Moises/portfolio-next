import { Hero } from "@/components/hero";
import { Header } from "@/components/ui/header";

import { Techs } from "@/components/techs"; 
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Techs />
      <Projects />
    </div>
  )
}
