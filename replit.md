# Centre for Innovation & Startups - VIIT

## Overview
A static website for Vignan's Institute of Information Technology's Centre for Innovation & Startups. The site showcases the institution's innovation ecosystem, achievements, and startup support programs. **Redesigned to match the official VIIT website style (vignaniit.edu.in)**.

## Project Structure
```
/
├── index.html          # Main homepage with announcements, accreditations, stats
├── innovation.html     # Innovation Cell page with roadmap, TRL tracker, projects
├── edcell.html         # ED Cell / Startups page with services, incubated startups
├── ipr.html            # IPR Cell page with patent workflow, database, consultation
├── research.html       # R&D Cell page with projects, grants, publications
├── styles.css          # Main stylesheet (VIIT official style)
├── innovation.css      # Innovation & ED Cell shared styles
├── ipr.css             # IPR Cell specific styles
├── research.css        # R&D Cell specific styles
├── scripts.js          # JavaScript (animations, interactions)
├── server.py           # Python HTTP server for local development
├── assets/
│   ├── images/         # Logo and general images
│   └── achievments/    # Achievement photos
└── .gitignore          # Git ignore file
```

## Technologies
- HTML5 with Tailwind CSS (via CDN)
- Custom CSS with VIIT official color scheme
- Vanilla JavaScript (Intersection Observer, counter animations, filters)
- Font Awesome icons
- Google Fonts (Poppins, Playfair Display)

## Design System (VIIT Official Style)
- **Primary Color**: #1e40af (Blue)
- **Dark Color**: #0a1628 (Navy)
- **Secondary**: #60a5fa (Light Blue)
- **Accent Purple**: #7c3aed (IPR pages)
- **Accent Green**: #10b981 (R&D pages)
- **Fonts**: Poppins (body), Playfair Display (headings)

## Key Pages & Features

### Home Page (index.html)
- Auto-scrolling announcements with JS-driven smooth animation
- Accreditation cards with magnify effect on hover
- Achievement gallery with blur effects and lightbox modal
- Animated statistics counters
- Programs grid with hover effects

### Innovation Cell (innovation.html)
- Innovation roadmap visualization
- TRL (Technology Readiness Level) progress tracker
- Project portfolio with category filters
- Prototype gallery with overlay effects

### ED Cell (edcell.html)
- Service cards with feature lists
- Incubated startups carousel
- Success stories with testimonials
- Funding statistics
- Startup registration form

### IPR Cell (ipr.html)
- What is IPR section with type cards
- Patent filing workflow with animated timeline
- Searchable patent database with status filters
- IPR awareness programs with statistics
- Patent consultation form
- Policies & resources downloads

### R&D Cell (research.html)
- Animated metrics rings (SVG)
- Call for proposals banner
- Department-wise project cards with filters
- Funding sources showcase
- Publications repository with indexing badges
- Industry collaboration cards
- Student research highlights

## Advanced CSS/JS Features
- Intersection Observer for scroll animations
- RequestAnimationFrame for smooth scrolling
- CSS keyframe animations (float, pulse, bounce)
- Backdrop blur effects
- CSS gradients and shadows
- Progress bar animations
- Counter animations
- Filter/search functionality
- Form submission with loading states

## Accessibility
- Reduced motion support via `prefers-reduced-motion` media query
- Semantic HTML structure
- Mobile responsive design with hamburger menu
- Focus states for interactive elements

## Development
The website is served using Python's built-in HTTP server on port 5000.

Run locally with: `python server.py`

## Deployment
This is a static website - deploy the entire directory as static files.

## Recent Changes (Jan 2026)
- Created IPR Cell page with patent workflow, database, and consultation portal
- Created R&D Cell page with projects, grants, publications, and collaborations
- Added advanced CSS animations (floating icons, particles, progress rings)
- Updated navigation across all pages
- Enhanced interactivity with filters, search, and form handling
