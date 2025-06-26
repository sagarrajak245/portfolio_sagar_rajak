import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Technologies from './components/Technologies';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      {/* Background gradient */}
      <div className="fixed top-0 -z-10 min-h-screen w-full">
        <div className="absolute top-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(150,90,198,0.30),rgba(255,255,255,0))]" />
      </div>

      {/* Navigation (outside scroll container so it's always fixed on top) */}
      <Navigation />

      {/* Scrollable content */}
      <div className="container mx-auto px-8">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Technologies />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="achievements">
          <Achievements />
        </section>


        <section id="timeline">
          <Timeline />
        </section>

        <section id="resume">
          <Resume />
        </section>



        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
