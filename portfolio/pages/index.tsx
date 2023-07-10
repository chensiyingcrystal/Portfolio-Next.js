import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { NextPage } from "next";
import Experience from "@/components/Experience";


const Home: NextPage = () => {
  return (
    <div className="text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skill */}
      {/* <section id="skill" className="snap-center">
        <Skill />
      </section> */}

      {/* Projects */}
      {/* <section id="projects" className="snap-center">
        <Projects />
      </section> */}

      {/* Contact */}

    </div>

  )
};

export default Home;
