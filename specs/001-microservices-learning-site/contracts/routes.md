# Contract: Public Routes

## Required Routes

| Route | Purpose | Public Data |
|---|---|---|
| `/` | Learning dashboard and book overview entry | Featured chapters, progress, key concepts, search entry |
| `/chapters` | Full chapter index | Ordered chapters, summaries, status, tags |
| `/chapters/[slug]` | Guided chapter lesson | Chapter sections, summaries, diagrams, examples, review links |
| `/concepts/[slug]` | Concept detail | Definition, source chapters, tradeoffs, diagrams, examples, related concepts |
| `/glossary` | Glossary index | Terms, definitions, concept links |
| `/graph` | Concept knowledge graph | Public graph nodes and edges |
| `/search` | Search and discovery | Public search index results and filters |
| `/review` | Review center | Quizzes, flashcards, exercises, chapter filters |

## Route Requirements

- Routes must be stable and shareable.
- Public routes must not require local `references/` files.
- Chapter and concept routes must expose canonical metadata for sharing.
- Missing slugs must render a useful not-found state with search and chapter
  index links.
- Mobile routes must preserve access to chapter navigation, table of contents,
  search, and next/previous actions.
