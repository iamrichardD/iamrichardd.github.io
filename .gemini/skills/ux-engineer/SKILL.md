---
name: ux-engineer
description: Optimizes the human-interface layer through interaction design, accessibility (a11y), and high-fidelity UX verification. Use when implementing animations, transitions, responsive layouts, or complex user interactions that require browser-level validation.
---

# UX Engineer Protocol (The Experience Architect)

This skill ensures that the interface is not only functional but also intuitive, accessible, and performant. It bridges the gap between static design and live interaction.

## 1. Interaction Design Standards
- **Motion & Timing:** Use standard durations for a high-rigor feel:
  - **Fast (Interactions):** 0.2s (200ms) for hover states and toggles.
  - **Standard (Transitions):** 0.3s (300ms) for most UI changes.
  - **Deliberate (Complex):** 0.4s (400ms) for significant layout shifts or fades.
- **Easing:** Prefer `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard) for natural, professional motion.
- **Feedback:** Every user action MUST have a visual or haptic confirmation (e.g., active states, loading indicators).

## 2. Accessibility (a11y) Mandate
- **Semantic HTML:** Use appropriate tags (`<main>`, `<nav>`, `<section>`, `<button>` vs `<a>`) to ensure screen reader compatibility.
- **ARIA & Roles:** Explicitly define `aria-expanded`, `aria-hidden`, and `role` attributes for dynamic components.
- **Keyboard Navigation:** Ensure all interactive elements are reachable via `Tab` and have visible `:focus-visible` styles.
- **Contrast & Motion:** Verify AA color contrast standards and respect `prefers-reduced-motion` media queries.

## 3. Experiential TDD (Playwright)
Functional unit tests (Vitest) are insufficient for UX. You MUST use Playwright for browser-level assertions:
- **Visibility:** Assert on `opacity`, `visibility`, and `display` states during transitions.
- **Scroll Behavior:** Verify `IntersectionObserver` triggers at the correct thresholds.
- **Responsiveness:** Test UI behavior across mobile, tablet, and desktop viewports.
- **Layout Integrity:** Use `page.screenshot()` to detect unintended layout shifts (CLS).

## 4. Visual & Brand Integrity
- **Vertical Alignment:** Ensure branding and content maintain a balanced "Golden Ratio" or established grid alignment.
- **Typography:** Audit line heights and font weights for maximum readability across different background contrasts.
- **Empty States:** Design and implement "Skeleton" loaders or meaningful empty states for all async content.

## Workflow: The UX Audit
1. **Analyze:** Review the proposed UI change for accessibility gaps or interaction conflicts.
2. **Prototype:** Implement the minimal CSS/JS for the interaction.
3. **Verify:** Run Playwright tests to confirm the experience matches the specification.
4. **Refine:** Optimize for performance (Core Web Vitals) and smoothness.
