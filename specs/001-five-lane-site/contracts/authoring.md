# Contract — authoring

The interface between Angelo and the site. Adding one file that satisfies this contract
publishes an entry; nothing else is edited (FR-025).

## Essay or note

```markdown
---
title: Why I left Next.js
date: 2026-07-24
tags: [tech, astro]
---

Body.
```

Optional: `description`, `draft: true`, `image`, `newsletter`.

File goes in `content/essays/` or `content/notes/`. Which one is Angelo's call; moving the
file later moves the lane and keeps the address.

## Work

```markdown
---
title: Sex-positive parties: two commissioned stories
date: 2023-06-27
tags: [journalism]
type: professional
summary:
  when: 2023-06-27
  where: Folha de S.Paulo
  who: Me
  what: Writing
  why: Folha commissioned a story after I attended the event.
live: https://www1.folha.uol.com.br/...
hero:
  src: opening.jpg
  alt: Drawing by Catarina Pignato
---

Body.
```

`hero.alt` is required whenever `hero` is present. `live` and `hero` are both optional.

## Library

```markdown
---
title: Andor
date: 2026-05-02
medium: series
by: Tony Gilroy
tags: [scifi]
---

What I thought of it.
```

`medium` is one of `book`, `series`, `film`. `date` is when it was finished.

## Now

One file, replaced in place. Title and body only.

## Recommendations

Structured data, not prose:

```yaml
- kind: professional
  name: A Real Person
  role: Engineering manager at X
  text: The endorsement.
```

## Failure contract

A file that breaks this contract fails `pnpm build` with the file path and the offending
field named. It never reaches the published site (FR-026, SC-005).

Specifically:

| Mistake                       | Result                              |
| ----------------------------- | ----------------------------------- |
| Missing `title` or `date`     | Build fails naming the field.       |
| Two entries, same `/YYYY/MM/` | Build fails naming both files.      |
| `hero` without `alt`          | Build fails.                        |
| `medium: audiobook`           | Build fails; three media are valid. |
