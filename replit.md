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
│   ├── achievments/    # Achievement photos
│   ├── events/         # Workshop and event photos
│   ├── team/           # IIC committee meeting photos
│   └── documents/      # Downloadable PDFs (IIC reports, event reports)
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
- **Real Photo Gallery** carousel with actual event/meeting photos:
  - IIC Orientation Session photos
  - Innovation Workshop photos
  - Student Training Session photos
  - IIC Committee Meeting photos
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
- **Real Past Events** with actual photos and PDF links:
  - MIC Orientation Session (Aug 5, 2024) - 110 students, 40 Innovation Ambassadors
  - IP Awareness Session (April 21, 2025) - 72 participants, WIPO expert session
  - Innovation & Entrepreneurship Workshop with real photos
  - IIC Annual Activities 2023-24 - 399 events documented
- **IP UTSAV Week 2025** (April 22-26) - World IP Day Celebrations:
  - Design Registrations (Prof. Gargate, Prof. B.K. Chakravarthy - IIT Bombay)
  - Copyrights Uncovered (Anooja, Dr. Hemant Khosla - Deputy Registrar)
  - Trademarks Talk (Dr. Rahul Taneja - Govt. of Haryana)
  - IP Protection & Commercialization (Dr. Kulkarni - CSIR, Top 100 IP Leaders)
  - Patent to Product (Mr. Jai Veer - Asst. Controller, IP Office)
- IP UTSAV summary stats (5 sessions, 360+ participants, 72 ambassadors, 7 speakers)
- Event cards with image zoom effects and badge overlays
- YouTube video links and PDF/DOCX report downloads
- Speaker info with expert credentials
- Confetti animation in hero

### Resources & Downloads (resources.html)
- Searchable resource library
- **9 download categories** including:
  - **IIC Reports & Documents** (8 files): Annual Report, MIC Orientation, Q3/Q4 Plans, Activities Summary, Advance Level Training
  - **IP UTSAV 2025 Reports** (5 files): All 5 session reports (April 22-26)
  - **Academic Resources** (7 files): B.Tech syllabus (CSE, AI-DS, CSE-AI, Data Science, Cyber Security, Civil), MBA VR25 Regulations
- Featured categories with pulsing badges ("Updated", "World IP Day", "VR23/VR25")
- Purple-themed IP UTSAV category, Green-themed Academic category
- 60+ downloadable files
- Prototype development guidelines
- Workshop materials archive
- Floating document animations

### Contact (contact.html)
- Contact info cards (location, phone, email, hours)
- **Real IIC Team Directory** with 6 members from IIC Annual Report:
  - Dr. V. Madhusudhan Rao (President/Rector) - Fellow of Royal Society
  - Dr. Sudhakar Jyothula (Convenor/Principal) - Ph.D. JNTUK
  - Dr. T. Archana Acharya (Innovation Coordinator)
  - Dr. K. Srinivasa Naik (Startup Coordinator)
  - Dr. Ch. Bharat Kumar (IPR Coordinator)
  - Mr. Malleswara Rao V Anupoju (External Expert, STPI)
- Featured member cards with role-based avatar colors (gold for president, green for convenor)
- IIC Committee Meeting photo gallery with hover overlays
- Multi-tab inquiry system (4 forms: Idea, Prototype, Industry, Research)
- Form validation with loading states

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
- **Integrated Real Content from IIC Annual Report 2023-24**:
  - Updated Contact page with real IIC team members (Dr. V. Madhusudhan Rao, Dr. Sudhakar Jyothula, etc.)
  - Added real events: MIC Orientation (Aug 2024), IP Awareness Session (April 2025)
  - Added downloadable PDF reports: IIC Annual Report, MIC Orientation Report
  - Updated Idea Lab gallery with real workshop and meeting photos
- **Enhanced CSS Effects**:
  - Featured team cards with gradient avatars and role-based color coding
  - Meeting photo gallery with hover overlays
  - Event cards with image zoom effects and badge overlays
  - Featured resource categories with pulsing "Updated" badges
  - Speaker info sections with expert credentials
  - Video link styling for YouTube integration
- **File Organization**:
  - assets/events/ - Workshop and event photos
  - assets/team/ - IIC committee meeting photos
  - assets/documents/ - Downloadable PDF reports
- Created Idea Lab, Projects, Events, Resources, Contact pages
- Added auto-scrolling achievements banner to all new pages
- Updated navigation to 10 pages across entire site
