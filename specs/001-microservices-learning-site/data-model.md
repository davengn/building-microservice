# Data Model: Interactive Microservices Learning Website

## Entity: Chapter

**Purpose**: Represents one public guided lesson derived from a source chapter.

**Fields**:
- `id`: stable identifier, e.g. `chapter-01`
- `order`: numeric source order
- `slug`: canonical public route slug
- `title`: public chapter title
- `sourcePath`: private source markdown path
- `sourceBook`: source book identifier
- `summary`: original short summary
- `learningObjectives`: original objectives for the reader
- `takeaways`: original key takeaways
- `sections`: ordered `Section` IDs
- `concepts`: related `Concept` IDs
- `visualizations`: related `Visualization` IDs
- `examples`: related `Example` IDs
- `reviewItems`: related `ReviewItem` IDs
- `relatedChapters`: ordered related chapter IDs
- `tags`: topic tags
- `readingEstimateMinutes`: estimated effort
- `readingStatus`: `not-started | in-progress | completed`
- `editorialStatus`: `source-imported | drafted | reviewed | published`

**Validation Rules**:
- `slug` must be unique and stable.
- `sourcePath` must point under `references/chapters/` and must not be exposed as
  a public asset.
- Published chapters must have a summary, takeaways, at least one section, and
  previous/next navigation where applicable.

## Entity: Section

**Purpose**: Represents a learning unit within a chapter.

**Fields**:
- `id`
- `chapterId`
- `slug`
- `heading`
- `sourceSection`: source section label when known
- `sourceLocation`: source file and optional local anchor
- `originalExplanation`: original authored explanation
- `summary`
- `takeaways`
- `concepts`
- `visualizations`
- `examples`
- `reviewItems`
- `quotes`: short attributed quotes only
- `editorialStatus`

**Validation Rules**:
- Sections must belong to exactly one chapter.
- Published sections must not contain copied paragraphs from source material.
- Quotes must be short, attributed, and attached to original commentary.

## Entity: Concept

**Purpose**: Represents a reusable microservices concept across chapters.

**Fields**:
- `id`
- `slug`
- `name`
- `definition`: original concise definition
- `summary`
- `sourceRefs`: chapter/section references
- `tags`
- `relatedConcepts`
- `graphEdges`
- `diagrams`
- `examples`
- `tradeoffs`
- `risks`
- `alternatives`
- `antiPatterns`
- `commonMistakes`
- `glossaryTerms`
- `recommendedNextReading`
- `editorialStatus`

**Validation Rules**:
- Concepts with recommendation-style language must include context, tradeoffs,
  risks, or alternatives.
- Concepts must reference at least one chapter or section.
- Published concept slugs must be unique.

## Entity: Visualization

**Purpose**: Represents an original diagram or interactive learning component.

**Fields**:
- `id`
- `slug`
- `title`
- `type`: `mermaid | react-flow | svg | comparison | decision-tree | animation`
- `conceptIds`
- `chapterIds`
- `sourceRefs`
- `description`
- `accessibilityText`
- `mobileFallback`
- `dataFile`
- `componentName`
- `editorialStatus`

**Validation Rules**:
- Every visualization must have accessible text.
- Interactive visualizations must have keyboard-reachable controls or a static
  fallback.
- Visualizations must be original and must not reproduce proprietary book
  diagrams.

## Entity: Example

**Purpose**: Represents a practical engineering scenario.

**Fields**:
- `id`
- `slug`
- `title`
- `context`: startup, enterprise, migration, platform, operations, or security
- `conceptIds`
- `chapterIds`
- `problem`
- `approach`
- `tradeoffs`
- `failureModes`
- `antiPatterns`
- `lessons`
- `evidenceLevel`: `illustrative | documented | source-backed`
- `sourceRefs`
- `editorialStatus`

**Validation Rules**:
- Examples must distinguish illustrative scenarios from documented claims.
- Examples must include at least one tradeoff or failure mode.

## Entity: ReviewItem

**Purpose**: Represents a quiz question, flashcard, exercise, or study prompt.

**Fields**:
- `id`
- `type`: `quiz | flashcard | exercise | prompt`
- `chapterIds`
- `conceptIds`
- `question`
- `answer`
- `explanation`
- `difficulty`: `intro | intermediate | advanced`
- `sourceRefs`
- `relatedSectionIds`
- `editorialStatus`

**Validation Rules**:
- Published review items must include an explanation and a link back to a lesson
  section or concept.
- AI prompt review items must be optional and clearly labeled.

## Entity: SearchIndexEntry

**Purpose**: Represents a public searchable document or metadata record.

**Fields**:
- `id`
- `type`: `chapter | section | concept | visualization | example | glossary | review`
- `title`
- `slug`
- `summary`
- `bodyExcerpt`: original public excerpt only
- `tags`
- `chapterIds`
- `conceptIds`
- `priority`

**Validation Rules**:
- Search index entries must be generated from public content only.
- Entries must not include raw source text or private file paths beyond internal
  build metadata.

## Entity: KnowledgeGraphEdge

**Purpose**: Represents a typed relationship for graph exploration.

**Fields**:
- `id`
- `sourceId`
- `targetId`
- `relationship`: `depends-on | contrasts-with | enables | mitigates | extends | appears-in | example-of`
- `label`
- `rationale`
- `chapterRefs`
- `strength`: `primary | secondary | supporting`

**Validation Rules**:
- Edges must reference existing nodes.
- Edge labels must be readable in graph UI.
- Relationship rationale must be original commentary.

## State Transitions

```text
source-imported -> drafted -> reviewed -> published
published -> needs-revision -> reviewed -> published
```

- `source-imported`: source pointer exists, public explanation not ready.
- `drafted`: original public content exists, needs review.
- `reviewed`: source-use, traceability, and educational quality reviewed.
- `published`: eligible for public build.
- `needs-revision`: published content requires update or correction.
