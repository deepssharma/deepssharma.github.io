import { ML_PROJECTS, RESEARCH_PROJECTS } from '../data';

const ProjectCard = ({ project, index, hoverColor = 'group-hover:text-plasma-400' }) => (
  <div className="bg-ink-950 hover:bg-ink-900 transition-colors p-10 flex flex-col gap-6 group">
    <div>
      <p className="font-mono text-xs tracking-widest uppercase text-mist-600 mb-3">
        {String(index + 1).padStart(2, '0')} — {project.tag}
      </p>
      <h3 className={`font-display text-xl text-mist-100 ${hoverColor} transition-colors leading-snug`}>
        {project.title}
      </h3>
    </div>
    <p className="text-mist-400 text-sm leading-relaxed flex-1">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.stack.map(tech => (
        <span key={tech} className="font-mono text-xs bg-ink-800 border border-ink-600 text-mist-400 px-2.5 py-1">
          {tech}
        </span>
      ))}
    </div>
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs tracking-widest uppercase text-plasma-400 hover:text-plasma-300 transition-colors border-b border-plasma-800 hover:border-plasma-400 pb-0.5 self-start"
      >
        {project.linkLabel} ↗
      </a>
    )}
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-ink-700 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-start gap-4 mb-16">
          <div className="w-8 h-px bg-plasma-500 mt-3 flex-shrink-0" />
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-plasma-400">Selected Work</p>
        </div>

        {/* ML Projects */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-mist-100">
            ML & Data Science
          </h2>
          <a
            href="https://github.com/deepssharma"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-plasma-400 hover:text-plasma-300 transition-colors border-b border-plasma-600 pb-0.5"
          >
            All on GitHub ↗
          </a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-px bg-ink-700 border border-ink-700">
          {ML_PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} hoverColor="group-hover:text-plasma-400" />
          ))}
        </div>

        {/* Research Engineering */}
        <div className="mt-24">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-8 h-px bg-gold-400 mt-3 flex-shrink-0" />
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-400">Research Engineering</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <h2 className="font-display text-4xl md:text-5xl text-mist-100">
              Physics & HPC
            </h2>
          </div>

          <p className="text-mist-400 text-sm max-w-2xl mb-10 leading-relaxed">
            Large-scale scientific computing and data engineering from experimental physics —
            petabyte-scale HPC pipelines, statistical signal extraction, and published results
            in Nature Physics, NIM A, and Physical Review C.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-ink-700 border border-ink-700">
            {RESEARCH_PROJECTS.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} hoverColor="group-hover:text-gold-400" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
