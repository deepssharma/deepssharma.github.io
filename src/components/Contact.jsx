import { SOCIAL } from '../data';

const LINKS = [
  { label: 'GitHub', href: SOCIAL.github },
  { label: 'LinkedIn', href: SOCIAL.linkedin },
  { label: 'Google Scholar', href: SOCIAL.scholar },
  { label: 'ORCID', href: SOCIAL.orcid },
  { label: 'Medium', href: SOCIAL.medium },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="relative border-t border-ink-700 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-4 mb-16">
            <div className="w-8 h-px bg-plasma-500 mt-3 flex-shrink-0" />
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-plasma-400">Get in Touch</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl text-mist-100 leading-tight">
                Open to collaborations,<br />
                <span className="italic text-plasma-400">research &amp; ML roles.</span>
              </h2>
              <p className="text-mist-400 leading-relaxed max-w-lg">
                I'm interested in staff/principal ML engineering roles, research collaborations,
                and conversations around scientific computing, experimental data analysis,
                and production ML systems.
              </p>
              <a
                href={`mailto:${SOCIAL.email}`}
                className="inline-flex items-center gap-3 bg-plasma-500 hover:bg-plasma-600 text-white px-8 py-4 font-mono text-sm tracking-widest uppercase transition-colors glow-sm"
              >
                {SOCIAL.email}
                <span>→</span>
              </a>
            </div>

            {/* Social links */}
            <div className="space-y-1">
              {LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-ink-700 py-5 hover:border-plasma-600 transition-colors"
                >
                  <span className="font-mono text-sm tracking-widest uppercase text-mist-400 group-hover:text-plasma-400 transition-colors">
                    {label}
                  </span>
                  <span className="text-mist-600 group-hover:text-plasma-400 transition-colors group-hover:translate-x-1 inline-block transition-transform">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink-700 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-xs text-mist-600">
            © 2026 Deepali Sharma, Ph.D. · Setauket, NY
          </p>
          <p className="font-mono text-xs text-mist-600 italic">
            "The universe is under no obligation to make sense to you." — Neil deGrasse Tyson
          </p>
        </div>
      </footer>
    </>
  );
}
