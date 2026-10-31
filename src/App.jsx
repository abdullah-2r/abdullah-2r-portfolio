import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetailsPage from './components/ProjectDetailsPage'
import { getProjectBySlug, preloadProjectImage } from './data/projects'

function revealProjectsForReturn() {
  const projectSection = document.getElementById('work')
  projectSection?.classList.add('route-restored')
  projectSection
    ?.querySelectorAll('[data-reveal], [data-text-reveal]')
    .forEach((element) => element.classList.add('is-visible'))
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname)
  const [hash, setHash] = useState(window.location.hash)
  const defaultTitle = useRef(document.title)
  const projectSlug = pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1]
  const project = projectSlug ? getProjectBySlug(projectSlug) : null
  const isProjectPage = Boolean(project)

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/' && window.location.hash === '#work') {
        revealProjectsForReturn()
      }
      setPathname(window.location.pathname)
      setHash(window.location.hash)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useLayoutEffect(() => {
    if (hash) {
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: 'instant' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  const handleInternalNavigation = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element)
    ) {
      return
    }

    const anchor = event.target.closest('a[href]')
    if (!anchor || anchor.target || anchor.hasAttribute('download')) return

    const destination = new URL(anchor.href, window.location.href)
    if (
      destination.origin !== window.location.origin ||
      !(/^\/$|^\/projects\/[^/]+\/?$/.test(destination.pathname)) ||
      (destination.pathname === window.location.pathname &&
        destination.hash === window.location.hash)
    ) {
      return
    }

    if (destination.pathname === window.location.pathname) return

    event.preventDefault()
    const destinationProjectSlug = destination.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1]
    if (destinationProjectSlug) preloadProjectImage(destinationProjectSlug)
    if (destination.pathname === '/' && destination.hash === '#work') {
      revealProjectsForReturn()
    }
    window.history.pushState({}, '', `${destination.pathname}${destination.search}${destination.hash}`)
    setPathname(destination.pathname)
    setHash(destination.hash)
  }

  const preloadHoveredProject = (event) => {
    if (!(event.target instanceof Element)) return

    const link = event.target.closest('a[href]')
    if (!link) return

    const destination = new URL(link.href, window.location.href)
    if (destination.origin !== window.location.origin) return

    const slug = destination.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1]
    if (slug) preloadProjectImage(slug)
  }

  useEffect(() => {
    document.title = project
      ? `${project.name} — Abdullah Al Naeem`
      : defaultTitle.current
  }, [project])

  useEffect(() => {
    const revealTargets = document.querySelectorAll('[data-reveal], [data-text-reveal]')
    const root = document.documentElement
    root.classList.add('motion-ready')

    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('is-visible'))
      return () => root.classList.remove('motion-ready')
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealTargets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
      root.classList.remove('motion-ready')
    }
  }, [])

  return (
    <div
      onClick={handleInternalNavigation}
      onPointerOver={preloadHoveredProject}
      onFocusCapture={preloadHoveredProject}
      onTouchStart={preloadHoveredProject}
    >
      <div
        data-theme="dark"
        className={`flex min-h-screen flex-col bg-[#15141c] font-sans text-ink ${isProjectPage ? 'hidden' : ''}`}
        aria-hidden={isProjectPage}
      >
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
      {projectSlug && <ProjectDetailsPage slug={projectSlug} />}
    </div>
  )
}
