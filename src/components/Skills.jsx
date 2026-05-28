import { SKILLS } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-ink-700 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-4 mb-16">
          <div className="w-8 h-px bg-plasma-500 mt-3 flex-shrink-0" />
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-plasma-400">Capabilities</p>
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-mist-100 mb-12">
          Skills &amp; Tools
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="space-y-4">
              <p className="font-mono text-xs tracking-widest uppercase text-plasma-400 border-b border-ink-700 pb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span
                    key={item}
                    className="font-mono text-xs bg-ink-800 hover:bg-ink-700 border border-ink-600 hover:border-plasma-600 text-mist-300 px-3 py-1.5 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
