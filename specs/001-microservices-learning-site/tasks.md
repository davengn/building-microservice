# Tasks: Interactive Microservices Learning Website

**Input**: Design documents from `/specs/001-microservices-learning-site/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md, DESIGN.md

**Tests**: Included because the feature specification defines independent tests for each story and the constitution requires source-use, accessibility, link, responsive, and build validation gates.

**Organization**: Tasks are grouped by user story so each story can be implemented and tested as an independent increment.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Next.js/TypeScript application, tooling, and design-system base.

- [X] T001 Initialize the pnpm Next.js project manifest and scripts in package.json
- [X] T002 Configure TypeScript, Next.js, PostCSS, and Tailwind entry points in tsconfig.json, next.config.mjs, postcss.config.mjs, and tailwind.config.ts
- [X] T003 Configure private source and generated output exclusions in .gitignore
- [X] T004 Create the root App Router shell in app/layout.tsx and app/page.tsx
- [X] T005 [P] Define global CSS variables, light/dark theme colors, typography, and DESIGN.md tokens in styles/globals.css
- [X] T006 [P] Create the shared directory skeleton with keep files in app/.gitkeep, components/.gitkeep, content/.gitkeep, lib/.gitkeep, scripts/.gitkeep, and tests/.gitkeep
- [X] T007 [P] Configure Vitest and React Testing Library in vitest.config.ts and tests/setup.ts
- [X] T008 [P] Configure Playwright browser tests and axe integration in playwright.config.ts and tests/e2e/.gitkeep

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build the shared content, source-boundary, routing, and UI primitives that every user story depends on.

**Critical**: No user story work should begin until this phase is complete.

- [ ] T009 Define Zod schemas for Chapter, Section, Concept, Visualization, Example, ReviewItem, SearchIndexEntry, and KnowledgeGraphEdge in lib/content/schemas.ts
- [ ] T010 Implement typed frontmatter parsing and public MDX discovery in lib/content/mdx.ts and lib/content/loaders.ts
- [ ] T011 Implement source chapter discovery for the 18 markdown inputs in scripts/content/check-sources.ts
- [ ] T012 Implement public draft generation boundaries that read references/ but write only original draft records under content/ in scripts/content/generate-drafts.ts
- [ ] T013 Implement content validation for slugs, source refs, editorial status, quote limits, and original-public-body rules in scripts/content/validate-content.ts
- [ ] T014 Implement the public artifact source audit that fails on references/, source PDF names, raw chapter markdown, or copied source passages in scripts/validate/audit-source.ts
- [ ] T015 [P] Implement generated artifact writers for routes, graph metadata, and search metadata in lib/content/generated.ts
- [ ] T016 [P] Create shadcn-compatible UI primitives aligned to DESIGN.md in components/ui/button.tsx, components/ui/card.tsx, components/ui/badge.tsx, components/ui/tabs.tsx, and components/ui/input.tsx
- [ ] T017 Create the application frame, responsive navigation, theme toggle, and footer in components/layout/AppShell.tsx, components/navigation/MainNav.tsx, components/navigation/MobileNav.tsx, and components/layout/Footer.tsx

**Checkpoint**: Content contracts, private-source safeguards, generated metadata, and UI primitives are ready for story work.

---

## Phase 3: User Story 1 - Study Chapters as Guided Lessons (Priority: P1) - MVP

**Goal**: Readers can open the overview, choose a chapter, read a structured lesson, use table of contents and takeaways, and move to previous or next chapters without raw source files.

**Independent Test**: Open `/`, navigate to `/chapters`, open a chapter route such as `/chapters/what-are-microservices`, verify structured sections, summaries, takeaways, table of contents, reading progress, and previous/next navigation.

### Tests for User Story 1

- [ ] T018 [P] [US1] Add schema tests for chapter and section records in tests/unit/chapter-content.test.ts
- [ ] T019 [P] [US1] Add the overview-to-chapter reader journey test in tests/e2e/chapter-reader.spec.ts

### Implementation for User Story 1

- [ ] T020 [US1] Create original chapter MDX starter files for all 18 source chapter markdown files in content/chapters/*.mdx
- [ ] T021 [US1] Implement ordered chapter loading, previous/next calculation, and chapter metadata helpers in lib/content/chapters.ts
- [ ] T022 [P] [US1] Build the learning dashboard with a deep navy hero band and workspace-style study mockup in app/page.tsx
- [ ] T023 [P] [US1] Build the ordered chapter index with status, effort, tags, and summaries in app/chapters/page.tsx
- [ ] T024 [US1] Build the guided chapter route with static params and canonical metadata in app/chapters/[slug]/page.tsx
- [ ] T025 [P] [US1] Build reader components for chapter header, section blocks, takeaways, and source notes in components/learning/ChapterHeader.tsx, components/learning/SectionBlock.tsx, components/learning/TakeawayList.tsx, and components/learning/SourceNote.tsx
- [ ] T026 [P] [US1] Build desktop and mobile table-of-contents components in components/navigation/ChapterToc.tsx
- [ ] T027 [US1] Build previous/next chapter navigation in components/navigation/ChapterPager.tsx
- [ ] T028 [P] [US1] Build local reading progress display and persistence in components/learning/ReadingProgress.tsx and lib/content/reading-progress.ts
- [ ] T029 [US1] Implement the three-column desktop reader layout and stacked mobile layout in components/layout/ReaderShell.tsx
- [ ] T030 [US1] Wire US1 validation into package scripts for content checks, unit tests, and reader e2e checks in package.json

**Checkpoint**: User Story 1 is independently usable as the MVP reader site.

---

## Phase 4: User Story 2 - Learn Through Visual and Interactive Explanations (Priority: P2)

**Goal**: Readers can learn major microservices concepts through original diagrams, comparison views, and interactive architecture explanations embedded in chapters and concept pages.

**Independent Test**: Open a chapter or concept with a major architecture concept, interact with a diagram or explorer, verify accessible text, tradeoffs, failure modes, and mobile fallback behavior.

### Tests for User Story 2

- [ ] T031 [P] [US2] Add visualization schema and accessibility-text tests in tests/unit/visualization-content.test.ts
- [ ] T032 [P] [US2] Add responsive diagram interaction tests in tests/e2e/visualizations.spec.ts

### Implementation for User Story 2

- [ ] T033 [US2] Create original Mermaid, comparison, and explorer data for major concepts in content/diagrams/*.mmd and content/diagrams/*.json
- [ ] T034 [US2] Implement safe Mermaid rendering with theme-aware contrast in components/visualizations/MermaidBlock.tsx
- [ ] T035 [P] [US2] Implement tradeoff and alternative comparison tables in components/visualizations/TradeoffMatrix.tsx
- [ ] T036 [P] [US2] Implement decision-tree interactions for architectural choices in components/visualizations/DecisionTree.tsx
- [ ] T037 [US2] Implement React Flow architecture exploration in components/visualizations/ArchitectureExplorer.tsx
- [ ] T038 [US2] Implement visualization loading and chapter/concept association helpers in lib/content/visualizations.ts
- [ ] T039 [US2] Register MDX visualization components and callouts in components/learning/MdxComponents.tsx
- [ ] T040 [US2] Implement accessible text alternatives, keyboard handling, and mobile fallback panels in components/visualizations/VisualizationFallback.tsx
- [ ] T041 [US2] Add at least one original visual learning aid reference to each major concept section in content/chapters/*.mdx

**Checkpoint**: User Story 2 adds visual learning without depending on search, review, or AI features.

---

## Phase 5: User Story 3 - Discover Concepts Across the Book (Priority: P3)

**Goal**: Returning readers can search public content, browse tags and glossary terms, open concept details, and explore concept relationships across chapters.

**Independent Test**: Search for a term such as `saga` or `bounded context`, filter results, open a concept detail page, then use `/graph` to inspect related chapters and concepts.

### Tests for User Story 3

- [ ] T042 [P] [US3] Add search index contract and source-boundary tests in tests/unit/search-index.test.ts
- [ ] T043 [P] [US3] Add search, concept, glossary, and graph discovery e2e tests in tests/e2e/search-graph.spec.ts

### Implementation for User Story 3

- [ ] T044 [US3] Create original concept MDX records with tradeoffs, risks, alternatives, and source refs in content/concepts/*.mdx
- [ ] T045 [P] [US3] Create glossary term data linked to concept slugs and chapter refs in content/glossary/index.json
- [ ] T046 [US3] Implement public search metadata generation from public content only in lib/search/build-search-index.ts
- [ ] T047 [US3] Implement Pagefind build integration that indexes built public routes only in scripts/content/build-pagefind.ts
- [ ] T048 [US3] Build the search page with filters, ranked results, match context, and broad-query handling in app/search/page.tsx
- [ ] T049 [US3] Build concept detail routes with source chapters, diagrams, examples, related concepts, and next reading in app/concepts/[slug]/page.tsx
- [ ] T050 [US3] Build the glossary index with stable links to concepts and chapters in app/glossary/page.tsx
- [ ] T051 [US3] Implement knowledge graph data validation and edge generation in lib/graph/build-graph.ts
- [ ] T052 [US3] Build the interactive concept graph route and React Flow graph component in app/graph/page.tsx and components/visualizations/ConceptGraph.tsx
- [ ] T053 [US3] Implement related-content recommendations for chapters, concepts, diagrams, examples, and glossary terms in components/learning/RelatedContent.tsx

**Checkpoint**: User Story 3 makes the site useful for returning readers and concept discovery.

---

## Phase 6: User Story 4 - Practice and Review Knowledge (Priority: P4)

**Goal**: Learners can use quizzes, flashcards, exercises, examples, and review flows tied back to chapter and concept content.

**Independent Test**: Open `/review`, filter by chapter or concept, answer a quiz, flip flashcards, see explanations, and follow links back to the relevant lesson section.

### Tests for User Story 4

- [ ] T054 [P] [US4] Add review item schema and explanation-link tests in tests/unit/review-items.test.ts
- [ ] T055 [P] [US4] Add review center, quiz, flashcard, and lesson-link e2e tests in tests/e2e/review.spec.ts

### Implementation for User Story 4

- [ ] T056 [US4] Create original review items for every chapter with answers, explanations, difficulty, and source refs in content/review/*.json
- [ ] T057 [US4] Implement review content loading, filtering, and section back-links in lib/content/review.ts
- [ ] T058 [P] [US4] Implement quiz interactions and answer feedback in components/review/Quiz.tsx
- [ ] T059 [P] [US4] Implement flashcard deck interactions and local progress hooks in components/review/FlashcardDeck.tsx
- [ ] T060 [P] [US4] Implement practical exercise prompts with tradeoff and failure-mode framing in components/review/ExercisePrompt.tsx
- [ ] T061 [US4] Build the review center route with chapter, concept, type, and difficulty filters in app/review/page.tsx
- [ ] T062 [US4] Embed chapter-level review sections into guided chapter pages in components/learning/ChapterReview.tsx and app/chapters/[slug]/page.tsx
- [ ] T063 [US4] Persist local review completion state without accounts in lib/study-actions/local-progress.ts

**Checkpoint**: User Story 4 adds practice loops while preserving the static-first reader experience.

---

## Phase 7: User Story 5 - Use Optional AI Study Prompts (Priority: P5)

**Goal**: Readers can use optional AI-assisted study prompts when enabled, while authored summaries, diagrams, search, and review remain complete when AI is unavailable.

**Independent Test**: Disable AI configuration, open a chapter and concept page, verify authored study actions still work and AI actions show graceful unavailable states; enable configuration and verify only public original context is sent.

### Tests for User Story 5

- [ ] T064 [P] [US5] Add study action prompt and public-context-only tests in tests/unit/study-actions.test.ts
- [ ] T065 [P] [US5] Add AI-disabled and graceful-unavailable e2e tests in tests/e2e/ai-optional.spec.ts

### Implementation for User Story 5

- [ ] T066 [US5] Define prompt templates for explain-like-new, real examples, interview questions, and flashcards in lib/study-actions/prompts.ts
- [ ] T067 [US5] Implement optional AI feature flags and environment documentation in lib/study-actions/config.ts and .env.example
- [ ] T068 [US5] Implement authored non-AI study actions for summaries, tradeoffs, practice, and related content in lib/study-actions/authored-actions.ts
- [ ] T069 [US5] Implement the optional study action route handler using public original context only in app/api/study-actions/route.ts
- [ ] T070 [US5] Build the study actions panel with disabled, loading, generated, and unavailable states in components/learning/StudyActionsPanel.tsx
- [ ] T071 [US5] Attach study actions to chapter and concept pages without blocking core content in app/chapters/[slug]/page.tsx and app/concepts/[slug]/page.tsx

**Checkpoint**: User Story 5 is a progressive enhancement and never becomes a dependency for the core site.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, documentation, deployment metadata, and shareability work across all implemented stories.

- [ ] T072 [P] Add source artifact audit regression coverage in tests/integration/source-audit.test.ts
- [ ] T073 [P] Add axe accessibility checks for dashboard, chapter, search, graph, and review routes in tests/accessibility/reader-a11y.spec.ts
- [ ] T074 [P] Add link validation for chapter, concept, glossary, diagram, review, and source-note links in scripts/validate/check-links.ts
- [ ] T075 [P] Add responsive reader journey checks for mobile, tablet, desktop, and dark mode in tests/e2e/responsive-reader.spec.ts
- [ ] T076 [P] Document the editorial workflow, quote policy, and source-use review checklist in docs/content-workflow.md
- [ ] T077 [P] Add sitemap and robots metadata for stable public routes in app/sitemap.ts and app/robots.ts
- [ ] T078 Update package scripts for lint, typecheck, test, test:e2e, a11y, links:check, audit:source, content:validate, graph:validate, search:build, and build in package.json
- [ ] T079 Record the final quickstart verification path and command expectations in specs/001-microservices-learning-site/quickstart.md
- [ ] T080 Perform final public-content originality review notes in docs/source-use-review.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup and blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 8)**: Depends on the desired user stories being complete.

### User Story Dependencies

- **US1 (P1)**: Starts after Phase 2 and is the MVP scope.
- **US2 (P2)**: Starts after Phase 2; integrates best after US1 chapter shells exist, but visualization components can be built independently.
- **US3 (P3)**: Starts after Phase 2; concept/search/graph content benefits from US1 chapter metadata and US2 visualization metadata.
- **US4 (P4)**: Starts after Phase 2; review items link best after US1 chapter sections and US3 concept records exist.
- **US5 (P5)**: Starts after Phase 2; should be implemented after authored content exists so AI actions can use only public original context.

### Within Each User Story

- Write story-specific tests before implementation tasks.
- Create or validate content records before routes that depend on them.
- Build loaders and generated metadata before UI pages that consume them.
- Complete each story checkpoint before moving to the next priority if working sequentially.

---

## Parallel Opportunities

- T005, T006, T007, and T008 can run in parallel during setup.
- T015 and T016 can run in parallel once schemas and loaders are defined.
- US1 components T022, T023, T025, T026, and T028 can run in parallel after T020 and T021.
- US2 component tasks T035 and T036 can run in parallel with T034 and T037 after T033.
- US3 content task T045 can run in parallel with T044, while T046 and T051 can proceed once content contracts are stable.
- US4 components T058, T059, and T060 can run in parallel after T056 and T057.
- US5 tests T064 and T065 can run in parallel before T066 through T071.
- Polish validation tasks T072 through T077 can run in parallel after the corresponding stories are complete.

## Parallel Example: User Story 1

```bash
Task: "T022 [US1] Build the learning dashboard with a deep navy hero band and workspace-style study mockup in app/page.tsx"
Task: "T023 [US1] Build the ordered chapter index with status, effort, tags, and summaries in app/chapters/page.tsx"
Task: "T025 [US1] Build reader components for chapter header, section blocks, takeaways, and source notes in components/learning/ChapterHeader.tsx, components/learning/SectionBlock.tsx, components/learning/TakeawayList.tsx, and components/learning/SourceNote.tsx"
Task: "T026 [US1] Build desktop and mobile table-of-contents components in components/navigation/ChapterToc.tsx"
```

## Parallel Example: User Story 2

```bash
Task: "T035 [US2] Implement tradeoff and alternative comparison tables in components/visualizations/TradeoffMatrix.tsx"
Task: "T036 [US2] Implement decision-tree interactions for architectural choices in components/visualizations/DecisionTree.tsx"
Task: "T040 [US2] Implement accessible text alternatives, keyboard handling, and mobile fallback panels in components/visualizations/VisualizationFallback.tsx"
```

## Parallel Example: User Story 3

```bash
Task: "T045 [US3] Create glossary term data linked to concept slugs and chapter refs in content/glossary/index.json"
Task: "T046 [US3] Implement public search metadata generation from public content only in lib/search/build-search-index.ts"
Task: "T051 [US3] Implement knowledge graph data validation and edge generation in lib/graph/build-graph.ts"
```

## Parallel Example: User Story 4

```bash
Task: "T058 [US4] Implement quiz interactions and answer feedback in components/review/Quiz.tsx"
Task: "T059 [US4] Implement flashcard deck interactions and local progress hooks in components/review/FlashcardDeck.tsx"
Task: "T060 [US4] Implement practical exercise prompts with tradeoff and failure-mode framing in components/review/ExercisePrompt.tsx"
```

## Parallel Example: User Story 5

```bash
Task: "T064 [US5] Add study action prompt and public-context-only tests in tests/unit/study-actions.test.ts"
Task: "T065 [US5] Add AI-disabled and graceful-unavailable e2e tests in tests/e2e/ai-optional.spec.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 setup.
2. Complete Phase 2 foundation, especially source-boundary validation.
3. Complete Phase 3 User Story 1.
4. Validate `/ -> /chapters -> /chapters/[slug]` with content checks, unit tests, and Playwright.
5. Stop and demo the static guided chapter reader before adding visual, discovery, review, or AI layers.

### Incremental Delivery

1. Add US1 for core guided lessons.
2. Add US2 for diagrams and interactive explanations.
3. Add US3 for search, glossary, concept pages, and graph discovery.
4. Add US4 for quizzes, flashcards, examples, and review workflows.
5. Add US5 only as progressive enhancement after authored content is already useful.

### Validation Gates

Run these before calling the feature complete:

```bash
pnpm run content:check-sources
pnpm run content:validate
pnpm run graph:validate
pnpm run search:build
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run test:e2e
pnpm run a11y
pnpm run links:check
pnpm run audit:source
pnpm run build
```

## Notes

- All public content tasks must produce original study notes, summaries, commentary, diagrams, examples, metadata, or navigation.
- Do not publish the source PDF, raw chapter markdown, copied paragraphs, proprietary images, or proprietary tables.
- Keep `references/` as private build input only.
- Follow DESIGN.md tokens: deep navy hero band, purple primary actions, 8px buttons, 12px cards, Notion Sans-compatible typography, pastel cards, and documentation-style density.
