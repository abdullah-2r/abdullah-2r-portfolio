import { FiArrowUp } from 'react-icons/fi'

const currentYear = new Date().getFullYear()
const footerLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#work'],
  ['Services', '#services'],
  ['Contact', '#contact'],
]
const technologies = ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite']

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#15141c]">
      <div className="section-wrap">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16 lg:py-14">
          <div>
            <a className="mb-4 inline-flex items-center gap-2.5 font-display text-base font-bold tracking-[-0.05em] text-ink no-underline" href="#home">
              <span className="grid size-9 place-items-center rounded-xl bg-purple font-mono text-[10px] font-medium text-[#19141d]">
                AN
              </span>
              <span>Abdullah<span className="text-purple">.</span></span>
            </a>
            <p className="mb-5 max-w-sm text-sm leading-7 text-muted">
              Building thoughtful, accessible web experiences with care for the
              details that make them useful.
            </p>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-2 font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-emerald-200">
              <span aria-hidden="true" className="status-dot size-[6px] rounded-full bg-emerald-300" />
              <span className="status-text">Available for frontend projects</span>
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-faint">
              Navigation
            </h2>
            <ul className="grid gap-3">
              {footerLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    className="text-sm text-muted no-underline transition-colors hover:text-purple"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-faint">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <li
                  className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-muted transition-colors hover:border-white/30 hover:text-ink"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 text-xs text-muted">
            © {currentYear} Abdullah Al Naeem. Designed with care.
          </p>
          <a
            className="btn min-h-10 self-start rounded-full border border-white/20 bg-white/[0.03] px-4 text-xs font-semibold text-ink no-underline shadow-none hover:border-purple hover:bg-white/[0.07] sm:self-auto"
            href="#home"
          >
            Back to top <FiArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
