import { useEffect } from 'react'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheck, FiGithub } from 'react-icons/fi'
import { preloadProjectImage, projects } from '../data/projects'

function DetailSection({ title, children }) {
  return (
    <section className="border-t border-white/10 py-8 sm:py-10">
      <h2 className="mb-5 font-display text-xl font-semibold tracking-[-0.035em] text-ink sm:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  )
}

function DetailList({ items }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li className="flex items-start gap-3 text-sm leading-7 text-muted" key={item}>
          <FiCheck className="mt-1.5 shrink-0 text-purple" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ProjectDetailsPage({ slug }) {
  const projectIndex = projects.findIndex((item) => item.slug === slug)
  const project = projects[projectIndex]

  useEffect(() => {
    preloadProjectImage(projects[projectIndex - 1]?.slug)
    preloadProjectImage(projects[projectIndex + 1]?.slug)
  }, [projectIndex])

  if (!project) {
    return (
      <main className="section-wrap flex min-h-screen flex-col items-start justify-center py-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-purple">Project not found</p>
        <h1 className="mb-6 font-display text-4xl font-semibold text-ink">That project doesn’t exist.</h1>
        <a
          className="inline-flex items-center gap-2 rounded-full border border-purple/40 px-5 py-3 text-sm font-semibold text-purple-dark transition-colors hover:bg-purple hover:text-[#19141d]"
          href="/#work"
        >
          <FiArrowLeft aria-hidden="true" /> Back to projects
        </a>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#15141c] text-ink">
      <header className="section-wrap flex items-center justify-between border-b border-white/10 py-5">
        <a className="font-display text-base font-bold tracking-[-0.04em] text-ink no-underline" href="/#home">
          Abdullah<span className="text-purple">.</span>
        </a>
        <a
          className="rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold text-ink no-underline transition-colors hover:border-purple hover:text-purple-dark"
          href="/#contact"
        >
          Get in touch <FiArrowUpRight className="ml-1 inline" aria-hidden="true" />
        </a>
      </header>

      <article className="section-wrap max-w-[900px] pb-20 pt-8 sm:pb-28 sm:pt-12">
        <a
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted no-underline transition-colors hover:text-purple-dark"
          href="/#work"
        >
          <FiArrowLeft aria-hidden="true" /> Back to projects
        </a>

        <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-purple">
          Project {project.number} · {project.category}
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl">
          {project.name}<span className="text-purple">.</span>
        </h1>
        <p className="mt-3 text-base leading-7 text-muted sm:text-lg">{project.description}</p>

        <figure className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#211d29] sm:my-10">
          <img
            className="max-h-[560px] w-full object-cover object-top"
            src={project.image}
            alt={project.imageAlt}
            fetchPriority="high"
            decoding="async"
          />
        </figure>

        {(project.liveUrl || project.repositoryUrl) && (
          <nav className="mb-8 flex flex-wrap gap-3" aria-label={`${project.name} project links`}>
            {project.liveUrl && (
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-purple px-5 py-3 text-sm font-semibold text-[#19141d] no-underline transition-transform hover:-translate-y-0.5"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live project <FiArrowUpRight aria-hidden="true" />
              </a>
            )}
            {project.repositoryUrl && (
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:border-purple hover:text-purple-dark"
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub aria-hidden="true" /> GitHub (client)
              </a>
            )}
          </nav>
        )}

        <div className="divide-y divide-white/10 border-y border-white/10">
          <DetailSection title="Brief description">
            <p className="text-sm leading-7 text-muted sm:text-base">{project.briefDescription}</p>
          </DetailSection>

          <DetailSection title="Key features">
            <DetailList items={project.features} />
          </DetailSection>

          <DetailSection title="Challenges faced">
            <DetailList items={project.challenge} />
          </DetailSection>

          <DetailSection title="Approach used">
            <p className="text-sm leading-7 text-muted sm:text-base">{project.approach}</p>
          </DetailSection>

          <DetailSection title="Potential improvements & future plans">
            <DetailList items={project.proposedNextSteps} />
          </DetailSection>

          <DetailSection title="Main technology stack">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <li
                  className="rounded-full border border-purple/20 bg-purple-soft px-4 py-2 font-mono text-[10px] font-medium text-purple-dark"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </DetailSection>
        </div>

        <nav className="mt-8 flex items-center justify-between gap-3" aria-label="Project navigation">
          {projectIndex > 0 ? (
            <a
              className="project-nav-button inline-flex h-9 w-fit shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border px-3 text-[10px] font-medium text-muted no-underline transition-colors hover:border-purple hover:text-purple-dark sm:h-10 sm:px-4 sm:text-xs"
              href={`/projects/${projects[projectIndex - 1].slug}`}
              rel="prev"
            >
              <FiArrowLeft aria-hidden="true" /> Previous project
            </a>
          ) : (
            <span
              className="inline-flex h-9 w-fit shrink-0 cursor-not-allowed items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/5 px-3 text-[10px] font-medium text-muted opacity-40 sm:h-10 sm:px-4 sm:text-xs"
              aria-disabled="true"
            >
              <FiArrowLeft aria-hidden="true" /> Previous project
            </span>
          )}
          {projectIndex < projects.length - 1 ? (
            <a
              className="project-nav-button inline-flex h-9 w-fit shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border px-3 text-[10px] font-medium text-muted no-underline transition-colors hover:border-purple hover:text-purple-dark sm:h-10 sm:px-4 sm:text-xs"
              href={`/projects/${projects[projectIndex + 1].slug}`}
              rel="next"
            >
              Next project <FiArrowRight aria-hidden="true" />
            </a>
          ) : (
            <span
              className="inline-flex h-9 w-fit shrink-0 cursor-not-allowed items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/5 px-3 text-[10px] font-medium text-muted opacity-40 sm:h-10 sm:px-4 sm:text-xs"
              aria-disabled="true"
            >
              Next project <FiArrowRight aria-hidden="true" />
            </span>
          )}
        </nav>
        <a
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-dark no-underline transition-colors hover:text-ink"
          href="/#work"
        >
          <FiArrowLeft aria-hidden="true" /> Back to all projects
        </a>
      </article>
    </main>
  )
}
