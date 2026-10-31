import { useState } from 'react'
import { FiArrowUpRight, FiCheck, FiCopy, FiPhone, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { contact, socialProfiles } from '../data/profile'

const fieldClassName =
  'w-full rounded-xl border border-white/10 bg-[#15141c]/70 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-purple/60'

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopyStatus('Email copied')
    } catch (error) {
      console.error('Unable to copy email address:', error)
      setCopyStatus('Could not copy email. Select the address to copy it.')
    }
  }

  const sendInquiry = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section-rule border-y py-20 sm:py-32" id="contact">
      <div className="mx-auto w-[94%] max-w-[1400px]">
        <div className="mb-12 max-w-[640px] sm:mb-16" data-reveal>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-purple">
            Get in touch
          </p>
          <h2 className="mb-4 font-display text-[clamp(1.9rem,8vw,2.3rem)] font-bold leading-[1.15] tracking-[-0.06em] text-ink">
            Let&apos;s make something meaningful.
          </h2>
          <p className="text-[17.6px] leading-[1.6] text-muted">
            Have a project, question, or opportunity in mind? I&apos;d be glad to
            hear from you.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <article
            className="portfolio-card card min-h-full rounded-[20px]"
            data-reveal
            data-reveal-delay="1"
          >
            <div className="card-body gap-0 p-6 sm:p-8">
              <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-purple">
                Direct contact
              </p>
              <h3 className="mb-3 font-display text-[21.6px] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                Connect directly
              </h3>
              <p className="mb-6 text-[15.2px] leading-[1.6] text-muted">
                Email is the best way to reach me. You can also find me on
                GitHub and LinkedIn.
              </p>

              <div className="mb-5 flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-white/10 bg-[#15141c]/70 p-5">
                <div className="min-w-0">
                  <p className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-faint">
                    Email
                  </p>
                  <a
                    className="break-all text-sm font-medium text-ink no-underline transition-colors hover:text-purple"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </div>
                <button
                  className="btn btn-sm min-h-10 shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 text-xs font-semibold text-ink shadow-none hover:border-purple hover:bg-white/[0.07]"
                  type="button"
                  onClick={copyEmail}
                >
                  {copyStatus === 'Email copied' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                  {copyStatus === 'Email copied' ? 'Copied' : 'Copy'}
                </button>
              </div>
              {copyStatus && (
                <p className="mb-4 text-xs text-muted" role="status">
                  {copyStatus}
                </p>
              )}

              <a
                className="mb-6 inline-flex items-center gap-2 self-start text-sm text-muted no-underline transition-colors hover:text-ink"
                href={`tel:${contact.phone}`}
              >
                <FiPhone className="text-purple" aria-hidden="true" />
                {contact.phone}
                <FiArrowUpRight className="text-purple" aria-hidden="true" />
              </a>

              <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-5">
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-muted no-underline transition-colors hover:border-white/30 hover:text-ink"
                  href={socialProfiles.github.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" />
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-medium text-muted no-underline transition-colors hover:border-white/30 hover:text-ink"
                  href={socialProfiles.linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn aria-hidden="true" /> LinkedIn <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>

          <article
            className="portfolio-card card rounded-[20px]"
            data-reveal
            data-reveal-delay="2"
          >
            <div className="card-body p-6 sm:p-8">
              <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-purple">
                Quick inquiry
              </p>
              <h3 className="mb-5 font-display text-[21.6px] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                Tell me about your project
              </h3>
              <form className="grid gap-4" onSubmit={sendInquiry}>
                <label className="grid gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-muted">
                  Your name
                  <input
                    className={fieldClassName}
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="grid gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-muted">
                  Email address
                  <input
                    className={fieldClassName}
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label className="grid gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-muted">
                  Project brief or message
                  <textarea
                    className={`${fieldClassName} min-h-[102px] resize-y`}
                    name="message"
                    placeholder="Tell me a little about your project..."
                    required
                  />
                </label>
                <button
                  className="btn mt-1 min-h-12 w-full rounded-full border-purple bg-purple text-sm font-semibold text-[#19141d] shadow-none transition-colors hover:border-purple-dark hover:bg-purple-dark"
                  type="submit"
                >
                  <FiSend aria-hidden="true" />
                  Send message
                  <FiArrowUpRight aria-hidden="true" />
                </button>
              </form>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
