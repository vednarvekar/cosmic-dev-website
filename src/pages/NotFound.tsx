import '@/styles/portfolio.css';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

/** 404: a page that fell off the desk. */
const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="vp">
      <main className="vp-status vp-404 vp-g">
        <a className="vp-back" href="/">← back to the desk</a>

        <motion.h1
          className="vp-404-num"
          initial={{ opacity: 0, y: 40, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '-0.05em' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          4<em>0</em>4
        </motion.h1>

        <div className="vp-404-row">
          <motion.div
            className="vp-sticky"
            style={{ background: 'var(--vp-yellow)' }}
            initial={{ opacity: 0, rotate: 18, y: -60 }}
            animate={{ opacity: 1, rotate: -5, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 9, delay: 0.3 }}
          >
            <small>oops</small>
            this page fell off the desk. even I can't find it.
          </motion.div>

          <motion.div
            className="vp-term"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="vp-tb">
              <i />
              <i />
              <i />
            </div>
            <pre>
              <b>~$</b> cd {pathname}
              {'\n'}cd: no such file or directory{'\n'}
              <b>~$</b> cd ~ <span className="vp-caret">▍</span>
            </pre>
          </motion.div>
        </div>

        <div className="vp-status-actions">
          <a className="vp-go" href="/">Take me home</a>
          <a className="vp-ghost" href="/#work">See my projects</a>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
