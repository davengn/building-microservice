# Quickstart: Interactive Microservices Learning Website

## Prerequisites

- Node.js 22 LTS or newer LTS
- pnpm
- Local source materials remain under `references/`

## 1. Install Dependencies

```bash
pnpm install
```

## 2. Validate Source Inputs

```bash
pnpm run content:check-sources
```

Expected result:
- All chapter markdown files are found under `references/chapters/`.
- The source PDF is found under `references/`.
- No source file is registered as a public asset.

## 3. Generate Public Learning Content Drafts

```bash
pnpm run content:generate
```

Expected result:
- Draft original MDX records are created or updated under `content/`.
- Each record has source refs, slug, tags, and editorial status.
- Generated content requires editorial review before publication.

## 4. Validate Content, Graph, and Search Metadata

```bash
pnpm run content:validate
pnpm run graph:validate
pnpm run search:build
```

Expected result:
- All frontmatter passes schema validation.
- Concept graph edges reference existing nodes.
- Search indexes are generated from public content only.

## 5. Run the Site Locally

```bash
pnpm run dev
```

Open the local URL and verify:
- `/` shows the learning dashboard.
- `/chapters` lists all chapters.
- `/chapters/what-are-microservices` renders a guided chapter page.
- `/search` finds public chapters and concepts.
- `/graph` displays concept relationships.

## 6. Run Quality Gates

```bash
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run test:e2e
pnpm run a11y
pnpm run links:check
pnpm run audit:source
pnpm run build
```

Expected result:
- No lint, type, unit, e2e, accessibility, or link failures.
- `audit:source` confirms public artifacts exclude `references/`, raw source
  markdown, and the source PDF.
- Build completes with static public routes.

## 7. Reader Journey Smoke Test

Validate the core path:

```text
/ -> /chapters -> /chapters/[slug] -> concept link -> /concepts/[slug] -> /search -> /graph -> /review
```

Pass criteria:
- A first-time reader reaches a chapter lesson quickly.
- A returning reader can find a concept within three interactions.
- Diagrams remain readable in light and dark modes.
- Mobile layout preserves navigation, search, and table of contents access.
