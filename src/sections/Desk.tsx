import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import StartLights from '@/components/StartLights';

type ObjProps = {
  children: ReactNode;
  className: string;
  style: CSSProperties;
  rotate?: number;
  hideOnMobile?: boolean;
  deskRef: React.RefObject<HTMLDivElement>;
  delay: number;
};

// Drag moves the object's left/top (clamped to the desk), so positions stay put on resize.
function DeskObject({ children, className, style, rotate = 0, hideOnMobile, deskRef, delay }: ObjProps) {
  const ref = useRef<HTMLDivElement>(null);
  const start = useRef<{ x: number; y: number; l: number; t: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [entered, setEntered] = useState(false);

  const onDown = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY, l: el.offsetLeft, t: el.offsetTop };
    setDragging(true);
  };
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current, desk = deskRef.current, s = start.current;
    if (!el || !desk || !s) return;
    const maxL = desk.clientWidth - el.offsetWidth * 0.5;
    const maxT = desk.clientHeight - el.offsetHeight * 0.5;
    const l = Math.min(maxL, Math.max(-el.offsetWidth * 0.5, s.l + e.clientX - s.x));
    const t = Math.min(maxT, Math.max(0, s.t + e.clientY - s.y));
    el.style.left = `${l}px`;
    el.style.top = `${t}px`;
  };
  const onUp = () => {
    start.current = null;
    setDragging(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`vp-obj ${className}${hideOnMobile ? ' vp-hm' : ''}`}
      style={{ ...style, zIndex: dragging ? 9 : undefined }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      initial={{ opacity: 0, y: 40, rotate: rotate - 10, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: dragging ? 0 : rotate,
        scale: dragging ? 1.06 : 1,
        boxShadow: dragging ? '0 18px 40px rgba(0,0,0,.22)' : undefined,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: entered ? 0 : delay }}
      onAnimationComplete={() => setEntered(true)}
    >
      {children}
    </motion.div>
  );
}

function Keycaps() {
  const [hit, setHit] = useState<string | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toUpperCase();
      if ('VED'.includes(k) && k.length === 1) {
        setHit(k);
        setTimeout(() => setHit(null), 120);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <div className="vp-keys">
      {['V', 'E', 'D'].map((k) => (
        <div key={k} className={`vp-key${hit === k ? ' hit' : ''}`}>
          {k}
        </div>
      ))}
    </div>
  );
}

export default function Desk() {
  const deskRef = useRef<HTMLDivElement>(null);

  return (
    <section className="vp-desk vp-g" id="home" ref={deskRef}>
      <motion.div
        className="vp-hello"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <span className="vp-hi">hey there, I'm</span>
        <h1>
          Ved <em>Narvekar</em>
        </h1>
        <p>
          I build <mark>infra that doesn't break</mark> and AI that knows when it's wrong. DevOps &amp; AI
          engineer from India.
        </p>
      </motion.div>

      <DeskObject deskRef={deskRef} delay={0.2} className="vp-pol" rotate={-7} style={{ left: '7%', top: '16%' }}>
        {/* TODO(ved): replace with <img src="/me.jpg" alt="Ved" /> */}
        <div className="vp-ph">your photo here</div>
        <span>me, probably debugging</span>
      </DeskObject>

      <DeskObject deskRef={deskRef} delay={0.3} className="vp-sticky" rotate={5} style={{ left: 'min(72%, calc(100% - 160px))', top: '14%', background: 'var(--vp-yellow)' }}>
        <small>status</small>open to devops &amp; AI roles ✦
      </DeskObject>

      <DeskObject deskRef={deskRef} delay={0.4} hideOnMobile className="vp-sticky" rotate={-4} style={{ left: '76%', top: '58%', background: 'var(--vp-pink)' }}>
        <small>currently</small>teaching an agent to fix its own bugs
      </DeskObject>

      <DeskObject deskRef={deskRef} delay={0.5} className="vp-term" rotate={2} style={{ left: '5%', top: '62%' }}>
        <div className="vp-tb">
          <i />
          <i />
          <i />
        </div>
        <pre>
          <b>~$</b> whoami{'\n'}devops &amp; ai engineer{'\n'}
          <b>~$</b> cat stack.txt{'\n'}docker · k8s · nginx · ci/cd{'\n'}node · go · python · pytorch
        </pre>
      </DeskObject>

      <DeskObject deskRef={deskRef} delay={0.6} hideOnMobile className="" rotate={-3} style={{ left: '40%', top: '78%' }}>
        <Keycaps />
      </DeskObject>

      <DeskObject deskRef={deskRef} delay={0.7} hideOnMobile className="vp-mug" style={{ left: '62%', top: '8%' }}>
        <span className="vp-mug-note">fuel</span>
      </DeskObject>

      <DeskObject deskRef={deskRef} delay={0.8} hideOnMobile className="vp-sticky" rotate={-3} style={{ left: '24%', top: '6%', background: 'var(--vp-blue)' }}>
        <small>fun fact</small>my first server crashed at 2am. I'm still here.
      </DeskObject>

      <div className="vp-lights-spot vp-hm">
        <StartLights />
      </div>

      <div className="vp-hint">psst, everything on this desk can be dragged</div>
    </section>
  );
}
