import { SOCIAL } from '../data';

const META = [
  { label: 'Education', value: 'Ph.D. Experimental Nuclear Physics\nWeizmann Institute of Science (2004–2010)' },
  { label: 'Also', value: 'M.Sc. Physics, University of Jammu\nData Science, Flatiron School (2022–23)' },
  { label: 'Focus', value: 'ML / Deep Learning · Statistical Modeling\nData Pipelines · HPC · Signal Extraction' },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-ink-700 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-4 mb-16">
          <div className="w-8 h-px bg-plasma-500 mt-3 flex-shrink-0" />
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-plasma-400">About</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Text */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl text-mist-100 leading-tight">
              A physicist who speaks<br />
              <span className="italic text-plasma-400">machine learning.</span>
            </h2>

            <div className="space-y-4 text-mist-400 leading-relaxed">
              <p>
                My career has been defined by one fundamental challenge: extracting tiny, 
                meaningful signals buried inside massive, noisy datasets. At the PHENIX 
                experiment at Brookhaven National Lab, that meant searching for quark-gluon 
                plasma signatures and dark photons across petabytes of heavy-ion collision data.
              </p>
              <p>
                I've designed and commissioned detector hardware, written C++ and Python 
                pipelines that ran on thousands of HPC cores, and published findings in journals 
                from Physical Review C to Nature Physics. I led teams, mentored Ph.D. students, 
                and delivered invited talks on four continents.
              </p>
              <p>
                More recently, I've channeled that analytical foundation into machine learning — 
                CNNs for medical imaging, LSTM time-series models, ensemble classifiers for 
                infrastructure — always bringing the same standard of statistical rigor that 
                experimental physics demands.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { label: 'Google Scholar', href: SOCIAL.scholar },
                { label: 'ORCID', href: SOCIAL.orcid },
                { label: 'Medium', href: SOCIAL.medium },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-widest uppercase border border-ink-600 hover:border-plasma-500 text-mist-400 hover:text-plasma-400 px-4 py-2 transition-all"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Meta */}
          <div className="lg:col-span-2 space-y-1">
            {META.map(({ label, value }) => (
              <div key={label} className="border-b border-ink-700 py-5">
                <p className="font-mono text-xs tracking-widest uppercase text-mist-600 mb-2">{label}</p>
                <p className="text-mist-200 text-sm whitespace-pre-line leading-relaxed">{value}</p>
              </div>
            ))}

            {/* Awards callout */}
            <div className="mt-6 bg-ink-800 border border-ink-600 p-5 space-y-2">
              <p className="font-mono text-xs tracking-widest uppercase text-gold-400 mb-3">Recognition</p>
              {[
                'Young PHENIXian — Brookhaven National Lab (2013)',
                'Featured in BNL Newsletter & Innovations Report',
                'National Eligibility Test — UGC India (Physics)',
                'Junior Research Fellow — DST, Govt. of India',
              ].map(item => (
                <p key={item} className="text-mist-400 text-xs leading-relaxed flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">◆</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
