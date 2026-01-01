# Centre for Innovation & Startups - VIIT

## Overview
A static website for Vignan's Institute of Information Technology's Centre for Innovation & Startups. The site showcases the institution's innovation ecosystem, achievements, and startup support programs. **Redesigned to match the official VIIT website style (vignaniit.edu.in)**.

## Project Structure
```
/
├── index.html          # Main homepage (redesigned)
├── innovation.html     # Innovation Cell page
├── styles.css          # Main stylesheet (VIIT official style)
├── innovation.css      # Innovation page styles
├── scripts.js          # JavaScript (theme toggle, animations)
├── server.py           # Python HTTP server for local development
├── assets/
│   ├── images/         # Logo and general images
│   └── achievments/    # Achievement photos
└── .gitignore          # Git ignore file
```

## Technologies
- HTML5 with Tailwind CSS (via CDN)
- Custom CSS with VIIT official color scheme
- Vanilla JavaScript (counter animations, mobile menu)
- Font Awesome icons
- Google Fonts (Poppins, Playfair Display)

## Design System (VIIT Official Style)
- **Primary Color**: #1e40af (Blue)
- **Dark Color**: #0a1628 (Navy)
- **Secondary**: #60a5fa (Light Blue)
- **Fonts**: Poppins (body), Playfair Display (headings)

## Key Sections
1. Dark top bar with contact info and social links
2. Sticky navigation header with logo
3. Hero section with embedded YouTube video
4. Announcements section with date-based timeline
5. Recognitions & Accreditations (NAAC A+, NBA, UGC, NIRF)
6. Innovation at a Glance - animated statistics counters
7. Programs section with icon cards
8. Achievement scroller
9. About section with 360° virtual tour
10. Footer with multiple link columns

## Accessibility
- Reduced motion support via `prefers-reduced-motion` media query
- Semantic HTML structure
- Mobile responsive design

## Development
The website is served using Python's built-in HTTP server on port 5000.

Run locally with: `python server.py`

## Deployment
This is a static website - deploy the entire directory as static files.

## Recent Changes (Jan 2026)
- Complete redesign to match official VIIT website (vignaniit.edu.in)
- Added dark top bar with contact information
- Implemented announcements section with date badges
- Added recognitions & accreditations section
- Created animated statistics counters
- Added programs section with gradient icon cards
- Updated footer to match official branding
