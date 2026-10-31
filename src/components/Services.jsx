import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiSmartphone,
  FiTool,
  FiZap,
  FiArrowUpRight,
} from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const services = [
  {
    title: 'Frontend Development',
    description:
      'Build polished, reliable web interfaces with React, JavaScript, and modern frontend tools.',
    Icon: FiCode,
  },
  {
    title: 'Responsive Web Design',
    description:
      'Create layouts that feel natural and work smoothly across phones, tablets, and desktops.',
    Icon: FiSmartphone,
  },
  {
    title: 'UI Implementation',
    description:
      'Turn design concepts into clear, accessible interfaces with thoughtful attention to detail.',
    Icon: FiLayout,
  },
  {
    title: 'React Applications',
    description:
      'Develop interactive, component-based experiences that are easy to understand and extend.',
    Icon: FiZap,
  },
  {
    title: 'API Integration',
    description:
      'Connect frontend experiences to APIs and data sources with clear loading and error states.',
    Icon: FiDatabase,
  },
  {
    title: 'Website Improvements',
    description:
      'Refine existing websites with usability fixes, visual updates, and ongoing frontend support.',
    Icon: FiTool,
  },
]

export default function Services() {
  return (
    <section className="section-rule border-b py-20 sm:py-28" id="services">
      <div className="section-wrap">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <SectionHeading
            eyebrow="What I can help with"
            words={[
              { text: 'Services' },
              { text: 'for' },
              { text: 'your next project.', className: 'text-purple' },
            ]}
          />
          <p className="max-w-[360px] text-sm leading-7 text-muted sm:mb-1">
            From a first interface to a more polished product, I can help bring
            your ideas to the web.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, Icon }, index) => (
            <article
              className="portfolio-card service-card card rounded-2xl transition duration-300 hover:-translate-y-1"
              data-reveal
              data-reveal-delay={(index % 3) + 1}
              key={title}
            >
              <div className="card-body gap-4 p-5 sm:p-6">
                <span className="grid size-11 place-items-center rounded-full border border-purple/20 bg-purple-soft text-xl text-purple">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3 className="mb-2 font-display text-lg font-semibold tracking-[-0.03em] text-ink">
                    {title}
                  </h3>
                  <p className="text-[13px] leading-7 text-muted">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            className="btn min-h-12 rounded-full border border-white/20 bg-white/[0.03] px-6 text-xs font-semibold text-ink shadow-none hover:border-purple hover:bg-white/[0.07]"
            href="#contact"
          >
            Start a project <FiArrowUpRight className="text-purple" />
          </a>
        </div>
      </div>
    </section>
  )
}
