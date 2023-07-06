import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { NextPage } from "next"


const Home: NextPage = () => {
  return (
    <div className="text-white h-screen">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />

      </section>

      {/* About me */}

      {/* Experience */}

      {/* Skill */}

      {/* Projects */}

      {/* Contact */}
    </div>

  )
};

export default Home;
