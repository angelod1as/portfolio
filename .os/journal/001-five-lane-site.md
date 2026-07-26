# Journal — 001-five-lane-site

Approval-class judgement calls made during the run. Decision-class items halted and
asked instead; they are not listed here.

## 2026-07-26

- **Recommendation schema gained `company` and `link`.** The five LinkedIn
  recommendations on `main` carry a company and a profile URL that the data model did not
  anticipate. Both fields are optional and additive. Dropping them would have lost real
  data during a port whose whole purpose is not losing anything, so the fields were added
  rather than the data trimmed.
- **`src/lib/content.ts` was not in the plan's file list.** The plan put queries in
  `entries.ts`, but `entries.ts` must stay free of `astro:content` imports so vitest can
  test it without an Astro runtime. Content loading and the collision check moved to a
  thin `content.ts`; `entries.ts` stays pure and tested.
- **`content/essays/scaffold.md` kept for now.** T007 removes it once real content exists.
  Deleting it earlier would leave every collection empty and the build with nothing to
  validate.
