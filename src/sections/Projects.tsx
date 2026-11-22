import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Project } from '@/data/projects';
import ProjectDrawer from '@/components/ProjectDrawer';

/** The disk shelf: each project is a floppy disk; clicking one opens its drawer. */
export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section className="vp-shelfwrap vp-g" id="work" aria-labelledby="work-title">
      <div className="vp-head">
        <h2 id="work-title">
          The disk shelf <em>(my projects)</em>
        </h2>
        <p>click a disk to load it · scroll sideways →</p>
      </div>
      <ul className="vp-shelf">
        {projects.map((p, i) => (
          <motion.li
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 170, damping: 18, delay: i * 0.07 }}
          >
            <button className="vp-disk" onClick={() => setOpen(p)} aria-describedby={`disk-${p.slug}`}>
              <div className="vp-fl" style={{ background: p.color }} aria-hidden>
                <div className="vp-sh" />
                <div className="vp-lb">
                  <small>
                    disk 0{i + 1} · {p.year}
                  </small>
                  <b>{p.label}</b>
                  <small>{p.tag}</small>
                </div>
              </div>
              <span className="vp-meta">{p.name} ↗</span>
            </button>
            {/* readable by search engines and screen readers without opening the drawer */}
            <p id={`disk-${p.slug}`} className="vp-sr">
              {p.description} Built with {p.stack.join(', ')}.
            </p>
          </motion.li>
        ))}
      </ul>
      <div className="vp-plank" aria-hidden />
      <AnimatePresence>{open && <ProjectDrawer project={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
