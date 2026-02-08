import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  {
    name: 'React',
    icon: '⚛️',
    version: '^18.3.1',
    description: 'UI Library',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'TypeScript',
    icon: '📘',
    version: '^5.0.0',
    description: 'Type Safety',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    version: '^20.0.0',
    description: 'Runtime',
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    version: '^15.0',
    description: 'Database',
    color: 'from-blue-400 to-indigo-600',
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-mono text-2xl md:text-3xl mb-4 text-center">
            <span className="text-syntax-cyan">npm</span>{' '}
            <span className="text-syntax-green">install</span>{' '}
            <span className="text-foreground">my-skills</span>
          </h2>
          
          <p className="text-center text-muted-foreground font-mono text-sm mb-12">
            <span className="text-syntax-comment">// Dependencies that power my projects</span>
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Package.json style display */}
            <div className="terminal-window mb-8">
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-4 text-sm text-muted-foreground font-mono">package.json</span>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="text-syntax-comment mb-2">{'{'}</div>
                <div className="ml-4">
                  <span className="text-syntax-string">"dependencies"</span>
                  <span className="text-foreground">: {'{'}</span>
                </div>
                
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="ml-8 py-1"
                  >
                    <span className="text-syntax-green">"{tech.name.toLowerCase()}"</span>
                    <span className="text-foreground">: </span>
                    <span className="text-syntax-string">"{tech.version}"</span>
                    {index < technologies.length - 1 && <span className="text-foreground">,</span>}
                  </motion.div>
                ))}
                
                <div className="ml-4 text-foreground">{'}'}</div>
                <div className="text-syntax-comment">{'}'}</div>
              </div>
            </div>

            {/* Interactive Tech Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 rounded-lg blur-xl transition-opacity duration-300`} />
                  <div className="relative bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <h3 className="font-mono font-bold text-foreground">{tech.name}</h3>
                    <p className="font-mono text-xs text-muted-foreground">{tech.description}</p>
                    <div className="mt-2 font-mono text-xs text-syntax-green">{tech.version}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Terminal Output */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 font-mono text-sm text-center"
            >
              <span className="text-syntax-green">✓</span>
              <span className="text-muted-foreground"> Added 4 packages in 0.42s</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
