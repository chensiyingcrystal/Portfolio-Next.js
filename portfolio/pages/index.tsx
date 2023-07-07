import About from "@/components/about";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { NextPage } from "next"


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

      {/* Skill */}

      {/* Projects */}

      {/* Contact */}
    </div>

  )
};

export default Home;
