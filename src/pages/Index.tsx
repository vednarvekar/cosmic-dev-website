import '@/styles/portfolio.css';
import BootGate from '@/components/portfolio/BootGate';
import Desk from '@/components/portfolio/Desk';
import Manifesto from '@/components/portfolio/Manifesto';
import DiskShelf from '@/components/portfolio/DiskShelf';
import { Contact, Life, Nav } from '@/components/portfolio/LifeAndContact';

const Index = () => (
  <div className="vp">
    <BootGate />
    <Nav />
    <main>
      <Desk />
      <Manifesto />
      <DiskShelf />
      <Life />
      <Contact />
    </main>
  </div>
);

export default Index;
