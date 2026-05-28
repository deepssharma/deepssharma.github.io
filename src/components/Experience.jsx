import { EXPERIENCE } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-ink-700 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-4 mb-16">
          <div className="w-8 h-px bg-plasma-500 mt-3 flex-shrink-0" />
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-plasma-400">Experience</p>
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-mist-100 mb-12">
          Career History
        </h2>

        <div className="space-y-px">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className="group grid md:grid-cols-[220px_1fr] gap-8 bg-ink-950 hover:bg-ink-900 transition-colors border border-ink-700 p-8"
            >
              {/* Meta */}
              <div className="space-y-1">
                <p className="font-mono text-xs text-plasma-400 tracking-wider">{exp.period}</p>
                <p className="text-mist-100 font-medium text-sm">{exp.org}</p>
                <p className="font-mono text-xs text-mist-600">{exp.location}</p>
              </div>

              {/* Body */}
              <div className="space-y-4">
                <h3 className="font-display text-xl text-mist-100 group-hover:text-plasma-400 transition-colors">
                  {exp.role}
                </h3>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-mist-400 text-sm leading-relaxed flex items-start gap-3">
                      <span className="text-plasma-500 mt-1.5 flex-shrink-0 text-xs">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.stack.map(s => (
                    <span key={s} className="font-mono text-xs bg-ink-800 border border-ink-600 text-mist-600 px-2.5 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
