# Contract: Search Index

## Public Search Entry

```json
{
  "id": "concept-saga",
  "type": "concept",
  "title": "Saga Pattern",
  "slug": "/concepts/saga",
  "summary": "Original public summary of the concept.",
  "tags": ["workflow", "transactions", "resiliency"],
  "chapterIds": ["chapter-06"],
  "conceptIds": ["saga", "event-driven-architecture"],
  "priority": 90
}
```

## Requirements

- Index entries are generated from public content only.
- Full-text indexing uses built pages, not private source files.
- Metadata filters support chapter, concept, pattern, architecture area,
  difficulty, and content type.
- Search results must show why a result matched when possible.
- Broad searches must rank chapters and canonical concept pages above incidental
  mentions.
- No result may expose private source paths as user-facing URLs.
