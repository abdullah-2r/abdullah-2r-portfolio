import { useEffect, useState } from 'react'
import { FiCode, FiClock, FiMapPin, FiSmartphone, FiZap } from 'react-icons/fi'

function getBangladeshTime() {
  return new Intl.DateTimeFormat('en-BD', {
    timeZone: 'Asia/Dhaka',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(new Date())
}

const standards = [
  {
    title: 'Fast, focused interactions',
    description: 'Keep interfaces responsive and avoid unnecessary complexity.',
    Icon: FiZap,
  },
  {
    title: 'Accessibility at the core',
    description: 'Use semantic structure, keyboard support, and readable contrast.',
    Icon: FiCode,
  },
  {
    title: 'Built for every screen',
    description: 'Make experiences work comfortably across screen sizes.',
    Icon: FiSmartphone,
  },
]

const highlights = [
  { value: '3', label: 'Featured concepts' },
  { value: '6', label: 'Frontend services' },
  { value: '11', label: 'Technical skills' },
]

export default function About() {
  const [localTime, setLocalTime] = useState(getBangladeshTime)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setLocalTime(getBangladeshTime())
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="section-rule border-y py-20 sm:py-32" id="about">
      <div className="mx-auto w-[94%] max-w-[1400px]">
        <div className="mb-12 max-w-[640px] sm:mb-16" data-reveal>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-purple">
            About me
          </p>
          <h2 className="mb-4 font-display text-[clamp(1.9rem,8vw,2.3rem)] font-bold leading-[1.15] tracking-[-0.06em] text-ink">
            A look behind the code.
          </h2>
          <p className="text-[17.6px] leading-[1.6] text-muted">
            Bridging thoughtful design and frontend development with a focus on
            craft, accessibility, and useful experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="portfolio-card card rounded-[20px] md:col-span-2" data-reveal data-reveal-delay="1">
            <div className="card-body gap-0 p-5 sm:p-8">
              <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-purple">
                Engineering mindset
              </p>
              <h3 className="mb-4 font-display text-[22.4px] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                Crafting digital products with precision
              </h3>
              <p className="mb-4 text-base leading-7 text-muted">
                I&apos;m a frontend developer focused on creating reliable,
                accessible, and responsive web experiences. I approach every
                interface as a system where clarity, performance, and usability
                shape how people experience a product.
              </p>
              <p className="mb-5 text-base leading-7 text-muted">
                I build modular React interfaces and refine details so products
                feel intuitive and remain maintainable as they grow.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['Clean code', 'Performance mindset', 'Accessibility', 'Component architecture'].map((principle) => (
                  <li
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-muted transition-colors hover:border-white/30 hover:text-ink"
                    key={principle}
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="portfolio-card card rounded-[20px]" data-reveal data-reveal-delay="2">
            <div className="card-body p-5 sm:p-8">
              <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-purple">
                Live status
              </p>
              <h3 className="mb-5 font-display text-[22.4px] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                Timezone & Location
              </h3>
              <div className="mb-5 flex min-h-[86px] flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#15141c]/70 px-4 py-4 sm:px-6">
                <span className="inline-flex items-center gap-3 font-mono text-xl font-medium tracking-[0.06em] text-ink sm:gap-4 sm:text-2xl sm:tracking-[0.08em]">
                  <FiClock className="shrink-0 text-purple" aria-hidden="true" />
                  <time dateTime={new Date().toISOString()}>{localTime}</time>
                </span>
                <span className="rounded-full bg-purple-soft px-3 py-1 font-mono text-[10px] font-medium text-purple-dark">
                  GMT+6
                </span>
              </div>
              <p className="flex items-start gap-2 text-[14.72px] leading-[1.5] text-muted">
                <FiMapPin className="mt-1 shrink-0 text-purple" aria-hidden="true" />
                <span>
                  Based in <strong className="font-semibold text-ink">Bangladesh</strong>.
                  Open to remote and hybrid collaborations worldwide.
                </span>
              </p>
            </div>
          </article>

          <article className="portfolio-card card rounded-[20px]" data-reveal data-reveal-delay="3">
            <div className="card-body p-5 sm:p-8">
              <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-purple">
                Standards
              </p>
              <h3 className="mb-5 font-display text-[22.4px] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                Key Pillars
              </h3>
              <ul className="grid gap-4">
                {standards.map(({ title, description, Icon }) => (
                  <li className="flex min-h-[44px] items-start gap-3" key={title}>
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-purple-soft text-purple">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="mb-1 text-base font-semibold leading-6 text-ink">{title}</h4>
                      <p className="text-[13.6px] leading-[1.4] text-muted">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="portfolio-card card rounded-[20px] md:col-span-2" data-reveal data-reveal-delay="1">
            <div className="card-body p-5 sm:p-8">
              <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-purple">
                Portfolio at a glance
              </p>
              <h3 className="mb-5 font-display text-[22.4px] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                A few things I bring to a project
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {highlights.map(({ value, label }) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5"
                    key={label}
                  >
                    <p className="mb-1 font-display text-3xl font-bold tracking-[-0.05em] text-purple">
                      {value}
                    </p>
                    <p className="text-sm text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
