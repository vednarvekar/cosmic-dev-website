import { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

// Words wrapped in *asterisks* render as serif lime accents.
const TEXT =
  'I build the *quiet* machinery behind products: pipelines that onboard a client in one run, platforms that catch bad code before it merges, and *AI agents* that find the right answer and prove it.';

const words = TEXT.match(/\*[^*]+\*|\S+/g) ?? [];

export default function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] });
  const [lit, setLit] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (p) => setLit(Math.round(p * words.length)));

  return (
    <section className="vp-dark">
      <div className="vp-marq" aria-hidden>
        <div>Ships to prod ✦ trains the models ✦ ships to prod ✦ trains the models ✦</div>
        <div>Ships to prod ✦ trains the models ✦ ships to prod ✦ trains the models ✦</div>
      </div>
      <p className="vp-manifesto vp-g" ref={ref} aria-label={TEXT.replace(/\*/g, '')}>
        {words.map((w, i) => (
          <span key={i} className={`vp-w${i < lit ? ' on' : ''}`} aria-hidden>
            {w.startsWith('*') ? <em>{w.slice(1, -1)}</em> : w}{' '}
          </span>
        ))}
      </p>
    </section>
  );
}
