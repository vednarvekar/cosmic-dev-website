import Intro from '@/sections/Intro';
import Nav from '@/sections/Nav';
import Desk from '@/sections/Desk';
import Manifesto from '@/sections/Manifesto';
import Projects from '@/sections/Projects';
import About from '@/sections/About';
import Contact, { Footer } from '@/sections/Contact';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function Home() {
  usePageMeta({ path: '/' });

  return (
    <div className="vp">
      <a className="vp-skip" href="#work">
        Skip to projects
      </a>
      <Intro />
      <Nav />
      <main>
        <Desk />
        <Manifesto />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
