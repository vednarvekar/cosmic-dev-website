import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type TechItem = {
  name: string
  version: string
  icon: string
  description: string
  color: string
}

type TechSection = {
  category: string
  items: TechItem[]
}

const technologies: TechSection[] = [
  {
    category: 'Core Languages & CS',
    items: [
      { name: 'C++', version: 'C++17', icon: '⚙️', description: 'Systems Programming', color: 'from-indigo-500 to-purple-600' },
      { name: 'JavaScript', version: 'ES2023', icon: '🟨', description: 'Programming Language', color: 'from-yellow-400 to-yellow-600' },
      { name: 'TypeScript', version: '^5.x', icon: '📘', description: 'Typed JavaScript', color: 'from-blue-500 to-blue-700' },
      { name: 'Data Structures & Algorithms', version: 'Core', icon: '🧠', description: 'Problem Solving', color: 'from-rose-500 to-pink-600' },
      // { name: 'Object-Oriented Programming', version: 'Principles', icon: '🧩', description: 'OOP Concepts', color: 'from-fuchsia-500 to-purple-600' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', version: '^18.x', icon: '⚛️', description: 'UI Library', color: 'from-cyan-500 to-blue-500' },
      { name: 'Next.js', version: '^14.x', icon: '▲', description: 'React Framework', color: 'from-neutral-700 to-neutral-900' },
      { name: 'Tailwind CSS', version: '^3.x', icon: '🎨', description: 'Utility-First CSS', color: 'from-cyan-400 to-teal-500' },
      // { name: 'HTML', version: 'HTML5', icon: '📄', description: 'Markup', color: 'from-orange-500 to-red-600' },
      // { name: 'CSS', version: 'CSS3', icon: '🎨', description: 'Styling', color: 'from-blue-400 to-blue-600' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', version: '^20.x', icon: '🟢', description: 'Runtime', color: 'from-green-500 to-green-700' },
      { name: 'Express.js', version: '^4.x', icon: '🚂', description: 'Framework', color: 'from-gray-500 to-gray-700' },
      // { name: 'REST APIs', version: 'v1', icon: '🔗', description: 'API Design', color: 'from-emerald-500 to-teal-600' },
      // { name: 'Authentication & Authorization', version: 'JWT', icon: '🔐', description: 'Access Control', color: 'from-amber-500 to-orange-600' },
      { name: 'Backend System Design', version: 'Foundations', icon: '🏗️', description: 'Scalable Systems', color: 'from-slate-500 to-slate-700' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', version: '^7.x', icon: '🍃', description: 'NoSQL', color: 'from-green-600 to-green-800' },
      { name: 'PostgreSQL', version: '^15.x', icon: '🐘', description: 'Relational', color: 'from-blue-400 to-indigo-600' },
      { name: 'Database Design', version: 'Principles', icon: '🗄️', description: 'Modeling', color: 'from-cyan-600 to-sky-700' },
    ],
  },
  {
    category: 'AI / ML (Learning)',
    items: [
      { name: 'Python', version: '^3.x', icon: '🐍', description: 'For ML', color: 'from-green-500 to-emerald-600' },
      { name: 'Machine Learning', version: 'Foundational', icon: '🤖', description: 'ML Concepts', color: 'from-violet-500 to-purple-700' },
      { name: 'NumPy', version: '^1.x', icon: '📐', description: 'Numerical', color: 'from-sky-500 to-blue-600' },
      { name: 'Pandas', version: '^2.x', icon: '🐼', description: 'Data Analysis', color: 'from-neutral-600 to-neutral-800' },
      { name: 'Scikit-learn', version: '^1.x', icon: '📊', description: 'ML Library', color: 'from-orange-500 to-red-600' },
    ],
  },
  {
    category: 'Tools & Workflow',
    items: [
      { name: 'Git', version: '^2.x', icon: '🌱', description: 'Version Control', color: 'from-orange-500 to-red-500' },
      { name: 'GitHub', version: 'Cloud', icon: '🐙', description: 'Code Hosting', color: 'from-neutral-700 to-neutral-900' },
      { name: 'Linux', version: 'CLI', icon: '🐧', description: 'OS', color: 'from-gray-600 to-gray-800' },
      // { name: 'Postman', version: '^10.x', icon: '📮', description: 'API Testing', color: 'from-orange-400 to-orange-600' },
      { name: 'MERN Stack', version: 'Full Stack', icon: '🧱', description: 'Mongo + Express + React + Node', color: 'from-emerald-500 to-teal-700' },
    ],
  },
]



const TechStackSection = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stack" className="min-h-screen py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          <h2 className="font-mono text-3xl text-center mb-4">
            <span className="text-syntax-cyan">npm</span>{' '}
            <span className="text-syntax-green">install</span>{' '}
            my-skills
          </h2>

          <p className="text-center font-mono text-sm text-muted-foreground mb-12">
            <span className="text-syntax-comment">// dependencies that actually exist</span>
          </p>

          {technologies.map((section) => (
            <div key={section.category} className="mb-14">
              <h3 className="font-mono text-lg text-muted-foreground mb-4">
                {section.category}
              </h3>

              <div className="grid md:grid-cols-2 gap-3">
                {section.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="relative group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 blur-xl rounded-lg`}
                    />

                    {/* RECTANGLE CARD */}
                    <div className="relative bg-card border rounded-lg p-3 flex flex-col gap-1">
                      {/* top row */}
                      <div className="flex items-center gap-2">
                        <div className="text-xl">{tech.icon}</div>
                        <div className="font-mono font-bold text-s">
                          {tech.name}
                        </div>
                      </div>

                      {/* bottom row */}
                      <div className="flex items-center gap-4">
                        <p className="text-xs font-mono text-muted-foreground leading-tight">
                          {tech.description}
                        </p>
                        <div className="text-xs font-mono text-syntax-green whitespace-nowrap">
                          {tech.version}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStackSection;