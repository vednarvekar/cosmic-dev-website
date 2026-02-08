import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const codeLines = [
  { lineNum: 1, content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">developer</span> <span className="syntax-keyword">=</span> {'{'}</> },
  { lineNum: 2, content: <>&nbsp;&nbsp;<span className="syntax-string">name</span>: <span className="syntax-string">"Your Name"</span>,</> },
  { lineNum: 3, content: <>&nbsp;&nbsp;<span className="syntax-string">title</span>: <span className="syntax-string">"Software Engineer"</span>,</> },
  { lineNum: 4, content: <>&nbsp;&nbsp;<span className="syntax-string">location</span>: <span className="syntax-string">"Earth 🌍"</span>,</> },
  { lineNum: 5, content: <></> },
  { lineNum: 6, content: <>&nbsp;&nbsp;<span className="syntax-comment">// What drives me</span></> },
  { lineNum: 7, content: <>&nbsp;&nbsp;<span className="syntax-string">passion</span>: <span className="syntax-string">"Building scalable solutions"</span>,</> },
  { lineNum: 8, content: <>&nbsp;&nbsp;<span className="syntax-string">focus</span>: <span className="syntax-string">"Clean code & great UX"</span>,</> },
  { lineNum: 9, content: <></> },
  { lineNum: 10, content: <>&nbsp;&nbsp;<span className="syntax-comment">// My journey</span></> },
  { lineNum: 11, content: <>&nbsp;&nbsp;<span className="syntax-string">experience</span>: <span className="syntax-number">5</span><span className="syntax-keyword">+</span> <span className="syntax-string">years</span>,</> },
  { lineNum: 12, content: <>&nbsp;&nbsp;<span className="syntax-string">projects</span>: <span className="syntax-number">50</span><span className="syntax-keyword">+</span> <span className="syntax-string">shipped</span>,</> },
  { lineNum: 13, content: <>&nbsp;&nbsp;<span className="syntax-string">coffee</span>: <span className="syntax-number">∞</span> <span className="syntax-string">cups</span>,</> },
  { lineNum: 14, content: <></> },
  { lineNum: 15, content: <>&nbsp;&nbsp;<span className="syntax-function">code</span>: <span className="syntax-keyword">() =&gt;</span> {'{'}</> },
  { lineNum: 16, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-keyword">return</span> <span className="syntax-string">"Something awesome"</span>;</> },
  { lineNum: 17, content: <>&nbsp;&nbsp;{'}'}</> },
  { lineNum: 18, content: <>{'};'}</> },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-mono text-2xl md:text-3xl mb-8 text-center">
            <span className="text-syntax-purple">function</span>{' '}
            <span className="text-syntax-function">aboutMe</span>
            <span className="text-syntax-yellow">()</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-4 text-sm text-muted-foreground font-mono">about.ts</span>
              </div>

              <div className="p-4 font-mono text-sm overflow-x-auto">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={line.lineNum}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex"
                  >
                    <span className="line-number">{line.lineNum}</span>
                    <span>{line.content}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 text-center text-muted-foreground font-mono text-sm"
            >
              <span className="text-syntax-comment">// Hover over the terminal to explore more...</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
