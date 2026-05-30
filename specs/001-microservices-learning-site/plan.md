# Implementation Plan: Interactive Microservices Learning Website

**Branch**: `001-microservices-learning-site` | **Date**: 2026-05-30 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-microservices-learning-site/spec.md`

## Summary

Build a static-first, premium developer education website that transforms the
local source book PDF and extracted markdown chapters into original guided
lessons, visual explanations, search, a concept graph, and review tools. The
implementation will scaffold a Next.js/TypeScript/MDX application with a
content pipeline that reads private source files from `references/`, writes
public original learning content under `content/`, validates metadata and source
boundaries at build time, and follows the Notion-inspired UI direction in
`DESIGN.md`.

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 22 LTS or newer LTS, React 19-compatible Next.js App Router

**Primary Dependencies**: Next.js App Router, React, MDX, TailwindCSS, shadcn/ui, Framer Motion, React Flow, Mermaid, Zod, Pagefind, lucide-react

**Storage**: File-based content and generated JSON indexes; no database for the first release

**Testing**: Vitest for schema/unit tests, React Testing Library for components, Playwright for reader journeys and responsive checks, axe accessibility checks, link checker, source-artifact audit script

**Target Platform**: Static web deployment with optional serverless endpoints only for AI-assisted study actions

**Project Type**: Static-first web application and content pipeline

**Performance Goals**: Overview and chapter routes render from generated static content; search usable offline after page load; core reading pages target fast static delivery and no blocking AI dependency

**Constraints**: `references/` must remain private input and never ship in public artifacts; public pages must be original summaries/commentary/diagrams/examples; UI must follow `DESIGN.md`; site must support light/dark modes, desktop-first reading, and mobile usability

**Scale/Scope**: 18 source chapter markdown files, chapter pages, concept pages, diagrams, examples, glossary entries, review items, search index, and knowledge graph for the full book

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Reader journey**: PASS. Primary flow is overview -> chapter lesson ->
  concept/diagram/review -> related chapter/search revisit path. Public routes
  include `/`, `/chapters`, `/chapters/[slug]`, `/concepts/[slug]`, `/search`,
  `/graph`, `/glossary`, and `/review`.
- **Source-use boundary**: PASS. `references/` is private input only. Public
  content lives under `content/` and is original summary, commentary, diagram,
  example, metadata, or navigation. Build validation will fail if `references/`
  or copied source artifacts appear in public output.
- **Traceability**: PASS. Chapter, section, concept, visualization, example, and
  review entities include source chapter, source section when known, tags,
  slugs, editorial status, and related content IDs.
- **Balanced guidance**: PASS. Concept and example schemas require context,
  tradeoffs, risks, alternatives, anti-patterns, or failure modes for
  recommendation-style content.
- **Shareable-site quality**: PASS. Validation gates include build, lint, type
  check, schema validation, link check, accessibility check, responsive journey
  tests, source-artifact audit, and static search verification.

## Project Structure

### Documentation (this feature)

```text
specs/001-microservices-learning-site/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── content-schema.md
│   ├── routes.md
│   ├── search-index.md
│   └── study-actions.md
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── layout.tsx
├── page.tsx
├── chapters/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── concepts/
│   └── [slug]/page.tsx
├── glossary/
│   └── page.tsx
├── graph/
│   └── page.tsx
├── review/
│   └── page.tsx
└── search/
    └── page.tsx

components/
├── layout/
├── learning/
├── navigation/
├── review/
├── search/
├── ui/
└── visualizations/

content/
├── chapters/
├── concepts/
├── diagrams/
├── examples/
├── glossary/
└── review/

lib/
├── content/
├── graph/
├── search/
├── source-audit/
└── study-actions/

scripts/
├── content/
└── validate/

styles/
└── globals.css

tests/
├── accessibility/
├── e2e/
├── integration/
└── unit/
```

**Structure Decision**: Use a single Next.js application with file-based content,
generated indexes, and test/validation scripts. This keeps the first release
static-first and shareable while leaving optional serverless AI actions isolated
behind `lib/study-actions/` and route handlers if enabled later.

## Phase 0: Research Summary

See [research.md](./research.md). Key decisions:

- Static-first Next.js App Router with MDX content.
- Private `references/` input transformed into public original content under
  `content/`.
- Zod-validated frontmatter and generated indexes.
- Mermaid for portable authored diagrams, React Flow for interactive concept and
  architecture explorers, SVG for custom static illustrations.
- Pagefind for public full-text search and generated metadata indexes for
  concepts, graph edges, diagrams, examples, and review items.
- Tailwind/shadcn/ui tokens adapted from `DESIGN.md`.
- Optional AI actions are progressive enhancement, not a core dependency.

## Phase 1: Design Summary

See [data-model.md](./data-model.md) and `contracts/`.

### Information Architecture

```text
/
├── /chapters
├── /chapters/[slug]
├── /concepts/[slug]
├── /glossary
├── /graph
├── /search
└── /review
```

### UI/UX Direction

- Use `DESIGN.md` as the design source: Notion-inspired editorial geometry,
  deep navy hero band, purple primary actions, pastel feature cards, 8px buttons,
  12px cards, dense documentation layout, and Notion Sans-compatible typography.
- Adapt the marketing-style hero into a learning dashboard: show a real
  "workspace mockup" of chapter progress, concept graph, and study cards.
- Keep chapter pages reading-focused: left chapter nav, central article, right
  table of contents on desktop; stacked navigation on mobile.
- Keep interactive tools compact and embedded in the reading flow rather than
  decorative cards nested inside cards.
- Use Mermaid/React Flow visualizations with accessible captions, text
  alternatives, and mobile fallback layouts.

### Content Pipeline

```text
references/chapters/*.md
  -> scripts/content/normalize-source
  -> editorial/generated draft notes with source pointers
  -> content/chapters/*.mdx and content/concepts/*.mdx
  -> lib/content schema validation
  -> generated graph/search/review indexes
  -> static public routes
```

The pipeline must never copy raw source chapters into public pages. It produces
metadata, source pointers, and original authored learning content.

### Post-Design Constitution Re-Check

- **Reader journey**: PASS. Routes, data model, and quickstart cover overview,
  chapter, concept, search, graph, and review workflows.
- **Source-use boundary**: PASS. Contracts define private source inputs and
  public content boundaries; quickstart includes source artifact validation.
- **Traceability**: PASS. Data model requires source refs, slugs, tags, status,
  relationships, and generated indexes.
- **Balanced guidance**: PASS. Concept and example contracts require tradeoffs,
  risks, alternatives, and anti-patterns.
- **Shareable-site quality**: PASS. Quickstart and tasks prerequisites include
  build, lint, type, link, accessibility, responsive, and source-exclusion gates.

## Complexity Tracking

No constitution violations.
