import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

const lines = [
  { prefix: '~$', text: ' whoami', delay: 100 },
  { prefix: '>', text: ' Software Engineer', delay: 80, isOutput: true },

  // { prefix: '~$', text: ' pwd', delay: 100 },
  // { prefix: '   >', text: ' /home/ved/building', delay: 60, isOutput: true },

  { prefix: '~$', text: ' cat skills.core', delay: 100 },
  { 
    prefix: '  >', 
    text: ' Node.js | Express | PostgreSQL | Next.js | TypeScript | Python | AI/ML | C++ ', 
    delay: 50, 
    isOutput: true 
  },

  // { prefix: '~$', text: ' cat skills', delay: 100 },
  // { 
  //   prefix: '>', 
  //   text: ' Data Structures | OOP | C++ | System Design | AI/ML | Python', 
  //   delay: 50, 
  //   isOutput: true 
  // },

  { prefix: '~$', text: ' cat README.md', delay: 100 },
  { 
    prefix: '>', 
    text: ' echo "Welcome to my portfolio. Scroll to explore."', 
    delay: 60, 
    isOutput: true 
  },
];


  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= line.text.length) {
        setDisplayedText(line.text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setDisplayedText('');
        }, 800);
      }
    }, line.delay);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal Window */}
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="ml-4 text-sm text-muted-foreground font-mono">terminal — bash</span>
            </div>
            
            <div className="p-6 font-mono text-sm md:text-base space-y-2 min-h-[300px]">
              {lines.slice(0, currentLine).map((line, index) => (
                <div key={index} className={`flex items-start ${line.isOutput ? 'pl-6' : ''}`}>
                  <span className={line.isOutput ? 'text-syntax-cyan' : 'text-syntax-green'}>
                    {line.prefix}
                  </span>
                  <span className={line.isOutput ? 'text-foreground' : 'text-foreground'}>
                    {line.text}
                  </span>
                </div>
              ))}
              
              {currentLine < lines.length && (
                <div className="flex items-start">
                  <span className={lines[currentLine].isOutput ? 'text-syntax-cyan' : 'text-syntax-green'}>
                    {lines[currentLine].prefix}
                  </span>
                  <span className="text-foreground">
                    {displayedText}
                  </span>
                  <span 
                    className={`w-2 h-5 bg-terminal-green ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`} 
                  />
                </div>
              )}

              {currentLine >= lines.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 pt-4 border-t border-terminal-border"
                >
                  <p className="text-syntax-comment"># Building the future, one commit at a time</p>
                  <p className="text-syntax-comment"># Scroll down to explore my work</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            className="flex justify-center mt-12"
          >
            <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-syntax-green transition-colors">
              <span className="font-mono text-xs mb-2">scroll.down()</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
