# Sci-Fi Background and Hybrid Cursor Design

**Date:** 2026-07-19  
**Repository:** `brycondino/brycondino`  
**Target:** Portfolio homepage (`index.html`) and its existing animation assets

## 1. Goal

Upgrade the portfolio’s visual background and pointer interaction so the site feels modern and sci-fi while remaining professional, readable, responsive, accessible, and lightweight.

The final experience will preserve the current dark/bright theme switch and enhance the existing canvas-based machine animation instead of introducing a heavy 3D or WebGL dependency.

## 2. Approved Visual Direction

### Background

The existing rotating circuit-machine canvas will be evolved into a layered futuristic environment with:

- multiple concentric circuit arcs and radial machine segments;
- subtle drifting data particles;
- a soft animated scanning beam;
- small illuminated nodes and signal pulses;
- gentle pointer-based parallax;
- restrained cyan and blue glow in dark mode;
- adjusted blue tones and reduced opacity in bright mode.

The animation must remain behind all content and must never reduce text readability.

### Hybrid Cursor

Desktop users with a precise pointer will see:

- a small glowing circular reticle around the native pointer position;
- a centered dot that follows the pointer quickly;
- an outer ring that follows with slight easing;
- a very short trail of fading particles;
- a brighter, slightly enlarged state over interactive elements such as links, buttons, and cards;
- a brief pulse when clicking.

The effect must not block clicks, text selection, scrolling, or keyboard navigation.

## 3. Architecture

### Existing Files

- `index.html` contains the page structure, styles, theme logic, and the `#machineBackground` canvas.
- `machine-background.js` renders the current animated machine background.
- `site-animations.js` manages entrance, scroll, and card animations.

### Planned Changes

#### `machine-background.js`

Extend the existing canvas renderer rather than replacing it. The updated module will manage:

1. viewport and device-pixel-ratio sizing;
2. background machine geometry;
3. scanner and signal animation;
4. drifting background particles;
5. pointer parallax values;
6. visibility and reduced-motion lifecycle handling.

The code will keep a single `requestAnimationFrame` loop and reuse particle objects instead of constantly creating new objects.

#### New `sci-fi-cursor.js`

Create a dedicated cursor module so cursor behavior remains isolated from the background renderer. It will:

1. detect pointer capability and reduced-motion preferences;
2. create the reticle, center dot, and trail elements at runtime;
3. track pointer position using eased coordinates;
4. detect interactive hover targets through event delegation;
5. render a limited number of reusable trail particles;
6. pause when the page is hidden;
7. remove or disable the effect when unsupported.

#### `index.html`

Add:

- cursor-specific CSS variables and styles;
- styles for hover, active, and disabled states;
- the new cursor script reference after the background script;
- stronger but restrained background canvas opacity and layering adjustments;
- responsive and accessibility fallbacks.

The native cursor will remain available unless the custom cursor is fully initialized. On supported desktop pointers, the native cursor may be hidden only for the page areas where the custom reticle is active.

## 4. Interaction Behavior

### Normal Movement

- The center point closely tracks the pointer.
- The outer reticle follows with a small delay to create a smooth targeting effect.
- Trail particles appear at controlled distance intervals rather than on every pointer event.
- Trail particles fade and shrink quickly, keeping the effect light.

### Interactive Elements

When hovering over `a`, `button`, clickable cards, form controls, or elements explicitly marked as interactive:

- the reticle expands slightly;
- glow intensity increases;
- the ring rotation or pulse speed increases subtly;
- the pointer remains precise enough to communicate the click location.

### Click Feedback

Pointer down triggers a short compression and glow pulse. Pointer up restores the hover or normal state.

### Pointer Leave

The cursor effect fades when the pointer leaves the document and returns smoothly when it re-enters.

## 5. Theme Support

### Dark Mode

- cyan and electric-blue reticle;
- darker transparent ring surfaces;
- stronger but controlled glow;
- background machine and particles visible at low-to-medium opacity.

### Bright Mode

- deeper blue and teal accents;
- lower glow opacity;
- darker cursor outlines for contrast;
- reduced background intensity to preserve readability.

Theme changes will be detected from the existing `bright-mode` class, so no duplicate theme state will be introduced.

## 6. Performance Requirements

- Use no new external animation or 3D libraries.
- Keep one animation loop for the background and one lightweight loop for the cursor.
- Cap effective canvas pixel ratio at `2`.
- Use a fixed, small particle pool.
- Avoid DOM creation during continuous pointer movement.
- Use passive pointer and resize listeners where appropriate.
- Pause animations while the browser tab is hidden.
- Avoid layout reads inside animation frames where possible.
- Keep canvas and cursor elements non-interactive with `pointer-events: none`.

## 7. Responsive and Accessibility Behavior

The custom cursor and pointer trail will be disabled when:

- the primary pointer is coarse;
- hover is unavailable;
- the device is touch-first;
- `prefers-reduced-motion: reduce` is enabled.

For reduced motion:

- the machine background will render a static or nearly static frame;
- drifting particles, scanning motion, parallax, trail effects, and cursor easing will not run;
- the standard operating-system cursor remains visible.

Keyboard focus indicators will remain unchanged and visible. The cursor elements will be decorative and excluded from the accessibility tree.

## 8. Error Handling and Fallbacks

- If canvas rendering is unavailable, the site will retain its CSS gradients and grid background.
- If cursor initialization fails, the standard cursor remains active.
- Missing optional APIs such as `matchMedia` or `IntersectionObserver` will not prevent core site use.
- JavaScript errors in either visual effect must not interfere with navigation, theme switching, résumé links, or page content.

## 9. Testing Plan

### Functional

- Verify pointer movement, hover expansion, click pulse, and pointer-leave behavior.
- Verify all links, buttons, cards, theme controls, and résumé downloads remain clickable.
- Verify theme switching immediately updates cursor and background colors.
- Verify the effect does not interfere with text selection or scrolling.

### Responsive

Test at representative desktop, tablet, and mobile widths. Confirm:

- desktop precise pointers receive the hybrid cursor;
- touch and coarse-pointer devices retain the native cursor and no trail;
- the background scales without clipping important content;
- no horizontal overflow is introduced.

### Accessibility

- Test keyboard-only navigation.
- Test `prefers-reduced-motion: reduce`.
- Confirm decorative cursor nodes are hidden from assistive technology.
- Confirm focus outlines remain visible in both themes.

### Performance

- Inspect Chrome Performance while moving the pointer and scrolling.
- Confirm animation frames do not repeatedly trigger layout.
- Confirm particle counts remain bounded.
- Confirm animation pauses when the tab is hidden.

## 10. Acceptance Criteria

The work is complete when:

1. the homepage background has a clearly more futuristic layered machine effect;
2. supported desktop devices show a subtle reticle and light particle trail;
3. interactive elements produce a clear but restrained hover state;
4. dark and bright themes both remain readable and visually coherent;
5. touch devices and reduced-motion users receive safe fallbacks;
6. navigation, cards, theme switching, and résumé actions continue to work;
7. no new third-party runtime dependency is added;
8. the effect remains smooth under normal desktop use and does not create unbounded DOM nodes or particles.

## 11. Out of Scope

- WebGL, Three.js, or full 3D scenes;
- audio effects;
- large background images or video;
- redesigning portfolio content, typography, or page structure;
- changing existing case studies or résumé content;
- applying the custom cursor to unrelated standalone demo pages unless explicitly requested later.
