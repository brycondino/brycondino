# Results-First Portfolio Design

## Purpose

Rebuild Bryan Condino's GitHub Pages homepage as a recruiter- and client-friendly portfolio inspired by the information hierarchy of adstrategistchris.com while retaining Bryan's own visual identity, technical content, project links, and theme behavior.

## Experience Strategy

The page should establish credibility in the first viewport, support every major claim with a measurable outcome or working project, and lead visitors toward viewing work, downloading the resume, or contacting Bryan. It must not copy the reference site's branding, wording, client claims, or creative assets.

## Page Structure

1. Fixed navigation with Bryan's circular profile photo, name, role, section links, and a primary contact button.
2. Results-first hero with availability label, role, outcome-focused headline, supporting copy, project and contact calls to action, a large profile portrait, and four achievement callouts.
3. Technology strip featuring Oracle, PL/SQL, AWS, Python, Cypress, and Oracle APEX.
4. About section describing Bryan's combined backend, database, reporting, automation, QA, and AI experience.
5. Results section with the approved metrics: 10+ years in IT, up to 40% database/reporting improvement, 70% reduction in manual processing, and 99.9% supported-system uptime.
6. Case studies featuring Interactive Reports, Oracle and SQL Performance, AWS Data Automation, AI Workflow Applications, and QA Automation. Working demos must link to `reports.html` and `ai.html`.
7. Four-step delivery process: Analyze, Design, Build, Validate and Support.
8. Services grid covering Backend and Database Development, Reporting and Dashboards, AI Workflow Applications, QA Automation, and Cloud and ETL Automation.
9. How I Work section using professional principles instead of fabricated testimonials.
10. FAQ covering experience, technologies, reports, AI, project types, and contact.
11. Strong final contact section and multi-column footer.

## Visual Direction

- Dark navy/black base with electric-blue primary accents, cyan support accents, subtle grid and glow effects, and restrained glass panels.
- Space Grotesk for display headings and Inter for body copy.
- Rounded cards, fine borders, outcome badges, section labels, and generous desktop spacing.
- Bright mode uses light blue-gray surfaces and dark text while preserving the same information hierarchy.
- The hero portrait is circular and fully visible at load. Clicking it switches theme and swaps between `profile-photo.jpg` and `profile-photo2.png`; the selected mode remains stored in `localStorage` under `portfolioTheme`.

## Interaction and Accessibility

- All navigation, case-study cards, service links, and calls to action are keyboard accessible.
- FAQ uses native `details` and `summary` controls.
- Mobile navigation collapses into a native disclosure control without external dependencies.
- GSAP enhances entrances and scroll reveals but the page remains complete and visible if GSAP is blocked or reduced motion is enabled.
- Focus states, semantic landmarks, descriptive alt text, and minimum touch target sizes are required.

## Responsive Behavior

- Desktop: two-column hero, four-column metrics, alternating case-study cards, and multi-column process/service grids.
- Tablet: reduced navigation, two-column cards, and a balanced hero.
- Mobile: single-column content, portrait displayed near the top, full-width calls to action, readable metrics, and a usable menu.

## Scope

The redesign changes `index.html` and the shared homepage animation behavior in `site-animations.js`. Existing `ai.html`, `reports.html`, images, favicon assets, and resume discovery remain intact.

## Verification

- Static contract tests verify section order, navigation targets, required metrics, working project links, theme behavior, image sources, FAQ semantics, and accessibility labels.
- Browser verification covers desktop and mobile layouts, theme switching, profile visibility, navigation, links, console errors, and reduced-motion safety.
