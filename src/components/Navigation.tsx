import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            className="font-mono text-lg font-bold text-syntax-green"
            whileHover={{ scale: 1.05 }}
          >
            {'<dev />'}
          </motion.a>
          
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-mono text-sm text-muted-foreground hover:text-syntax-green transition-colors relative group"
                >
                  <span className="text-syntax-purple">.</span>
                  {item.name.toLowerCase()}
                  <span className="text-syntax-yellow">()</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-syntax-green transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="font-mono text-sm px-4 py-2 bg-primary/20 border border-primary rounded-md text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            {'> contact_me'}
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
