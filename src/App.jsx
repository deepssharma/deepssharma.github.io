import ParticleBackground from './components/ParticleBackground';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
