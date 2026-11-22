import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Project } from '@/data/projects';

function Drawer({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      <motion.div className="vp-scrim" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <motion.aside
        className="vp-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        initial={{ x: '105%' }}
        animate={{ x: 0 }}
        exit={{ x: '105%' }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
      >
        <button className="vp-x" onClick={onClose} aria-label="Close" autoFocus>
          ✕
        </button>
        <div className="vp-eyebrow">
          {project.tag} · {project.year}
        </div>
        <h3>{project.name}</h3>
        <pre className="vp-shot">{project.preview}</pre>
        <dl>
          <dt>What</dt>
          <dd>{project.description}</dd>
          <dt>Stack</dt>
          <dd>{project.stack.join(' · ')}</dd>
          <dt>Impact</dt>
          <dd>{project.impact}</dd>
        </dl>
        <a
          className="vp-go"
          href={project.githubUrl ?? `/under-development?project=${encodeURIComponent(project.name)}`}
          target={project.githubUrl ? '_blank' : undefined}
          rel="noopener noreferrer"
        >
          {project.githubUrl ? 'View on GitHub ↗' : 'Coming soon ↗'}
        </a>
      </motion.aside>
    </>
  );
}

export default function DiskShelf() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section className="vp-shelfwrap vp-g" id="work">
      <div className="vp-head">
        <h2>
          The disk shelf <em>(my projects)</em>
        </h2>
        <p>click a disk to load it · scroll sideways →</p>
      </div>
      <div className="vp-shelf">
        {projects.map((p, i) => (
          <motion.button
            key={p.slug}
            className="vp-disk"
            onClick={() => setOpen(p)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 170, damping: 18, delay: i * 0.07 }}
          >
            <div className="vp-fl" style={{ background: p.color }}>
              <div className="vp-sh" />
              <div className="vp-lb">
                <small>
                  disk 0{i + 1} · {p.year}
                </small>
                <b>{p.label}</b>
                <small>{p.tag}</small>
              </div>
            </div>
            <div className="vp-meta">{p.name} ↗</div>
          </motion.button>
        ))}
      </div>
      <div className="vp-plank" />
      <AnimatePresence>{open && <Drawer project={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
