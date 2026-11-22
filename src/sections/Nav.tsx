/** Floating pill nav. */
export default function Nav() {
  return (
    <nav className="vp-nav" aria-label="Main">
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a className="vp-cta" href="#contact">
        Say hi
      </a>
    </nav>
  );
}
