# Centre for Innovation & Startups - VIIT

## Overview
A comprehensive static website for Vignan's Institute of Information Technology's Centre for Innovation & Startups. The site showcases the institution's innovation ecosystem, achievements, and startup support programs. **Redesigned to match the official VIIT website style (vignaniit.edu.in)**.

## Project Structure
```
/
├── index.html          # Main homepage with announcements, accreditations, stats
├── innovation.html     # Innovation Cell page with roadmap, TRL tracker, projects
├── edcell.html         # ED Cell / Startups page with services, incubated startups
├── ipr.html            # IPR Cell page with patent workflow, database, consultation
├── research.html       # R&D Cell page with projects, grants, publications
├── idealab.html        # Idea Lab - integrated facilities, gallery, workshops, idea submission
├── projects.html       # Projects/Startups/Products showcase with 9 category filters
├── events.html         # Events & Programs with calendar, 6 event categories
├── resources.html      # Resources & Downloads with 40+ templates and documents
├── contact.html        # Contact page with team directory and multi-form inquiry system
├── styles.css          # Main stylesheet (VIIT official style)
├── innovation.css      # Innovation & ED Cell shared styles
├── ipr.css             # IPR Cell specific styles
├── research.css        # R&D Cell specific styles
├── idealab.css         # Idea Lab page styles
├── projects.css        # Projects showcase styles
├── events.css          # Events page styles
├── resources.css       # Resources page styles
├── contact.css         # Contact page styles
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
- **Accent Orange**: #f59e0b (Idea Lab)
- **Accent Red**: #ef4444 (Events)
- **Accent Cyan**: #06b6d4 (Resources)
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

### Idea Lab (idealab.html)
- Innovation funnel visualization (5 stages)
- 4 Facilities showcase (Rapid Prototyping, AI/IoT, Robotics, MedTech)
- Gallery carousel with navigation
- Workshop & skill sessions calendar
- Training modules with progress bars
- Idea submission form portal
- Resource repository (3D Models, GitHub, Lab Manuals)
- Auto-scrolling achievements banner

### Projects Showcase (projects.html)
- 9 category filters (Software, Hardware, Healthcare, AgriTech, Industry 4.0, Energy, AI/ML, IoT)
- Searchable project grid
- Project cards with status badges and patent info
- Startup spotlight carousel with metrics
- Animated stats bar

### Events & Programs (events.html)
- Interactive events calendar with event markers
- 6 event categories (Hackathons, FDP/Workshops, Bootcamps, Demo Day, Patent Clinics, E-Camps)
- Featured upcoming events section
- Past events archive with gallery links
- Confetti animation in hero
- Upcoming event announcement banner

### Resources & Downloads (resources.html)
- Searchable resource library
- 6 download categories (Templates, Funding, IPR, Startup, Design, Policy)
- 40+ downloadable files
- Prototype development guidelines
- Workshop materials archive
- Floating document animations

### Contact (contact.html)
- Contact info cards (location, phone, email, hours)
- Team directory with 6 members
- Multi-tab inquiry system (4 forms: Idea, Prototype, Industry, Research)
- Form validation with loading states
- Map placeholder with directions link

## Advanced CSS/JS Features
- Intersection Observer for scroll animations
- RequestAnimationFrame for smooth scrolling
- CSS keyframe animations (float, pulse, bounce, gearRotate, confettiFall)
- Backdrop blur effects
- CSS gradients and shadows
- Progress bar animations
- Counter animations
- Filter/search functionality
- Form submission with loading states
- Gallery carousel with dot navigation
- Tabbed interfaces
- Calendar generation with event markers
- Auto-scroll achievements banner

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
- Created Idea Lab page with facilities, gallery carousel, innovation funnel, workshops calendar, training modules, idea submission portal, and resource repository
- Created Projects Showcase page with 9 category filters, searchable grid, startup spotlight
- Created Events & Programs page with calendar, 6 event categories, past events archive
- Created Resources & Downloads page with 40+ files, prototype guidelines, workshop materials
- Created Contact page with team directory, multi-tab inquiry forms (4 types)
- Added auto-scrolling achievements banner to all new pages
- Updated navigation to 10 pages across entire site
- Enhanced animations with gears, confetti, floating shapes, floating documents
