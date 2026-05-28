import { PUBLICATIONS, SOCIAL } from '../data';

const BADGE_STYLES = {
  gold: 'bg-gold-400/10 text-gold-400 border border-gold-400/30',
  plasma: 'bg-plasma-500/10 text-plasma-400 border border-plasma-500/30',
  mist: 'bg-mist-400/10 text-mist-400 border border-mist-400/30',
};

export default function Research() {
  return (
    <section id="research" className="relative border-t border-ink-700 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-4 mb-16">
          <div className="w-8 h-px bg-plasma-500 mt-3 flex-shrink-0" />
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-plasma-400">Research</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-mist-100">
            Publications
          </h2>
          <a
            href={SOCIAL.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-plasma-400 hover:text-plasma-300 transition-colors border-b border-plasma-600 pb-0.5"
          >
            Full list on Google Scholar ↗
          </a>
        </div>

        {/* Pub list */}
        <div className="divide-y divide-ink-700 border-t border-ink-700">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.title}
              className="py-7 grid md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-start group"
            >
              <div className="font-mono text-sm text-mist-600 pt-0.5">{pub.year}</div>

              <div className="space-y-1.5">
                <h3 className="text-mist-100 font-medium leading-snug group-hover:text-plasma-400 transition-colors">
                  {pub.title}
                </h3>
                <p className="font-mono text-xs text-mist-600 italic">{pub.venue}</p>
                <p className="font-mono text-xs text-mist-600">{pub.authors}</p>
              </div>

              <div className="flex flex-col gap-2 items-end min-w-max">
                {pub.badge && (
                  <span className={`font-mono text-xs px-2.5 py-1 tracking-wider ${BADGE_STYLES[pub.badgeStyle] || BADGE_STYLES.mist}`}>
                    {pub.badge}
                  </span>
                )}
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-widest uppercase border border-ink-600 hover:border-plasma-500 text-mist-400 hover:text-plasma-400 px-3 py-1.5 transition-all"
                >
                  DOI ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-ink-800 border border-ink-600 px-6 py-5">
          <p className="font-mono text-xs text-mist-600 leading-relaxed">
            159+ total publications (PHENIX Collaboration) · 12 conference proceedings · 17 invited & parallel talks worldwide
          </p>
          <div className="flex gap-4 flex-shrink-0">
            <a href={SOCIAL.orcid} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase text-plasma-400 hover:text-plasma-300 transition-colors">
              ORCID ↗
            </a>
            <a href={SOCIAL.scholar} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase text-plasma-400 hover:text-plasma-300 transition-colors">
              Scholar ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
