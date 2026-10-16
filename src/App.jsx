import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="relative overflow-x-clip">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_-10%,rgba(167,139,250,0.22),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_10%,rgba(92,225,230,0.07),transparent)]" />
      </div>

      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-signal px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Navigation />

      <main id="main">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Technologies />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
