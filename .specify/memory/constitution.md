<!--
Sync Impact Report
Version change: unratified template -> 1.0.0
Modified principles:
- Template Principle 1 -> I. Reader-Centered Learning
- Template Principle 2 -> II. Respectful Source Use
- Template Principle 3 -> III. Traceable Knowledge Structure
- Template Principle 4 -> IV. Balanced Microservices Guidance
- Template Principle 5 -> V. Quality Gates for a Shareable Site
Added sections:
- Content and Architecture Constraints
- Delivery Workflow
Removed sections:
- Placeholder Section 2
- Placeholder Section 3
Templates requiring updates:
- .specify/templates/plan-template.md: ✅ updated
- .specify/templates/spec-template.md: ✅ updated
- .specify/templates/tasks-template.md: ✅ updated
- .specify/extensions/git/commands/*.md: ✅ reviewed; no changes required
- AGENTS.md: ✅ updated
Follow-up TODOs: None
-->
# Building Microservices Study Website Constitution

## Core Principles

### I. Reader-Centered Learning
Every feature MUST make microservices concepts easier for a working software
engineer to read, revisit, and explain. Content pages MUST prioritize concise
original summaries, concept relationships, glossary links, examples, and
progressive depth over decorative presentation. A feature is incomplete if a
reader cannot identify the concept, why it matters, and where to go next from
the page itself.

Rationale: The project exists to turn a dense reference text into a durable
learning companion, so reader comprehension is the primary product outcome.

### II. Respectful Source Use
Public output MUST be original notes, summaries, commentary, diagrams, examples,
and navigation derived from the source material. Public output MUST NOT
reproduce full chapters, copied paragraphs, proprietary images, proprietary
tables, or other substantial copyrighted content from the source book unless a
written license or permission is recorded in the repository. Any exact quotation
MUST be minimal, attributed, and subordinate to original explanation. Files under
`references/` are private source inputs and MUST NOT be bundled into public or
shareable builds.

Rationale: The site is intended for personal learning and sharing, which requires
respecting copyright boundaries while still enabling useful study notes.

### III. Traceable Knowledge Structure
Every content unit MUST record its source chapter, source section when known,
topic tags, reading status, editorial status, and canonical slug. Navigation,
search, filters, related links, and progress/revisit features MUST operate on
that metadata rather than hardcoded page lists. Generated or edited material MUST
remain traceable to the local markdown chapter that informed it.

Rationale: Traceability lets the site grow chapter by chapter without losing
source context, reviewability, or link stability.

### IV. Balanced Microservices Guidance
Educational content MUST present tradeoffs, boundaries, and failure modes
alongside benefits. Any recommendation about microservices MUST state the
context where it applies, the prerequisite assumptions, and at least one risk,
cost, or alternative. The site MUST avoid presenting microservices as the default
answer for every system.

Rationale: Microservices introduce distributed-system complexity; the learning
experience must preserve that nuance.

### V. Quality Gates for a Shareable Site
Public features MUST pass build, lint, link, accessibility, responsive layout,
and core reader-journey validation before release. Pages MUST use semantic
headings, keyboard-reachable controls, readable typography, stable canonical
URLs, and performance budgets suitable for a static learning site. Any feature
that transforms or publishes source-backed content MUST include validation that
`references/` files are excluded from the public artifact.

Rationale: The site is meant to be revisited and shared, so broken navigation,
unreadable layouts, inaccessible controls, or leaked source artifacts invalidate
the core use case.

## Content and Architecture Constraints

- The source PDF and markdown chapters are treated as private inputs for study,
  transformation, and review. They are not product assets.
- The public site MUST expose stable chapter, concept, glossary, and search URLs
  that can be shared without requiring local source files.
- The default architecture MUST be static-first. Client-side interactivity is
  allowed only when it improves reading, search, annotation, progress tracking,
  or concept exploration.
- The content model MUST support chapter ordering, concept tags, cross-links,
  citations, reading status, and editorial status from the first release.
- New data collection, authentication, or analytics MUST be justified in the
  feature spec and MUST default to privacy-preserving behavior.
- Generated content MUST be reproducible from committed source files, templates,
  transformation code, or documented editorial prompts.

## Delivery Workflow

- Every feature spec MUST define the reader journey, source-use boundary,
  measurable learning or navigation outcome, and public/shareable behavior.
- Every implementation plan MUST pass the Constitution Check before Phase 0
  research and again after Phase 1 design.
- Every task list MUST include tasks for content traceability, source-use review,
  attribution, accessibility, responsive layout, link validation, and build
  validation when the feature touches public content.
- Reviews MUST verify that public artifacts contain original educational content,
  not raw copied source material.
- A feature is complete only when its primary reader journey can be demonstrated
  from a clean build using public routes.

## Governance

This constitution supersedes conflicting project practices, templates, and
runtime guidance. Amendments require an update to this file, a Sync Impact
Report, and propagation to affected Spec Kit templates or agent guidance in the
same change.

Versioning follows semantic versioning:
- MAJOR for principle removals or incompatible redefinitions.
- MINOR for new principles, new mandatory sections, or materially expanded
  governance.
- PATCH for clarifications, wording fixes, or non-semantic refinements.

Compliance is reviewed during every specification, plan, task generation, and
implementation review. Any justified violation MUST be documented in the plan's
Complexity Tracking section with the simpler alternative that was considered and
rejected.

**Version**: 1.0.0 | **Ratified**: 2026-05-30 | **Last Amended**: 2026-05-30
