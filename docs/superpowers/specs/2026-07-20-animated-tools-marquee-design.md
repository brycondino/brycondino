# Animated Tools Marquee Design

**Date:** 2026-07-20  
**Status:** Approved for implementation planning

## Goal

Replace the current six-item static technology strip with a richer two-row animated marquee that represents the tools and platforms listed in Bryan Condino’s CV, while preserving the rest of the homepage unchanged.

## Scope

- Change only the homepage technology strip and its supporting animation/test code.
- Keep the hero, About, Results, Case Studies, Process, Services, Work Style, FAQ, and Contact sections unchanged.
- Use a hybrid visual treatment: recognizable brand marks for major technologies and styled text/initial badges for tools where local brand artwork would add unnecessary weight.
- Do not rely on remote image URLs at runtime.

## Tool Inventory

The marquee should cover the CV’s technical toolkit:

### Databases and data tools
- Oracle
- MySQL
- PostgreSQL
- SQL
- PL/SQL
- TOAD for Oracle
- SQL Developer
- MySQL Workbench
- pgAdmin
- ETL
- Data Modelling
- Data Lineage

### Programming and scripting
- Python
- Unix Shell
- Perl

### AWS and integration
- AWS
- Lambda
- RDS
- S3
- EC2
- API Gateway
- EventBridge
- CloudWatch
- Secrets Manager
- API Integration
- Workflow Automation

### Engineering tools and platforms
- Git
- JIRA
- Postman
- WinSCP
- Cypress
- CircleCI
- Oracle APEX
- Confluence

### Environments and delivery practices
- UNIX
- Linux
- Windows
- Agile
- Scrum
- SDLC

## Visual Design

The existing heading remains above the strip. Below it, the static six-column row becomes two horizontal lanes.

- The top lane moves continuously from right to left.
- The bottom lane moves continuously from left to right.
- Each lane contains a duplicated sequence of items so the animation loops without a visible jump.
- Each item uses a circular or rounded icon badge followed by the readable tool name.
- Major technologies such as Oracle, AWS, Python, Git, PostgreSQL, MySQL, Postman, Cypress, and Oracle APEX use small recognizable vector-style marks or letter-based approximations drawn with local HTML/CSS/SVG.
- Less visual tools use consistent monogram badges, such as `PL`, `SH`, `ETL`, `CW`, or `JIRA`.
- The presentation stays aligned with the existing dark sci-fi theme: subtle cyan borders, low-intensity glow, glass-like badge surfaces, and high-contrast labels.

## Interaction and Motion

- Use CSS keyframe animation rather than JavaScript frame loops.
- Keep animation smooth and moderate, approximately 38–48 seconds per full lane cycle on desktop.
- Pause the lane when the user hovers or keyboard-focuses within the strip.
- Use gradient edge masks so items appear to enter and leave naturally.
- Do not add bouncing, scaling, or distracting per-item animation.
- In `prefers-reduced-motion: reduce`, disable marquee movement and render a readable wrapping grid.

## Responsive Behavior

- Desktop: two full-width rows with comfortable spacing and medium badges.
- Tablet: retain two rows, reduce gaps and badge size slightly.
- Mobile: keep two horizontally clipped rows with slower motion, or use the static wrapping fallback when reduced motion is enabled.
- All labels remain readable and are never truncated.

## Accessibility

- The technology names remain real text, not text embedded in images.
- Decorative icon marks use `aria-hidden="true"`.
- The duplicated marquee copy is hidden from assistive technology to avoid repeated announcements.
- The original technology-strip label remains available as the section description.
- Focus within the strip pauses animation.

## Implementation Boundaries

- `index.html` owns the semantic marquee markup and styling.
- `site-animations.js` should not manage the marquee’s movement; CSS provides the motion.
- `tests/portfolio.test.mjs` verifies the expanded tool inventory, two-lane structure, duplicate accessibility treatment, and reduced-motion fallback.
- No external JavaScript library or runtime asset request is required.

## Verification

Implementation is complete when:

- The old six-item static row is replaced by two animated lanes.
- The CV tool inventory is represented without altering unrelated homepage sections.
- The two lanes move in opposite directions and loop seamlessly.
- Hover/focus pause behavior works.
- Reduced-motion users receive a static readable layout.
- The markup remains valid and responsive.
- Portfolio tests, JavaScript syntax checks, HTML validation, and `git diff --check` pass.
