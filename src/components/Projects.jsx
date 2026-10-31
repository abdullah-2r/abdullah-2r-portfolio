import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'

function ProjectCard({ project, revealDelay }) {
  return (
    <article className="portfolio-card card overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-purple/40" data-reveal data-reveal-delay={revealDelay}>
      <figure className="aspect-[16/10] overflow-hidden bg-[#211d29]">
        <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.025]" src={project.image} alt={project.imageAlt} loading="lazy" />
      </figure>
      <div className="card-body gap-0 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="mb-2 font-mono text-[9px] font-medium uppercase tracking-[0.13em] text-purple">
              {project.category}
            </p>
            <h3 className="font-display text-xl font-semibold tracking-[-0.035em] text-ink sm:text-2xl">
              {project.name}
            </h3>
          </div>
          <a
            className="btn btn-circle btn-sm border-white/15 bg-white/[0.03] text-ink shadow-none hover:border-purple hover:bg-purple hover:text-[#19141d]"
            aria-label={`View details for ${project.name}`}
            href={`/projects/${project.slug}`}
          >
            <FiArrowUpRight size={16} />
          </a>
        </div>
        <p className="mb-5 mt-3 min-h-[52px] text-[13px] leading-7 text-muted">
          {project.description}
        </p>
        <a
          className="btn btn-sm inline-flex min-h-10 items-center gap-2 self-start rounded-full border border-purple/40 bg-purple/10 px-4 text-[11px] font-semibold text-purple-dark shadow-none transition-colors hover:border-purple hover:bg-purple hover:text-[#19141d]"
          href={`/projects/${project.slug}`}
        >
          View project details <FiArrowRight />
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section-rule border-b py-20 sm:py-28" id="work">
      <div className="section-wrap">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <SectionHeading
            eyebrow="Selected projects"
            words={[
              { text: 'Made' },
              { text: 'with' },
              { text: 'intention.', className: 'text-purple' },
            ]}
          />
          <p className="max-w-[360px] text-sm leading-7 text-muted sm:mb-1">
            A selection of responsive interfaces and interactive apps, built
            with thoughtful details and modern frontend tools.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              revealDelay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
