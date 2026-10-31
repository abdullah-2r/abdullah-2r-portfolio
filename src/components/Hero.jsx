import { useEffect, useState } from 'react'
import { FiArrowDownRight, FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import heroPortrait from '../assets/1793191224110.jpg'
import resumePdf from '../assets/_White and Black Minimalist Professional Accountant Resume (2).pdf'
import { socialProfiles } from '../data/profile'

const designations = ['Frontend Developer', 'React Developer', 'Web Developer']

export default function Hero() {
  const [designationIndex, setDesignationIndex] = useState(0)
  const designation = designations[designationIndex]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDesignationIndex((index) => (index + 1) % designations.length)
    }, 2800)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="hero-backdrop relative isolate overflow-hidden" id="home">
      <div className="section-wrap grid min-h-[calc(100svh-84px)] content-center items-center gap-y-0 py-16 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:content-normal lg:gap-x-10 lg:py-14">
        <div className="relative z-10" data-reveal>
          <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-purple">
            Frontend developer <span className="px-1 text-faint">/</span> Bangladesh
          </p>
          <p className="mb-3 text-lg text-muted">Hi, I am</p>
          <h1 className="max-w-[850px] font-display text-[clamp(2.5rem,5.7vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.055em] text-ink">
            Abdullah Al Naeem<span className="text-purple">.</span>
          </h1>
          <p className="mt-5 flex flex-wrap items-center gap-x-2 font-display text-[clamp(1.35rem,3vw,1.9rem)] font-semibold leading-tight tracking-[-0.035em] text-ink">
            <span>I’m a</span>
            <span className="inline-flex items-center">
              <span className="sr-only">Frontend Developer, React Developer, Web Developer</span>
              <span className="inline-flex overflow-hidden py-1" aria-hidden="true">
                <span key={designation} className="hero-role-text font-bold text-purple">
                  {designation}
                </span>
              </span>
              <span className="hero-role-caret ml-1 inline-block h-[1.1em] w-[3px] rounded-full bg-purple" aria-hidden="true" />
            </span>
          </p>
          <p className="mt-5 max-w-[620px] text-[15px] leading-8 text-muted sm:text-base sm:leading-8">
            I turn complex ideas into clear, dependable web experiences. Focused on frontend craft,
            accessible interfaces, and the details that make digital products feel effortless.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              className="btn min-h-12 rounded-full border-purple bg-purple px-6 text-xs font-semibold text-[#19141d] shadow-none transition-transform hover:-translate-y-0.5 hover:border-purple-dark hover:bg-purple-dark"
              href="#work"
            >
              View projects <FiArrowRight size={16} />
            </a>
            <a
              className="btn min-h-12 rounded-full border-white/20 bg-white/[0.03] px-6 text-xs font-semibold text-ink shadow-none hover:border-purple hover:bg-white/[0.07]"
              href={resumePdf}
              download="Abdullah-Al-Naeem-Resume.pdf"
            >
              <FiDownload size={16} /> Resume
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
              Elsewhere
            </span>
            <a
              className="text-muted transition-colors hover:text-purple"
              href={socialProfiles.github.href}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FiGithub size={26} />
            </a>
            <a
              className="text-muted transition-colors hover:text-purple"
              href={socialProfiles.linkedin.href}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin size={26} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-12 grid aspect-square w-[min(88vw,300px)] max-w-[400px] place-items-center p-0 sm:mt-10 sm:w-full lg:col-start-2 lg:row-start-1 lg:mt-0 lg:max-w-[460px]" data-reveal data-reveal-delay="2">
          <div className="absolute inset-4 rounded-full bg-purple/15 blur-3xl" />
          <div className="portrait-frame relative size-full rounded-full">
            <div className="portrait-image-wrap absolute inset-[2px] overflow-hidden rounded-full">
              <img
                className="portrait-image size-full object-cover object-[center_30%]"
                src={heroPortrait}
                alt="Portrait of Abdullah Al Naeem"
                width="1824"
                height="2344"
                decoding="async"
                fetchPriority="high"
              />
              <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink">
                Profile / 001
              </span>
            </div>
          </div>
          <a
            className="absolute bottom-2 right-2 grid size-11 place-items-center rounded-full border border-white/10 bg-[#211d29]/80 text-ink backdrop-blur-md transition-transform hover:translate-x-1 hover:translate-y-1 sm:bottom-3 sm:right-3"
            href="#about"
            aria-label="Scroll to about section"
          >
            <FiArrowDownRight size={19} />
          </a>
        </div>
      </div>
      <span className="absolute bottom-8 right-8 hidden font-mono text-[9px] uppercase tracking-[0.16em] text-faint xl:block">
        Scroll to discover ↓
      </span>
    </section>
  )
}
