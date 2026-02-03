# AI Rules & Conventions

Purpose
- This document explains the project's tech stack and sets clear rules for what libraries and tools should be used for which responsibilities, plus a few contributor conventions to keep the codebase consistent, secure, and maintainable.

Tech stack (short)
- React 18 + TypeScript (strict typing for all new code).
- Vite as the dev/build tool.
- Tailwind CSS for all styling and responsive layout utilities.
- shadcn/ui + Radix primitives for UI components and patterns (preferred for consistent UI).
- lucide-react for icons.
- react-helmet-async for page metadata / SEO.
- react-markdown for safe rendering of article/markdown content.
- fuse.js for client-side fuzzy search.
- Optional: @google/generative-ai (Gemini) — only add this when you explicitly plan to implement approved server-side AI workflows and have appropriate secrets handling and approval.

Notes on optional generative-ai usage:
- Generative model integrations (like Gemini) are optional. The site is fully functional without any external AI provider: Search and the "AI" tab operate from local site content using Fuse.js and local summarization by default.
- If you need to add generative model capabilities, prefer server-side integrations only (see "AI / Generative models" section below). Do not add keys to client bundles.

Library usage rules
- UI & Styling
  - Use Tailwind CSS for all layout, spacing, color, and responsive rules.
  - Prefer shadcn/ui components when a standard control exists (buttons, modals, toasts, inputs). Do not copy or modify the shadcn/ui library files — instead wrap or compose them in src/components/.
  - Keep custom components small and focused (aim for ≤ 100 lines). Create a new file for every new component in src/components/.
  - All designs must be responsive and respect the app's RTL layout (index.css sets dir: rtl).

- Icons
  - Use lucide-react for icons across the app. Avoid mixing multiple icon libraries.

- Routing & Navigation
  - For this project, rely on the existing RouterContext (src/contexts/RouterContext.tsx) for in-app navigation. Do not introduce a parallel routing approach without discussion.
  - If you must use react-router-dom for larger route needs, keep the routes centralized in src/App.tsx and update App.tsx accordingly — coordinate before making that architectural change.

- Page & component placement
  - Pages: put them in src/pages/.
  - Components: put them in src/components/.
  - Types: keep shared types in src/types.ts.
  - The main page(s) must be wired into App.tsx so changes are visible in the running app.

- SEO & Accessibility
  - Use react-helmet-async via the existing SEO component (src/components/SEO.tsx) to set canonical URLs, meta descriptions, and Open Graph tags.
  - Use semantic HTML + Tailwind classes. Ensure interactive controls have accessible labels and keyboard support.

- Content & Markdown
  - Use react-markdown where markdown rendering is required, and sanitize / limit allowed node types as needed.
  - For glossary/highlighting behavior, use the existing GlossaryHighlighter component.

- Search
  - Use Fuse.js (already present) for client-side fuzzy matching. Keep search configuration (keys, thresholds) in a single place and avoid duplicating it.
  - The app ships with a local, non-external "AI" summarizer in SearchModal that aggregates search hits and glossary matches into a readable local summary — no external API key required.

- AI / Generative models
  - Generative model integrations are optional and must be approved before inclusion.
  - Use @google/generative-ai (Gemini) only for approved, server-side workflows where keys can be kept secret.
  - Never commit API keys. Require any provider API key to be provided via environment variables on the server and keep keys out of the repo.
  - Prefer server-side calls for any sensitive / high-volume AI operations. If calling AI from the client (not recommended), the key must be restricted and the team must understand the risk; prefer a server-side proxy that performs the call and hides keys.
  - Always anonymize PII and sensitive data before sending to any external AI provider. Follow the app's privacy rules (e.g., avoid sending full documents with private data unless anonymized).
  - Provide a short, explicit system instruction and context when doing RAG-style operations; limit token budgets and enforce content constraints (do not allow the model to fabricate critical facts).
  - If you implement server-side AI, document the endpoint, required env variables (e.g., GEMINI_API_KEY), and intended rate limits and audit logs in the repo README — do not leave API key setup implicit.

- Notifications & feedback
  - Use toast notifications for user-visible events (success, error, info). Prefer an existing shadcn/ui or a small, focused toast library; coordinate on which package to add if not already present.
  - Visual feedback (loading spinners, disabled states) must be present for long-running operations.

- Adding new dependencies
  - Ask for approval before adding large or opinionated libraries.
  - Small utility libraries may be added with justification — keep the dependency list lean.
  - If you add any npm package, update package.json and the team README accordingly.

Security & privacy rules
- No secrets in source control (env files must be excluded by .gitignore).
- Do not send raw personal data, credentials, or secret tokens to AI services.
- If storing outputs that may contain PII, document retention and deletion policy.

Developer conventions
- TypeScript: types for component props and shared data (no implicit any).
- Component files: place in src/components, export default single component per file.
- Keep the app consistent with RTL direction and Hebrew text where appropriate.
- Limit changes to only the files required by your feature/bugfix; do not refactor unrelated code in the same PR.
- Use toasts to communicate important events to users (save success, error, copy-to-clipboard).

When to escalate / get approval
- Introducing server-side components (APIs) for AI calls.
- Adding an authentication provider or a datastore.
- Major changes to navigation (introducing react-router-dom if RouterContext is in use).
- Adding tracking/analytics or changing data retention policies.

Guidance: enabling server-side AI safely
- Add a server endpoint (e.g., /api/ai/query) that accepts sanitized inputs, calls the provider (Gemini or other), and returns results. This keeps keys on the server and audit logging possible.
- Rate-limit endpoints and require authentication for high-risk operations.
- Implement an allowlist and redaction for PII in server-side input processing.
- Log inputs/outputs for debugging but mask or redact PII before storage.
- Make server-side integration optional: the app should degrade gracefully to local-only behavior (SearchModal already does).

Contact & notes
- If in doubt about architecture (routing, AI calls, server-side work), open an issue and tag the maintainers before implementing.
- This document is intended to keep contributions predictable and safe — update it as the project evolves.