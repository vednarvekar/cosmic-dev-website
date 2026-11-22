import '@/styles/portfolio.css';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

type UnderDevelopmentPageProps = {
  projectName?: string;
};

const WIP_LOG = [
  'wip: core pipeline working locally',
  'wip: writing tests',
  'todo: docs + demo video',
];

/** A project that's still on the bench: its floppy disk mid-write, a sticky note and a WIP commit log. */
const UnderDevelopmentPage = ({ projectName = 'This project' }: UnderDevelopmentPageProps) => {
  const project = projects.find((p) => p.name === projectName || p.slug === projectName);
  const label = project?.label ?? projectName.toLowerCase().replace(/\s+/g, '-');
  const color = project?.color ?? 'var(--vp-yellow)';

  return (
    <div className="vp">
      <main className="vp-status vp-g">
        <a className="vp-back" href="/#work">← back to the shelf</a>

        <div className="vp-status-grid">
          <motion.div
            className="vp-wip-disk"
            initial={{ opacity: 0, y: 40, rotate: -12 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
          >
            <div className="vp-fl" style={{ background: color }}>
              <div className="vp-sh vp-sh-busy" />
              <div className="vp-lb">
                <small>disk · writing…</small>
                <b>{label}</b>
                <small>{project?.tag ?? 'in progress'}</small>
              </div>
            </div>
            <div className="vp-write">
              <span>writing to disk</span>
              <div className="vp-progress vp-progress-light">
                <i className="vp-write-bar" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="vp-status-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="vp-hi">still on the workbench</span>
            <h1>
              {project?.name ?? projectName} is <em>under construction</em>
            </h1>
            {project && <p>{project.description}</p>}

            <div className="vp-sticky vp-status-note" style={{ background: 'var(--vp-pink)' }}>
              <small>note to visitors</small>
              I'm still building this one. Check back soon, or ping me if you want an early look.
            </div>

            <div className="vp-term vp-status-term">
              <div className="vp-tb">
                <i />
                <i />
                <i />
              </div>
              <pre>
                <b>~$</b> git log --oneline{'\n'}
                {WIP_LOG.map((l, i) => `${(0xa3f1 + i * 997).toString(16)} ${l}`).join('\n')}
              </pre>
            </div>

            <div className="vp-status-actions">
              <a className="vp-go" href="/#work">See finished projects</a>
              <a className="vp-ghost" href="https://github.com/vednarvekar" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default UnderDevelopmentPage;
