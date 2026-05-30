# Feature Specification: Interactive Microservices Learning Website

**Feature Branch**: `001-microservices-learning-site`

**Created**: 2026-05-30

**Status**: Draft

**Input**: User description: "Build an interactive learning website from Building Microservices (2nd Edition), using the local PDF and extracted chapter markdown as private source materials, and follow DESIGN.md for the UI."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Study Chapters as Guided Lessons (Priority: P1)

As a software engineer learning microservices, I want each book chapter to become
a structured lesson page so I can study the material in a clear sequence and
revisit important ideas later.

**Why this priority**: Chapter learning is the core value of the site and is the
minimum usable product.

**Independent Test**: A reader can open the book overview, choose a chapter, read
the chapter lesson, use its table of contents, review summaries and takeaways,
and move to the previous or next chapter without needing raw source files.

**Acceptance Scenarios**:

1. **Given** the generated site is available, **When** a reader opens the book
   overview, **Then** they see all chapters in reading order with status,
   estimated effort, and primary topics.
2. **Given** a reader opens a chapter page, **When** they scan the page, **Then**
   they see a structured learning flow with sections, summaries, takeaways,
   glossary terms, important attributed quotes when used, and related chapters.
3. **Given** a reader finishes a chapter, **When** they use chapter navigation,
   **Then** they can move to the next or previous chapter and preserve their
   reading context.

---

### User Story 2 - Learn Through Visual and Interactive Explanations (Priority: P2)

As a reader, I want important microservices concepts to include diagrams and
interactive explanations so I can understand architecture patterns faster than
from prose alone.

**Why this priority**: Visual learning is a stated project goal and differentiates
the site from a simple online copy of the book.

**Independent Test**: A reader can open a major concept page or chapter section,
interact with at least one diagram or architecture explorer, and understand the
concept, tradeoffs, and failure modes without reading the source chapter.

**Acceptance Scenarios**:

1. **Given** a chapter discusses a major architecture concept, **When** the reader
   reaches that section, **Then** they see an original visual explanation such as
   a flow, topology, sequence, comparison, or decision diagram.
2. **Given** a visualization has interactive details, **When** the reader hovers,
   expands, or selects nodes, **Then** the UI reveals concise explanations and
   tradeoffs without disrupting reading flow.
3. **Given** a concept has common alternatives, **When** the reader opens its
   comparison view, **Then** they can compare use cases, costs, risks, and
   anti-patterns.

---

### User Story 3 - Discover Concepts Across the Book (Priority: P3)

As a returning reader, I want search, tags, glossary entries, and a knowledge
graph so I can quickly find and connect microservices ideas across chapters.

**Why this priority**: Revisit and discovery workflows make the site useful after
the initial read-through.

**Independent Test**: A reader can search for a concept, filter results, open a
concept detail, and visually explore related concepts and chapters.

**Acceptance Scenarios**:

1. **Given** a reader searches for a term such as "saga" or "bounded context",
   **When** results are shown, **Then** they include matching chapters, concepts,
   examples, glossary terms, and related diagrams.
2. **Given** a reader opens the knowledge graph, **When** they select a concept,
   **Then** related concepts and source chapters are highlighted with readable
   relationship labels.
3. **Given** a concept appears in multiple chapters, **When** the reader opens its
   detail page, **Then** they see all chapter references and recommended next
   reading.

---

### User Story 4 - Practice and Review Knowledge (Priority: P4)

As a learner preparing to apply microservices at work or in interviews, I want
quizzes, flashcards, examples, and review exercises so I can test understanding
and retain important tradeoffs.

**Why this priority**: Practice features deepen learning, but they depend on the
chapter and concept structure being available first.

**Independent Test**: A reader can complete a chapter review, answer knowledge
checks, and save or revisit flashcards tied to chapter concepts.

**Acceptance Scenarios**:

1. **Given** a reader finishes a chapter, **When** they start the review section,
   **Then** they receive knowledge checks covering key concepts and tradeoffs.
2. **Given** a reader answers a quiz question, **When** feedback is shown, **Then**
   it explains the answer and links back to the relevant lesson section.
3. **Given** a concept has practical engineering relevance, **When** examples are
   shown, **Then** they include use cases, failure scenarios, common mistakes,
   and production lessons.

---

### User Story 5 - Use Optional AI Study Prompts (Priority: P5)

As a reader, I want optional AI-assisted prompts for explanation, examples,
tradeoffs, interview questions, summaries, and flashcards so I can adapt the
material to my current learning need.

**Why this priority**: AI assistance is useful but optional; the core site must
work without it.

**Independent Test**: A reader can use clearly labeled AI prompt actions from a
chapter or concept page, and the site still provides complete learning value
when those actions are unavailable.

**Acceptance Scenarios**:

1. **Given** AI prompts are enabled, **When** a reader selects "Explain Like I'm
   New", **Then** they receive a beginner-friendly explanation grounded in the
   current concept.
2. **Given** AI prompts are unavailable, **When** a reader opens the same page,
   **Then** all authored summaries, diagrams, search, and review content remain
   usable.

---

### Edge Cases

- Source chapter markdown contains extraction artifacts, repeated headers, or
  malformed lists.
- A chapter has few obvious visual concepts.
- A concept appears in multiple chapters with slightly different terminology.
- Search returns too many results for broad terms such as "service" or "data".
- The reader opens the site on a mobile viewport with a large diagram.
- A public build accidentally includes private source files or copied source
  passages.
- Optional AI features are disabled, rate-limited, or unavailable.
- Dark mode changes diagram contrast or code readability.

## Requirements *(mandatory)*

### Content & Rights Requirements *(mandatory for source-backed content)*

- Source materials: `references/Building Microservices Designing Fine-Grained Systems 2nd By Sam Newman.pdf` and `references/chapters/`.
- Public content MUST be original study notes, summaries, commentary, diagrams,
  examples, metadata, and navigation derived from the source materials.
- Public content MUST exclude raw PDFs, raw chapter markdown files, copied full
  chapters, copied paragraphs, proprietary images, proprietary tables, and any
  substantial source-book reproduction.
- Any exact quote used in public content MUST be short, attributed, and attached
  to original commentary.
- Reader revisit/share workflows MUST use stable public URLs for chapters,
  concepts, glossary entries, search results, diagrams, and review exercises.

### Functional Requirements

- **FR-001**: System MUST provide a book overview page listing all chapters in
  source order with status, topics, summaries, and entry points.
- **FR-002**: System MUST provide one dedicated learning page per chapter.
- **FR-003**: Each chapter page MUST include a structured learning flow,
  section-level summaries, key takeaways, glossary terms, related chapters, and
  previous/next navigation.
- **FR-004**: System MUST generate or maintain original visual explanations for
  major microservices concepts, including decomposition, bounded contexts,
  communication, workflow, deployment, testing, observability, security,
  resiliency, scaling, user interfaces, organization, and architecture evolution.
- **FR-005**: Visual explanations MUST include accessible text alternatives and
  responsive behavior for desktop and mobile viewports.
- **FR-006**: System MUST provide interactive learning components such as
  architecture explorers, expandable diagrams, hover explanations, decision
  trees, comparison tables, tradeoff matrices, quizzes, flashcards, or review
  exercises.
- **FR-007**: System MUST include real-world engineering examples for major
  concepts, covering practical use cases, startup and enterprise contexts,
  failure scenarios, anti-patterns, common mistakes, and production lessons.
- **FR-008**: System MUST include developer-oriented examples for relevant
  concepts, including service communication, migration, event-driven systems,
  gateways, discovery, tracing, delivery pipelines, and container orchestration.
- **FR-009**: System MUST provide full-text and metadata search across chapters,
  concepts, patterns, diagrams, examples, glossary entries, and review content.
- **FR-010**: System MUST maintain a concept knowledge graph linking concepts,
  chapters, examples, glossary terms, diagrams, and related concepts.
- **FR-011**: System MUST support light and dark themes while preserving
  readability, contrast, syntax highlighting, and diagram legibility.
- **FR-012**: System MUST show reading progress at chapter and book level.
- **FR-013**: System MUST follow the visual system defined in `DESIGN.md`,
  including the Notion-inspired palette, spacing, typography, card geometry, and
  documentation-style layout guidance.
- **FR-014**: System MUST validate that public build artifacts exclude
  `references/` and the source PDF/markdown files.
- **FR-015**: Optional AI-assisted learning actions MAY be provided only when the
  authored chapter, concept, search, visualization, and review experiences remain
  usable without AI.

### Key Entities *(include if feature involves data)*

- **Chapter**: A source-backed lesson with order, slug, title, summary, sections,
  source references, reading metadata, related chapters, and editorial status.
- **Section**: A logical learning unit inside a chapter with heading, summary,
  original explanation, source pointer, concepts, diagrams, examples, and review
  links.
- **Concept**: A microservices idea with slug, definition, source chapters,
  tags, relationships, examples, diagrams, tradeoffs, risks, alternatives, and
  glossary mapping.
- **Visualization**: An original diagram or interactive explanation with type,
  concept links, source chapter, accessibility text, responsive behavior, and
  editorial status.
- **Example**: A practical engineering scenario tied to one or more concepts,
  including context, problem, approach, tradeoffs, failure modes, and lessons.
- **Review Item**: A quiz question, flashcard, exercise, or prompt tied to
  chapters and concepts with answer, explanation, difficulty, and source links.
- **Search Index Entry**: A searchable record for chapters, sections, concepts,
  diagrams, examples, glossary terms, and review items.
- **Knowledge Graph Edge**: A typed relationship between concepts, chapters,
  examples, diagrams, or glossary terms.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time reader can open the overview, choose a chapter, and
  reach the first lesson section within 30 seconds.
- **SC-002**: 100% of source chapters have dedicated public chapter pages with
  summaries, takeaways, metadata, and previous/next navigation.
- **SC-003**: At least 80% of major concepts identified across chapters have an
  original visual explanation or interactive learning aid.
- **SC-004**: A returning reader can find a named concept and reach related
  chapters, diagrams, examples, and glossary entries within three interactions.
- **SC-005**: Public build validation confirms that no source PDF, raw chapter
  markdown, copied full chapters, or copied paragraphs are shipped.
- **SC-006**: Core reader journeys are usable on desktop and mobile viewports
  with no blocking accessibility or contrast issues.
- **SC-007**: Every chapter includes at least one review mechanism such as a
  knowledge check, flashcard set, or exercise.
- **SC-008**: The site remains fully usable when optional AI-assisted actions are
  disabled.

## Assumptions

- The site is primarily a static, shareable learning platform for software
  engineers and does not require accounts for the first release.
- `references/` remains a private source-input directory and is not deployed.
- Chapter markdown files are available locally and may need cleanup before they
  become source-backed study notes.
- The first release prioritizes authored original summaries, metadata, search,
  diagrams, and review content over AI-assisted generation.
- Real-world company examples are used as illustrative public engineering
  examples and must avoid unsupported claims.
- The design direction is the Notion-inspired system captured in `DESIGN.md`,
  adapted for a dense developer education website rather than a marketing page.
