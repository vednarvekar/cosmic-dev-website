import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitBranch, Star, ExternalLink, Github } from 'lucide-react';

const projects = [
  // {
  //   name: 'project-alpha',
  //   description: 'A full-stack e-commerce platform with real-time inventory management and payment processing.',
  //   tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  //   stars: 128,
  //   forks: 34,
  //   status: 'production',
  //   demoUrl: '#',
  //   githubUrl: '#',
  // },
  {
    name: 'api-gateway',
    description: 'High-performance API gateway with rate limiting, caching, and authentication middleware.',
    tech: ['TypeScript', 'Redis', 'Docker', 'AWS'],
    // stars: 256,
    // forks: 67,
    status: 'developing',
    demoUrl: '#',
    githubUrl: '#',
  },
  // {
  //   name: 'realtime-dashboard',
  //   description: 'Real-time analytics dashboard with WebSocket connections and interactive data visualization.',
  //   tech: ['React', 'D3.js', 'Socket.io', 'MongoDB'],
  //   stars: 89,
  //   forks: 21,
  //   status: 'active',
  //   demoUrl: '#',
  //   githubUrl: '#',
  // },
  {
    name: 'cli-toolkit',
    description: 'Developer CLI toolkit for automating common development tasks and workflows.',
    tech: ['Node.js', 'Commander', 'Inquirer', 'Chalk'],
    // stars: 445,
    // forks: 112,
    status: 'developing',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'sentinel-oss',
    description: 'Analyzes open-source repositories to help developers tackle issues quickly. ',
    tech: ['Redis', 'TypeScript', 'PostgresSQL', 'Fastify'],
    // stars: 167,
    // forks: 45,
    status: 'stable',
    demoUrl: 'https://sentinel-hosting-api.vercel.app/',
    githubUrl: 'https://github.com/vednarvekar/sentinel-oss-core',
  },
  // {
  //   name: 'mobile-app',
  //   description: 'Cross-platform mobile application with offline-first architecture and push notifications.',
  //   tech: ['React Native', 'TypeScript', 'GraphQL', 'Firebase'],
  //   stars: 167,
  //   forks: 45,
  //   status: 'beta',
  //   demoUrl: '#',
  //   githubUrl: '#',
  // },
    {
    name: 'observability-platform',
    description: 'Backend system that collects logs, metrics, and traces, correlates them per request.',
    tech: ['OpenTelemetry', 'Node.js', 'PostgreSQL', 'Redis Streams'],
    stars: 128,
    forks: 34,
    status: 'developing',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'pixel-image-analyzer',
    description: 'ML trained app (Resnet-18), analyses real and AI generated images.',
    tech: ['Python', 'Node.js', 'Supabase', 'Resnet-18'],
    stars: 89,
    forks: 21,
    status: 'production',
    demoUrl: 'https://pixel-hosting-mu.vercel.app/',
    githubUrl: 'https://github.com/vednarvekar/Pixel',
  },
];

const statusColors: Record<string, string> = {
  production: 'bg-syntax-green/20 text-syntax-green border-syntax-green/30',
  active: 'bg-syntax-blue/20 text-syntax-blue border-syntax-blue/30',
  stable: 'bg-syntax-purple/20 text-syntax-purple border-syntax-purple/30',
  beta: 'bg-syntax-yellow/20 text-syntax-yellow border-syntax-yellow/30',
  developing: 'bg-syntax-red/20 text-syntax-red border-syntax-red/30',
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <h2 className="font-mono text-2xl md:text-3xl mb-4 text-center">
            <span className="text-syntax-cyan">git</span>{' '}
            <span className="text-syntax-green">clone</span>{' '}
            <span className="text-foreground">my-projects</span>
          </h2>
          
          <p className="text-center text-muted-foreground font-mono text-sm mb-12">
            <span className="text-syntax-comment">// Cloning repositories... {projects.length} found</span>
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.2 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group"
              >
                <div className="terminal-window h-full">
                  <div className="terminal-header">
                    <span className="terminal-dot terminal-dot-red" />
                    <span className="terminal-dot terminal-dot-yellow" />
                    <span className="terminal-dot terminal-dot-green" />
                    <span className="ml-4 text-sm text-muted-foreground font-mono truncate">
                      ~/{project.name}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col h-[calc(100%-40px)]">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-mono font-bold text-foreground group-hover:text-syntax-green transition-colors">
                        {project.name}
                      </h3>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded border ${statusColors[project.status]}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2 py-1 bg-secondary rounded text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Stats & Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-terminal-border">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                        <span className="flex items-center gap-1">
                          {/* <Star size={14} className="text-syntax-yellow" /> */}
                          {/* {project.stars} */}
                        </span>
                        <span className="flex items-center gap-1">
                          {/* <GitBranch size={14} className="text-syntax-purple" /> */}
                          {/* {project.forks} */}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl === '#' ? `/under-development?project=${encodeURIComponent(project.name)}` : project.githubUrl}
                          target={project.githubUrl === '#' ? undefined : "_blank"}
                          rel={project.githubUrl === '#' ? undefined : "noopener noreferrer"}
                          // className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          className="p-2 hover:text-syntax-orange transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={project.demoUrl === '#' ? `/under-development?project=${encodeURIComponent(project.name)}` : project.demoUrl}
                          target={project.demoUrl === '#' ? undefined : "_blank"}
                          rel={project.demoUrl === '#' ? undefined : "noopener noreferrer"}
                          // className="p-2 text-muted-foreground hover:text-syntax-green transition-colors"
                          className="p-2  hover:text-syntax-green transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
