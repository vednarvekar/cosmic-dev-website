import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-syntax-comment">{'// '}</span>
            <span>© {new Date().getFullYear()} </span>
            <span className="text-syntax-green">{'<dev />'}</span>
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
