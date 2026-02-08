import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const NAME = 'Ved Narvekar';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [flickerDone, setFlickerDone] = useState(false);

  // Stop flicker after 3s
  useEffect(() => {
    const timer = setTimeout(() => setFlickerDone(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Navbar blur on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">

          {/* LOGO + NAME */}
          <motion.a
            href="#hero"
            className="flex items-center  font-mono text-lg font-bold"
            whileHover={{ scale: 1.05 }}
          >
            {/* LOGO (NO FLICKER, BIGGER) */}
            <img
              src="/logo.svg"
              alt="Ved Narvekar logo"
              className="w-14 h-14 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />

            {/* NAME (LETTER-PAIR FLICKER) */}
            <span className="flex tracking-wide text-white">
              {NAME.split('').map((char, index) => {
                if (char === ' ') {
                  return <span key={index} className="w-2" />;
                }

                const isEven = index % 2 === 0;

                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0.3 }}
                    animate={
                      flickerDone
                        ? { opacity: 1 }
                        : {
                            opacity: isEven
                              ? [0.3, 1, 0.4, 1]
                              : [1, 0.4, 1, 0.3],
                          }
                    }
                    transition={
                      flickerDone
                        ? { duration: 1 }
                        : {
                            duration: 1,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            delay: isEven ? 0.0 : 0.30, // 👈 alternating pairs
                          }
                    }
                    className={`${
                      flickerDone
                        ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]'
                        : ''
                    }`}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          </motion.a>

          {/* NAV LINKS */}
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

          {/* CTA */}
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
