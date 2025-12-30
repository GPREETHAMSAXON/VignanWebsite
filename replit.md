# Centre for Innovation & Startups - VIIT

## Overview
A static website for Vignan's Institute of Information Technology's Centre for Innovation & Startups. The site showcases the institution's innovation ecosystem, achievements, and startup support programs.

## Project Structure
```
/
├── index.html          # Main homepage
├── innovation.html     # Innovation Cell page
├── styles.css          # Main stylesheet with design tokens
├── innovation.css      # Innovation page styles
├── scripts.js          # Main JavaScript (theme toggle, animations)
├── server.py           # Python HTTP server for local development
├── assets/
│   ├── images/         # Logo and general images
│   └── achievments/    # Achievement photos
└── .gitignore          # Git ignore file
```

## Technologies
- HTML5 with Tailwind CSS (via CDN)
- Custom CSS with design tokens (CSS variables)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Inter, Playfair Display)

## Design System
The website uses CSS custom properties (design tokens) for:
- Color palette (primary, surface, text colors)
- Shadows (sm, md, lg)
- Border radius (md, lg)
- Transitions (fast, normal)
- Dark mode support with automatic variable overrides

## Accessibility
- Reduced motion support via `prefers-reduced-motion` media query
- Semantic HTML structure
- ARIA labels on interactive elements

## Development
The website is served using Python's built-in HTTP server on port 5000.

Run locally with: `python server.py`

## Deployment
This is a static website - deploy the entire directory as static files.
