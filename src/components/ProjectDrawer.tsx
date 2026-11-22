import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

type Props = { project: Project; onClose: () => void };

/** Slide-in panel with a project's details. Render inside <AnimatePresence>. */
export default function ProjectDrawer({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const href = project.githubUrl ?? `/under-development?project=${encodeURIComponent(project.name)}`;

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
        <button className="vp-x" onClick={onClose} aria-label="Close project details" autoFocus>
          ✕
        </button>
        <div className="vp-eyebrow">
          {project.tag} · {project.year}
        </div>
        <h3>{project.name}</h3>
        <pre className="vp-shot" aria-hidden>
          {project.preview}
        </pre>
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
          href={href}
          target={project.githubUrl ? '_blank' : undefined}
          rel={project.githubUrl ? 'noopener noreferrer' : undefined}
        >
          {project.githubUrl ? 'View on GitHub ↗' : 'Coming soon ↗'}
        </a>
      </motion.aside>
    </>
  );
}
