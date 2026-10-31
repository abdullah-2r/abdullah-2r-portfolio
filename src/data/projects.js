import devTechStackImage from '../assets/Readme file for Project 1/Screenshot 2026-10-30 011452.png'
import netflixScreenshot from '../assets/project-netflix-preview.jpg'
import g3ArchitectsScreenshot from '../assets/project-g3-architects-preview.jpg'

export const projects = [
  {
    slug: 'dev-tech-stack',
    number: '01',
    name: 'Dev Tech Stack',
    category: 'Developer tools · React app',
    description:
      'A developer tool for browsing technologies by category and building a personalized stack, with quick controls to add or remove selections.',
    briefDescription:
      'Dev Tech Stack helps developers explore a curated technology catalog and assemble a personal toolkit. Technologies are organized by category, and users can add selections to a live stack panel, remove individual choices, or clear the stack.',
    features: [
      'Browse technologies grouped by category.',
      'Add technologies to a live selected-stack panel.',
      'Remove individual selections or clear the stack.',
      'Receive notifications and see a helpful empty state as the stack changes.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Icons', 'React Toastify'],
    challenge: [
      'Keeping the available technology list and selected-stack panel synchronized as users add or remove technologies.',
      'Handling empty and populated states clearly and providing feedback after selection actions.',
      'Loading technology data asynchronously before displaying the available choices.',
    ],
    approach:
      'Loads technology data from JSON and keeps the selected stack in React state, passing it to child components so the list and selected-stack panel stay in sync.',
    proposedNextSteps: [
      'Persist stacks between visits with browser storage or user accounts.',
      'Add search and category filters for larger technology catalogs.',
      'Allow users to export or share a completed stack.',
    ],
    liveUrl: 'https://dev-tech-stack.netlify.app',
    repositoryUrl: 'https://github.com/abdullah-2r/dev-tech-stack',
    image: devTechStackImage,
    imageAlt: 'Illustrative interface preview for Dev Tech Stack; not a project screenshot',
  },
  {
    slug: 'netflix-bangladesh',
    number: '02',
    name: 'Netflix Bangladesh',
    category: 'Streaming · Responsive landing page',
    description:
      'A responsive Netflix Bangladesh landing-page recreation with signup prompts, streaming-device sections, an interactive FAQ, and footer navigation.',
    briefDescription:
      'This static landing-page recreation presents a streaming service through a cinematic hero, signup prompts, and content sections for different devices and viewer profiles. It also includes an FAQ and footer navigation to create a complete landing-page experience.',
    features: [
      'Cinematic hero artwork with a dark overlay and signup call to action.',
      'Responsive signup forms with email input.',
      'Content sections for TV, mobile, other devices, and kids profiles.',
      'Frequently asked questions with interactive hover states.',
      'Navigation and footer links styled for the Netflix Bangladesh experience.',
    ],
    stack: ['HTML5', 'CSS3', 'Google Fonts (Poppins)'],
    challenge: [
      'Adapting the cinematic hero and signup content to different screen sizes while keeping text readable.',
      'Balancing dark overlays, background artwork, and foreground text for clear contrast.',
      'Building a multi-section landing page with static HTML and CSS and no framework or build tooling.',
    ],
    approach:
      'Built as a static HTML and CSS experience, using responsive layouts, Google Fonts, and externally hosted Netflix media to recreate the landing-page structure.',
    proposedNextSteps: [
      'Connect signup to a clearly identified demo or subscription backend.',
      'Improve form accessibility, keyboard use, and validation.',
      'Optimize and locally manage image assets to improve loading reliability and performance.',
    ],
    liveUrl: 'https://netprimebd.netlify.app',
    repositoryUrl: 'https://github.com/abdullah-2r/project_netflix',
    image: netflixScreenshot,
    imageAlt: 'Netflix Bangladesh landing page screenshot',
  },
  {
    slug: 'g3-architects',
    number: '03',
    name: 'G3 Architects',
    category: 'Architecture · Responsive landing page',
    description:
      'A polished one-page landing page for an architecture studio, presenting its team, services, project highlights, statistics, and sponsors.',
    briefDescription:
      'G3 Architects is a static, one-page architecture studio landing page. It introduces the studio with a branded hero and organizes team imagery, service highlights, experience, project metrics, and sponsors into a single responsive presentation.',
    features: [
      'Branded hero section with a prominent call to action.',
      'Navigation designed for a focused landing-page experience.',
      'Team gallery, service highlights, and experience badge.',
      'Project statistics and sponsor showcase.',
      'Responsive layout for desktop and smaller screens.',
    ],
    stack: ['HTML5', 'CSS3', 'Google Fonts (Work Sans)', 'GitHub Pages'],
    challenge: [
      'Organizing team, services, experience, statistics, and sponsors into one cohesive page.',
      'Maintaining clear visual hierarchy and readable content on smaller screens.',
      'Coordinating local images and typography to support a consistent architecture-studio brand.',
    ],
    approach:
      'Built a static, responsive page with HTML and CSS, using bold typography, clear visual hierarchy, and locally stored image assets to support the studio brand.',
    proposedNextSteps: [
      'Add a dedicated project gallery with larger images and project descriptions.',
      'Connect navigation and contact actions to working destinations or a contact form.',
      'Continue testing responsive layouts, keyboard navigation, and image loading across devices.',
    ],
    liveUrl: 'https://abdullah-2r.github.io/practice-project/',
    repositoryUrl: 'https://github.com/abdullah-2r/g3-architect-website',
    image: g3ArchitectsScreenshot,
    imageAlt: 'G3 Architects responsive landing page homepage screenshot',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

const preloadedImages = new Map()

export function preloadProjectImage(slug) {
  const project = getProjectBySlug(slug)
  if (!project || preloadedImages.has(project.image)) return

  const image = new Image()
  image.decoding = 'async'
  image.fetchPriority = 'high'
  image.src = project.image
  preloadedImages.set(project.image, image)
}
