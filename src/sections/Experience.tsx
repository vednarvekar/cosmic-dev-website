import { motion } from 'framer-motion';
import { career } from '@/data/experience';
import { links } from '@/data/site';

/** Career log: experience, education and certs rendered as `git log --career`. */
export default function Experience() {
  return (
    <section className="vp-career vp-g" id="experience" aria-labelledby="career-title">
      <div className="vp-head">
        <h2 id="career-title">
          Career <em>log</em>
        </h2>
        <a className="vp-go" href={links.resume} target="_blank" rel="noopener">
          Download resume ↗
        </a>
      </div>

      <motion.div
        className="vp-log"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      >
        <div className="vp-tb" aria-hidden>
          <i />
          <i />
          <i />
          <span>~/ved — zsh</span>
        </div>
        <div className="vp-log-body">
          <p className="vp-log-cmd" aria-hidden>
            <b>~$</b> git log --career
          </p>
          <ol className="vp-commits">
            {career.map((c) => (
              <li key={c.hash} className={`vp-commit vp-commit-${c.type}`}>
                <span className="vp-node" aria-hidden />
                <p className="vp-commit-meta">
                  <span className="vp-hash">commit {c.hash}</span>
                  {c.current && <span className="vp-headref">(HEAD -&gt; now)</span>}
                  <span className="vp-when">{c.when}</span>
                </p>
                <h3>
                  <span className="vp-type">
                    {c.type}({c.scope}):
                  </span>{' '}
                  {c.title} <span className="vp-org">@ {c.org}</span>
                </h3>
                <ul className="vp-points">
                  {c.points.map((p) => (
                    <li key={p.lead}>
                      <strong>{p.lead}</strong>
                      {p.rest}
                    </li>
                  ))}
                </ul>
                {c.tags && (
                  <ul className="vp-tags" aria-label="Tools">
                    {c.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
          <p className="vp-log-end" aria-hidden>
            <b>~$</b> <span className="vp-caret">▍</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
