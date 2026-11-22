import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LINES = [
  '> booting ved.exe …',
  '> loading backend modules ✓',
  '> warming up the GPUs ✓',
  '> brewing coffee ✓',
  '> ready.',
];

const KEY = 'ved-booted';

function alreadyBooted() {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

export default function BootGate() {
  const [open, setOpen] = useState(() => !alreadyBooted());
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const t = setInterval(() => setShown((n) => (n >= LINES.length ? n : n + 1)), 260);
    const onKey = (e: KeyboardEvent) => e.key === 'Enter' && enter();
    window.addEventListener('keydown', onKey);
    return () => {
      clearInterval(t);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  function enter() {
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* private mode: gate just shows again next visit */
    }
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="vp-gate"
          initial={{ clipPath: 'circle(150% at 50% 50%)' }}
          exit={{ clipPath: 'circle(0% at 50% 50%)' }}
          transition={{ duration: 0.8, ease: [0.8, 0, 0.2, 1] }}
        >
          <div>
            <pre>{LINES.slice(0, shown).join('\n')}</pre>
            <button onClick={enter} autoFocus>
              PRESS ENTER ↵
            </button>
            <button className="vp-gate-skip" onClick={enter}>
              skip intro
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
