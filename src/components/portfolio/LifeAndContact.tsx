import { motion } from 'framer-motion';
import { links } from '@/data/projects';

export function Life() {
  const pols = [
    { ph: 'photo · desk setup', cap: 'where it happens' },
    { ph: 'photo · you outdoors', cap: 'touching grass' },
    { ph: 'photo · hobby', cap: 'off the clock' },
  ];
  return (
    <section className="vp-life vp-g" id="life">
      <div className="vp-pile">
        {pols.map((p, i) => (
          <motion.div
            key={p.cap}
            className="vp-pol"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 140, damping: 16, delay: i * 0.12 }}
          >
            {/* TODO(ved): swap placeholders for real photos */}
            <div className="vp-ph">{p.ph}</div>
            <span>{p.cap}</span>
          </motion.div>
        ))}
      </div>
      <div>
        <h2>
          Off the terminal, I'm <em>just Ved.</em>
        </h2>
        <p>
          I got into this because I wanted to know why things break. These days I spend my time on systems that
          don't, and on models that say when they're unsure.
        </p>
        {/* TODO(ved): add a line about hobbies and what you're learning */}
        <div className="vp-facts">
          <span>☕ runs on coffee</span>
          <span>🏍️ rides bikes</span>
          <span>🎧 lo-fi while coding</span>
          <span>🇮🇳 India</span>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <>
      <section className="vp-contact vp-g" id="contact">
        <div>
          <h2>
            Let's build
            <br />
            <em>something</em> real.
          </h2>
          <div className="vp-links">
            {links.email && <a href={`mailto:${links.email}`}>email ↗</a>}
            <a href={links.github} target="_blank" rel="noopener noreferrer">github ↗</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">linkedin ↗</a>
            <a href={links.x} target="_blank" rel="noopener noreferrer">x ↗</a>
            <a href={links.resume} target="_blank" rel="noopener noreferrer">resume.pdf ↗</a>
          </div>
        </div>
        <div className="vp-receipt">
          <h4>VED.DEV STORE</h4>
          <div className="vp-c">order #2026 · thank you!</div>
          <div className="vp-r"><span>backend engineering</span><span>x1</span></div>
          <div className="vp-r"><span>devops &amp; infra</span><span>x1</span></div>
          <div className="vp-r"><span>ai/ml systems</span><span>x1</span></div>
          <div className="vp-r"><span>full-stack, when needed</span><span>x1</span></div>
          <div className="vp-r"><span>shipped projects</span><span>x6</span></div>
          <div className="vp-r"><span>coffee consumed</span><span>∞</span></div>
          <div className="vp-r vp-tot"><span>TOTAL</span><span>the ultimate package</span></div>
          <div className="vp-bar" />
        </div>
      </section>
      <footer className="vp-footer">designed &amp; built by ved · © {new Date().getFullYear()}</footer>
    </>
  );
}

export function Nav() {
  return (
    <nav className="vp-nav">
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#life">Life</a>
      <a className="vp-cta" href="#contact">Say hi</a>
    </nav>
  );
}
