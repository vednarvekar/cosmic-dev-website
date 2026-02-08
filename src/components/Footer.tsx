import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/vednarvekar', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ved-narvekar/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/VedNarvekar', label: 'Twitter' },
  { icon: Mail, href: 'ved.v.narvekar@gmail.com', label: 'Gmail' },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-syntax-comment">{'// '}</span>
            <span className="text-syntax-green">{'<dev /> '}</span>
            <span>© Ved Narvekar.{new Date().getFullYear()} </span>
            <span> All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 text-muted-foreground hover:text-syntax-green transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-syntax-keyword">const</span>{' '}
            <span className="text-syntax-variable">madeWith</span>{' '}
            <span className="text-foreground">=</span>{' '}
            <span className="text-syntax-string">"❤️ & ☕"</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
