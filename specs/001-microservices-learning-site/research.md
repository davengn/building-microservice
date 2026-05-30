# Research: Interactive Microservices Learning Website

## Decision: Use a static-first Next.js App Router application

**Rationale**: The site is primarily a shareable reading and study experience.
Static routes keep chapter pages fast, easy to deploy, and independent of
runtime services. Next.js App Router supports static generation, MDX rendering,
route-level metadata, optional route handlers for future AI actions, and a
component model that fits interactive diagrams and study tools.

**Alternatives considered**:
- Plain static site generator: simpler, but weaker for embedded React learning
  tools and future optional AI actions.
- Full backend application: unnecessary for the first release because accounts,
  server persistence, and private user data are out of scope.
- Documentation-only framework: fast to start, but less flexible for custom
  knowledge graph, review interactions, and the `DESIGN.md` visual system.

## Decision: Keep `references/` private and publish only original MDX content

**Rationale**: The constitution requires source material to remain private input.
The content pipeline will read local source markdown, preserve source pointers,
and produce original study notes, summaries, diagrams, examples, and metadata
under `content/`. Public artifacts will be audited to ensure source files and
raw copied chapters are not shipped.

**Alternatives considered**:
- Render extracted chapter markdown directly: rejected because it would create a
  public copy of copyrighted source text.
- Store source text in the app bundle and hide it behind UI: rejected because it
  still ships private source material.
- Hand-author everything without source pointers: rejected because it weakens
  reviewability and traceability.

## Decision: Use Zod-validated frontmatter and generated indexes

**Rationale**: Chapters, concepts, diagrams, examples, glossary entries, review
items, and graph edges need consistent metadata for navigation, search, progress,
and source traceability. Zod gives runtime validation during content generation
and build-time failures for missing slugs, source refs, editorial status, or
relationship fields.

**Alternatives considered**:
- Ad hoc markdown frontmatter parsing: rejected because metadata consistency is
  central to search and graph features.
- Database-backed content: unnecessary for the first release and would add
  operational cost.
- Hardcoded navigation arrays: rejected because they do not scale across the full
  book or support future editorial updates.

## Decision: Use MDX for public learning pages

**Rationale**: MDX supports long-form documentation with embedded custom
components, diagrams, quizzes, callouts, examples, and comparison matrices. This
matches the goal of turning passive source material into interactive lessons
without forcing every learning unit into bespoke page code.

**Alternatives considered**:
- Markdown only: insufficient for interactive architecture explorers and review
  components.
- CMS: unnecessary for the current local-first content workflow.
- Raw React pages for every chapter: too repetitive and hard to maintain.

## Decision: Use Mermaid, React Flow, and SVG for visual learning

**Rationale**: Mermaid covers sequence, flow, state, and architecture diagrams in
an authorable text format. React Flow covers interactive architecture explorers
and concept graphs. SVG handles polished static illustrations and responsive
fallbacks. Together they satisfy the visualization requirements without forcing
one tool to handle every diagram type.

**Alternatives considered**:
- Mermaid only: insufficient for interactive graph exploration and custom UI
  states.
- Canvas-only diagrams: harder to make accessible and searchable.
- Static images only: weaker for responsive behavior and source-control review.

## Decision: Use Pagefind plus generated metadata indexes for search

**Rationale**: Pagefind indexes public built pages, which aligns with the
source-use boundary because private `references/` files are never indexed or
shipped. A separate generated metadata index supports concept, pattern,
architecture, diagram, glossary, and review discovery.

**Alternatives considered**:
- Hosted search service: adds external dependency and operational setup before
  the content model is stable.
- Client-side search over raw content files: risks shipping private source
  material or oversized bundles.
- Simple browser find: does not support cross-chapter discovery.

## Decision: Implement the `DESIGN.md` system as Tailwind tokens plus shadcn/ui

**Rationale**: The supplied design file defines a clear Notion-inspired system:
deep navy hero band, purple primary actions, pastel cards, 8px buttons, 12px
cards, documentation typography, and responsive rules. Tailwind tokens and
shadcn/ui primitives provide repeatable implementation while leaving room for
custom learning components.

**Alternatives considered**:
- Use an off-the-shelf documentation theme unchanged: faster, but would not
  follow the supplied visual direction.
- Handwrite all component styles ad hoc: likely to drift from `DESIGN.md`.
- Heavy animation-first design: inappropriate for dense study workflows.

## Decision: Treat AI-assisted study actions as progressive enhancement

**Rationale**: The site must remain useful without AI. Optional actions can be
modeled as prompt templates and later connected to a serverless provider when
configured. Authored content, diagrams, search, and review items remain the core
experience.

**Alternatives considered**:
- Make AI required for summaries and examples: rejected because it weakens
  reproducibility and offline/static usability.
- Exclude AI entirely from the plan: rejected because the prompt explicitly
  recommends these features and the architecture can support them safely later.

## Decision: Validate source exclusion, links, accessibility, and responsive flows

**Rationale**: Shareability depends on correctness and trust. The implementation
will include build-time validation for `references/` exclusion, generated route
links, metadata completeness, accessible diagram alternatives, dark/light
contrast, and responsive reader journeys.

**Alternatives considered**:
- Manual review only: too easy to miss leaked source artifacts or broken links.
- Delay validation until deployment: slower feedback and higher risk.
