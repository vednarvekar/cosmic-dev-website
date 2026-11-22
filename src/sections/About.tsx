import { useState } from 'react';
import { motion } from 'framer-motion';
import { drivers, f1, rides, site, type Driver } from '@/data/site';

const POLAROIDS = [
  { ph: 'photo · desk setup', cap: 'where it happens' },
  { ph: 'photo · out on the bike', cap: 'weekend mode' },
  { ph: 'photo · race day', cap: 'sundays = F1' },
];

const pop = (i: number) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { type: 'spring' as const, stiffness: 150, damping: 16, delay: i * 0.1 },
});

function DriverCard({ d, i }: { d: Driver; i: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.li className="vp-card-slot" {...pop(i + 1)}>
      <button
        className={`vp-card${flipped ? ' flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={`${d.name}, ${d.team}. ${d.back}`}
        style={{ ['--team' as string]: d.color }}
      >
        <span className="vp-card-front" aria-hidden>
          <span className="vp-card-num">{d.number}</span>
          <span className="vp-card-name">{d.name}</span>
          <span className="vp-card-team">{d.team}</span>
          <span className="vp-card-note">{d.front}</span>
        </span>
        <span className="vp-card-back" aria-hidden>
          <small>why I root for him</small>
          {d.back}
        </span>
      </button>
    </motion.li>
  );
}

/** "Off the clock": who Ved is outside code. Polaroids, fact chips, and an F1 + rides pinboard. */
export default function About() {
  return (
    <section className="vp-about vp-g" id="about" aria-labelledby="about-title">
      <div className="vp-life">
        <div className="vp-pile" aria-hidden>
          {POLAROIDS.map((p, i) => (
            <motion.div key={p.cap} className="vp-pol" {...pop(i)}>
              {/* TODO(ved): swap placeholders for real photos in /public */}
              <div className="vp-ph">{p.ph}</div>
              <span>{p.cap}</span>
            </motion.div>
          ))}
        </div>
        <div>
          <h2 id="about-title">
            Off the terminal, I'm <em>just Ved.</em>
          </h2>
          <p>
            I got into this because I wanted to know why things break. These days I spend my time on systems that
            don't, and on models that say when they're unsure.
          </p>
          <p>
            When I'm not shipping code, I'm watching F1 on a Sunday or out on the bike chasing an open road. Both
            teach the same thing: small margins win.
          </p>
          <ul className="vp-facts">
            <li>☕ runs on coffee</li>
            <li>🏍️ rides bikes</li>
            <li>🏎️ F1 every Sunday</li>
            <li>🎧 lo-fi while coding</li>
            <li>🇮🇳 {site.location}</li>
          </ul>
        </div>
      </div>

      <div className="vp-board">
        <h3 className="vp-board-title">
          Sundays are for <em>F1</em>
        </h3>
        <ul className="vp-board-row">
          <motion.li className="vp-pass" {...pop(0)}>
            <span className="vp-lanyard" aria-hidden />
            <span className="vp-pass-card">
              <small>paddock pass · all access</small>
              <b>{site.name}</b>
              <span className="vp-pass-row">
                <span>team</span>
                <strong>{f1.team}</strong>
              </span>
              {f1.fanSince && (
                <span className="vp-pass-row">
                  <span>fan since</span>
                  <strong>{f1.fanSince}</strong>
                </span>
              )}
              {f1.favouriteMoment && (
                <span className="vp-pass-row">
                  <span>best moment</span>
                  <strong>{f1.favouriteMoment}</strong>
                </span>
              )}
              <span className="vp-pass-bar" aria-hidden />
            </span>
          </motion.li>
          {drivers.map((d, i) => (
            <DriverCard key={d.name} d={d} i={i} />
          ))}
        </ul>
        <p className="vp-board-hint">tap a card to flip it</p>

        <motion.div className="vp-ridelog" {...pop(1)}>
          <h3>
            ride log <span aria-hidden>🏍️</span>
          </h3>
          <svg className="vp-route" viewBox="0 0 220 90" aria-hidden>
            <path d="M10 70 C 40 20, 70 85, 100 45 S 150 10, 170 40 S 200 75, 210 30" />
            <circle cx="10" cy="70" r="5" />
            <circle cx="210" cy="30" r="5" />
          </svg>
          <dl>
            {rides.bike && (
              <>
                <dt>bike</dt>
                <dd>{rides.bike}</dd>
              </>
            )}
            {rides.favouriteRoute && (
              <>
                <dt>fav route</dt>
                <dd>{rides.favouriteRoute}</dd>
              </>
            )}
            {rides.kmLogged && (
              <>
                <dt>km logged</dt>
                <dd>{rides.kmLogged}</dd>
              </>
            )}
          </dl>
          <ul>
            {rides.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
