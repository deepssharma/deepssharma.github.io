import { useState, useEffect } from 'react';
import { NAV_LINKS, SOCIAL } from '../data';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink-950/90 backdrop-blur-md border-b border-ink-700' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display text-lg text-mist-100 tracking-tight">
          Deepali Sharma<span className="text-plasma-400">, Ph.D.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs tracking-widest uppercase text-mist-400 hover:text-plasma-400 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-plasma-600 text-plasma-400 px-4 py-1.5 font-mono text-xs tracking-widest uppercase hover:bg-plasma-600/10 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-mist-400" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-px bg-current transition-all ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink-900 border-t border-ink-700 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-widest uppercase text-mist-400 hover:text-plasma-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
