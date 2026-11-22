import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const LINES = [
  '> booting ved.exe …',
  '> loading backend modules ✓',
  '> warming up the GPUs ✓',
  '> brewing coffee ✓',
];

const KEY = 'ved-booted';
const LINE_MS = 320;
const TITLE_MS = 1100; // how long "entering Ved's universe" holds before the reveal

type Phase = 'boot' | 'enter' | 'done';

function alreadyBooted() {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

/** Auto-playing intro: boot log -> "entering Ved's universe" -> iris reveal of the desk. Any click or key skips it. */
export default function BootGate() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>(() => (alreadyBooted() ? 'done' : 'boot'));
  const [shown, setShown] = useState(0);

  const finish = () => {
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* private mode: intro just plays again next visit */
    }
    setPhase('done');
  };

  // type the boot log, then switch to the title
  useEffect(() => {
    if (phase !== 'boot') return;
    if (shown < LINES.length) {
      const t = setTimeout(() => setShown((n) => n + 1), reduce ? 60 : LINE_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase('enter'), 250);
    return () => clearTimeout(t);
  }, [phase, shown, reduce]);

  // hold the title, then reveal the site
  useEffect(() => {
    if (phase !== 'enter') return;
    const t = setTimeout(finish, reduce ? 400 : TITLE_MS);
    return () => clearTimeout(t);
  }, [phase, reduce]);

  // lock scroll while playing; any key or click skips
  useEffect(() => {
    if (phase === 'done') return;
    document.body.style.overflow = 'hidden';
    const skip = () => finish();
    window.addEventListener('keydown', skip);
    return () => {
      window.removeEventListener('keydown', skip);
      document.body.style.overflow = '';
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="vp-gate"
          onClick={finish}
          initial={{ clipPath: 'circle(150% at 50% 50%)' }}
          exit={{ clipPath: 'circle(0% at 50% 50%)' }}
          transition={{ duration: reduce ? 0.2 : 0.9, ease: [0.8, 0, 0.2, 1] }}
        >
          <AnimatePresence mode="wait">
            {phase === 'boot' ? (
              <motion.pre
                key="boot"
                className="vp-boot"
                exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                transition={{ duration: 0.25 }}
              >
                {LINES.slice(0, shown).join('\n')}
                <span className="vp-caret">▍</span>
              </motion.pre>
            ) : (
              <motion.div
                key="enter"
                className="vp-enter"
                initial={{ opacity: 0, scale: 0.92, letterSpacing: '0.4em' }}
                animate={{ opacity: 1, scale: 1, letterSpacing: '-0.02em' }}
                exit={{ opacity: 0, scale: 1.6 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <span>entering</span>
                <strong>
                  Ved's <em>universe</em>
                </strong>
              </motion.div>
            )}
          </AnimatePresence>
          <span className="vp-gate-skip">click or press any key to skip</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
