# Constitution — angelodias.com.br v4

Non-negotiable principles. Everything else is a preference and may be argued with.

## Workflow

Implementation MUST follow the superpowers workflow: worktree → red/green TDD →
subagent execution → code review → finish-branch. The plan already exists in
`specs/<id>/tasks.md`. Do not re-plan. Execute.

Do not run `speckit-implement`. Task execution belongs to superpowers. Running both
on the same task produces duplicated, conflicting work.

## Verification

`bash scripts/gate.sh full` is the only definition of done. A run does not end green
because the work feels finished.

Never weaken the gate to pass it. Changing a lint rule, a test assertion, a type
suppression, or `.os/gates.yaml` in order to turn the gate green is gate tampering.
If the gate is genuinely wrong, stop and ask.

Tests are written before the implementation, and they fail first. A test that has
never failed has not been shown to test anything.

This project starts with no test runner, on purpose: at v1 the markup has no logic to
test, and an empty suite that exits 0 would make the gate lie. The moment a function
worth testing exists, the test comes first and `.os/gates.yaml` gains the runner in the
same commit. Until then, `pnpm build` is the real check — the zod schemas in
`src/content.config.ts` reject malformed content and fail the build.

## Autonomy

Decisions block; approvals do not. The halt list is in `.os/autonomy.yaml` and the
`decision-vs-approval` skill. When in doubt about whether something is a decision,
it is not — proceed and record the judgment call.

Every autonomous run ends with a review packet. The "Not done" section is written
honestly or not at all.

## Code

Preserve existing code and its logic. Change only what the task requires. Smaller
diffs are easier to review and less likely to regress.

No new abstraction until there are three call sites. No defensive validation that
the task did not ask for. No renaming for taste.

Match the surrounding code — its naming, its idiom, its comment density.

## Content

**Format is a lane; subject is a tag.** Essays, Notes, Work, Library and Now are lanes
because they render differently. Psychology, fiction, sexuality, journalism and design are
tags. Adding a sixth lane is a decision and halts.

**Angelo's prose is not the agent's to edit.** Moving a file, correcting a path, adding a
required frontmatter field — fine. Rewording a sentence, reflowing a paragraph, "fixing" a
title, deleting a draft — halt. Prettier is configured to never touch `*.md` and `*.mdx`
for this reason, and that exclusion is not to be removed.

**Bilingual by field, not by route.** Every entry declares `lang: 'en' | 'pt'`. Both
languages share one index and one URL space. No `/en` or `/pt` routes at v1.

**The schema anticipates the newsletter; the code does not implement it.** `date` and
`newsletter` are carried on every entry from the first commit. No send logic, no cron, no
scheduled-publish filtering ships until that phase is explicitly opened.

## Presentation

**v1 is plain HTML.** Semantic elements, block-level layout, nothing else. No colours, no
fonts, no dark mode, no components library, no utility CSS. This is a deliberate constraint
to force the structure to be right before it is made to look right.

Any styling beyond block-level layout, and any visual or typographic decision, halts and
asks. Design is v2 and it is a conversation.

## Scope

Non-goals in `docs/PROJECT.md` are binding. Work that serves a non-goal does not get
done, however small it looks.

`main` is the live site. It is not touched, not merged into, and not deployed from by any
autonomous run. The VPS, Coolify, DNS and Vercel are outside the agent's reach entirely.
