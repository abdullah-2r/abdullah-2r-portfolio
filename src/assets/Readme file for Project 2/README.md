# Netflix Landing Page

A responsive Netflix Bangladesh landing page recreation featuring a cinematic hero section, signup prompts, streaming-device content sections, FAQs, and footer navigation.

![Netflix landing page screenshot](assets/Screenshot%202026-09-16%20225802.png)

## Key Features

- Netflix-inspired hero section with background artwork and dark    overlay
- Responsive signup forms with email input and call-to-action buttons
- TV, mobile, device, and kids-profile content sections
- Frequently Asked Questions section with interactive hover states
- Netflix-style navigation, footer links, and visual styling

## Challenges Faced

- Keeping the cinematic hero and artwork effective across screen sizes while ensuring the signup content remains readable.
- Balancing dark overlays, imagery, and foreground text to maintain clear contrast.
- Reproducing a multi-section streaming landing page using static HTML and CSS without a framework or build tooling.

## Approach

The page uses semantic HTML sections and CSS for layout, responsive behavior, typography, and visual effects. Google Fonts and externally hosted media provide the visual assets. Signup prompts and FAQ styling recreate the front-end experience; this project does not implement a real subscription flow.

## Potential Improvements

- Connect the signup form to a clearly identified demo or subscription backend.
- Review keyboard navigation, form validation, and screen-reader labels throughout the page.
- Optimize and locally manage image assets to improve loading reliability and performance.

## Live Demo

[View the live site](https://netprimebd.netlify.app)

## Relevant Links

- [Source repository](https://github.com/abdullah-2r/project_netflix)
- [Netflix Bangladesh](https://www.netflix.com/bd/)

## Technology Stack

- HTML5
- CSS3
- Google Fonts (Poppins)

## Dependencies

This is a static project with no package manager or build-time dependencies. It uses the following external resources at runtime:

- Google Fonts for the Poppins typeface
- Netflix-hosted images and videos for the content sections

## Run Locally

1. Clone or download the repository.
2. Open a terminal in the project directory.
3. Start a local static server:

	```bash
	python -m http.server 8000
	```

4. Open [http://localhost:8000](http://localhost:8000) in your browser.
