import { useState } from 'react'
import { FiMonitor, FiSmartphone } from 'react-icons/fi'
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import SectionHeading from './SectionHeading'

const skills = [
  { name: 'HTML', category: 'Frontend', level: 92, Icon: SiHtml5 },
  { name: 'CSS', category: 'Frontend', level: 88, Icon: SiCss },
  { name: 'JavaScript', category: 'Frontend', level: 82, Icon: SiJavascript },
  { name: 'React', category: 'Frontend', level: 78, Icon: SiReact },
  { name: 'TypeScript', category: 'Frontend', level: 72, Icon: SiTypescript },
  { name: 'Next.js', category: 'Frontend', level: 70, Icon: SiNextdotjs },
  { name: 'MongoDB', category: 'Backend & APIs', level: 65, Icon: SiMongodb },
  { name: 'Responsive design', category: 'Tools & Workflow', level: 88, Icon: FiSmartphone },
  { name: 'Git', category: 'Tools & Workflow', level: 72, Icon: SiGit },
  { name: 'GitHub', category: 'Tools & Workflow', level: 72, Icon: SiGithub },
  { name: 'UI implementation', category: 'Tools & Workflow', level: 84, Icon: FiMonitor },
]

const filters = ['All', 'Frontend', 'Backend & APIs', 'Tools & Workflow']

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleSkills =
    activeFilter === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeFilter)

  return (
    <section className="section-rule border-b py-20 sm:py-28" id="skills">
      <div className="section-wrap">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <SectionHeading
            eyebrow="Skills & technologies"
            words={[
              { text: 'Tools &' },
              { text: 'technologies.', className: 'text-purple' },
            ]}
          />
          <p className="max-w-[400px] text-sm leading-7 text-muted sm:mb-1">
            The technologies and workflows I use to build clear, responsive web
            experiences.
          </p>
        </div>
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4" data-reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter skills by category">
            {filters.map((filter) => (
              <button
                className={`rounded-full border px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.08em] transition-colors ${
                  activeFilter === filter
                    ? 'border-purple bg-purple text-[#19141d]'
                    : 'border-white/10 bg-white/[0.03] text-muted hover:border-purple/50 hover:text-ink'
                }`}
                type="button"
                aria-pressed={activeFilter === filter}
                key={filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
            {visibleSkills.length} {visibleSkills.length === 1 ? 'skill' : 'skills'}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-reveal data-reveal-delay="1">
          {visibleSkills.map(({ name, category, level, Icon }) => (
            <article
              className="portfolio-card skill-tech-card card rounded-full border transition duration-300 hover:-translate-y-1"
              key={name}
            >
              <div className="card-body flex-row items-center gap-4 p-4">
                <span className="grid shrink-0 place-items-center text-2xl leading-none text-purple">
                  <Icon aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 font-display text-[17px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink">
                    {name}
                  </h3>
                  <p className="text-[13px] leading-5 text-muted">{category}</p>
                </div>
                <span className="shrink-0 rounded-full border border-purple/20 bg-purple-soft px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-purple-dark">
                  {level}%
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
