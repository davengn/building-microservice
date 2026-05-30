# Contract: Study Actions

## Scope

Study actions are optional learning affordances attached to chapters, concepts,
and review items. Authored actions work without AI. AI-assisted actions are
progressive enhancement and must not be required for the core reader journey.

## Authored Actions

| Action | Input | Output |
|---|---|---|
| `summarize-chapter` | Chapter ID | Authored summary and key takeaways |
| `show-tradeoffs` | Concept ID | Tradeoff matrix with risks and alternatives |
| `practice` | Chapter or concept ID | Quiz, flashcards, or exercises |
| `show-related` | Concept ID | Related concepts, chapters, diagrams |

## Optional AI Actions

| Action | Input | Output |
|---|---|---|
| `explain-like-new` | Public chapter/concept context | Beginner explanation |
| `give-real-example` | Public concept context | Illustrative engineering example |
| `generate-interview-questions` | Public chapter/concept context | Interview-style prompts |
| `create-flashcards` | Public chapter/concept context | Draft flashcards for review |

## Requirements

- AI inputs must use public original context, not raw source chapter text.
- AI actions must be visibly optional and unavailable states must be graceful.
- Generated output must be labeled as generated until reviewed.
- Authored summaries, diagrams, examples, search, and review must remain usable
  when AI actions are disabled.
