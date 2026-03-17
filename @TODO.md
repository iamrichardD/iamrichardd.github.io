# Branding Site Backlog (@TODO.md)

## 1. Content & Narrative Alignment
- [ ] **Resume Alignment:** Audit `src/pages/resume.astro` to integrate the Pharos "Collaborative Force Multiplier" narrative.
- [ ] **Visual Asset Strategy:** Create `/public/assets/projects/pharos/` for high-resolution CLI and Web Console screenshots.
- [ ] **Agentic Case Study:** Implement an MDX vertical slice for a deep dive into the Pharos ecosystem (RFC 2378, webMCP).
- [ ] **Agentic Blog Post:** Author "Eliminating the Hallucination Gap" article for the site's blog.

## 2. Infrastructure & Rigor
- [ ] **Build Verification:** Execute `npm run build` in `gh-pages-src/` to validate the new "Systems Architecture" card.
- [ ] **Preflight Automation:** Implement a `scripts/pre-flight.sh` (modeled after Pharos) to automate Astro/Tailwind validation.

## 3. Deployment
- [ ] **Atomic PR:** Commit and push the current increment of "Systems Architecture" integration.
- [ ] **Live Verification:** Use `web_fetch` to verify the live site after GitHub Action completion.
