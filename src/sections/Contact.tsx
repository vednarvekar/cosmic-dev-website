import { links, site } from '@/data/site';

const RECEIPT = [
  ['devops & infra', 'x1'],
  ['ai/ml systems', 'x1'],
  ['backend engineering', 'x1'],
  ['full-stack, when needed', 'x1'],
  ['shipped projects', 'x6'],
  ['coffee consumed', '∞'],
];

const out = { target: '_blank', rel: 'noopener noreferrer me' } as const;

/** "Let's build something real" plus the receipt, and the footer. */
export default function Contact() {
  return (
      <section className="vp-contact vp-g" id="contact" aria-labelledby="contact-title">
        <div>
          <h2 id="contact-title">
            Let's build
            <br />
            <em>something</em> real.
          </h2>
          <ul className="vp-links">
            {links.email && (
              <li>
                <a href={`mailto:${links.email}`}>email ↗</a>
              </li>
            )}
            <li>
              <a href={links.github} {...out}>github ↗</a>
            </li>
            <li>
              <a href={links.linkedin} {...out}>linkedin ↗</a>
            </li>
            <li>
              <a href={links.x} {...out}>x ↗</a>
            </li>
            <li>
              <a href={links.resume} target="_blank" rel="noopener">resume.pdf ↗</a>
            </li>
          </ul>
        </div>
        <div className="vp-receipt" aria-label="What you get">
          <h3>VED.DEV STORE</h3>
          <div className="vp-c">order #2026 · thank you!</div>
          {RECEIPT.map(([item, qty]) => (
            <div className="vp-r" key={item}>
              <span>{item}</span>
              <span>{qty}</span>
            </div>
          ))}
          <div className="vp-r vp-tot">
            <span>TOTAL</span>
            <span>the ultimate package</span>
          </div>
          <div className="vp-bar" aria-hidden />
        </div>
      </section>
  );
}

export function Footer() {
  return (
    <footer className="vp-footer">
      designed &amp; built by {site.name.split(' ')[0].toLowerCase()} · © {new Date().getFullYear()}
    </footer>
  );
}
