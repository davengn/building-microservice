# Contract: Content Schema

## Scope

This contract defines public content records generated from private source
materials. It applies to files under `content/` and generated indexes under
`public/generated/` or equivalent build output.

## Chapter Frontmatter

```yaml
id: chapter-01
order: 1
slug: what-are-microservices
title: What Are Microservices?
source:
  book: building-microservices-2e
  chapterFile: references/chapters/01_Chapter_1_What_Are_Microservices.md
  chapterLabel: Chapter 1
summary: Original one-paragraph summary.
learningObjectives:
  - Explain the core idea in original wording.
takeaways:
  - Original takeaway.
tags:
  - fundamentals
concepts:
  - microservices
visualizations:
  - service-boundary-map
relatedChapters:
  - chapter-02
readingEstimateMinutes: 35
editorialStatus: drafted
```

## Concept Frontmatter

```yaml
id: concept-bounded-context
slug: bounded-context
name: Bounded Context
sourceRefs:
  - chapterId: chapter-02
    section: Domain-Driven Design
tags:
  - modeling
  - ddd
relatedConcepts:
  - service-boundary
tradeoffs:
  - Helps align models with teams but requires explicit integration boundaries.
risks:
  - Poorly drawn contexts can preserve hidden coupling.
alternatives:
  - Modular monolith
editorialStatus: reviewed
```

## Required Validation

- All IDs and slugs are unique.
- Published content has source refs and editorial status.
- `source.chapterFile` may reference `references/` for traceability but must not
  become a public link.
- Public body content must be original explanation, summary, diagram text,
  example, or review material.
- Exact quotes must be short, attributed, and paired with original commentary.
- Build fails if a generated public file contains raw source chapter file paths
  as clickable links or includes files from `references/`.
