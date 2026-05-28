import { STATS, SOCIAL } from '../data';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 max-w-7xl mx-auto">
      {/* Decorative line */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 opacity-30">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-plasma-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-plasma-400" />
        <div className="w-px h-24 bg-gradient-to-b from-plasma-500 to-transparent" />
      </div>

      <div className="max-w-5xl">
        {/* Eyebrow */}
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-plasma-400 mb-6 animate-fade-up">
          ML Engineer · Data Scientist · Experimental Physicist
        </p>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.0] mb-8 animate-fade-up delay-100">
          <span className="text-mist-100">Finding signal</span>
          <br />
          <span className="italic text-plasma-400 text-glow">in the noise.</span>
        </h1>

        {/* Sub */}
        <p className="text-mist-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-fade-up delay-200">
          Ph.D. physicist with 12+ years analyzing petabyte-scale datasets at Relativistic Heavy-Ion Collider at Brookhaven National Laboratory.
          Now applying that same rigor to machine learning, deep learning, and production data pipelines.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20 animate-fade-up delay-300">
          <a
            href="#projects"
            className="bg-plasma-500 hover:bg-plasma-600 text-white px-7 py-3 font-mono text-sm tracking-wider uppercase transition-colors glow-sm"
          >
            View Projects
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink-600 hover:border-plasma-500 text-mist-400 hover:text-plasma-400 px-7 py-3 font-mono text-sm tracking-wider uppercase transition-all"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="border border-ink-600 hover:border-plasma-500 text-mist-400 hover:text-plasma-400 px-7 py-3 font-mono text-sm tracking-wider uppercase transition-all"
          >
            Contact
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-700 border border-ink-700 animate-fade-up delay-400">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-ink-900 px-6 py-6">
              <div className="font-display text-3xl text-plasma-400 mb-1">{value}</div>
              <div className="font-mono text-xs text-mist-600 tracking-wider uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
