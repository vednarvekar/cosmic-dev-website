import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const LINES = [
  '> booting ved.exe …',
  '> loading backend modules ✓',
  '> warming up the GPUs ✓',
  '> brewing coffee ✓',
  '> ready.',
];

const KEY = 'ved-booted';
const START_MS = 700; // let the title land before the log starts
const LINE_MS = 520;
const HOLD_MS = 700; // pause on "ready." before the reveal

function alreadyBooted() {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

/** One-screen intro: "entering Ved's universe" with the boot log typing beneath it, then an iris reveal. Any click or key skips it. */
export default function BootGate() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(() => !alreadyBooted());
  const [shown, setShown] = useState(0);
  const total = LINES.length;

  const finish = () => {
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* private mode: intro just plays again next visit */
    }
    setOpen(false);
  };

  // type the log, hold on "ready.", then reveal
  useEffect(() => {
    if (!open) return;
    const step = reduce ? 80 : LINE_MS;
    const t =
      shown < total
        ? setTimeout(() => setShown((n) => n + 1), shown === 0 && !reduce ? START_MS : step)
        : setTimeout(finish, reduce ? 200 : HOLD_MS);
    return () => clearTimeout(t);
  }, [open, shown, total, reduce]);

  // lock scroll while playing; any key skips
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const skip = () => finish();
    window.addEventListener('keydown', skip);
    return () => {
      window.removeEventListener('keydown', skip);
      document.body.style.overflow = '';
    };
  }, [open]);

  const pct = Math.round((shown / total) * 100);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="vp-gate"
          onClick={finish}
          initial={{ clipPath: 'circle(150% at 50% 50%)' }}
          exit={{ clipPath: 'circle(0% at 50% 50%)' }}
          transition={{ duration: reduce ? 0.2 : 0.9, ease: [0.8, 0, 0.2, 1] }}
        >
          <motion.div
            className="vp-intro"
            exit={{ scale: 1.25, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
          >
            <motion.div
              className="vp-enter"
              initial={{ opacity: 0, scale: 0.92, letterSpacing: '0.35em' }}
              animate={{ opacity: 1, scale: 1, letterSpacing: '-0.02em' }}
              transition={{ duration: reduce ? 0 : 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span>entering</span>
              <strong>
                Ved's <em>universe</em>
              </strong>
            </motion.div>

            <pre className="vp-boot" aria-live="polite">
              {LINES.slice(0, shown).join('\n')}
              {shown < total && <span className="vp-caret">▍</span>}
            </pre>

            <div className="vp-progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
              <motion.i animate={{ width: `${pct}%` }} transition={{ duration: 0.4, ease: 'easeOut' }} />
              <b>{String(pct).padStart(3, '0')}%</b>
            </div>
          </motion.div>
          <span className="vp-gate-skip">
            <span className="vp-skip-mouse">click or press any key to skip</span>
            <span className="vp-skip-touch">tap anywhere to skip</span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
