# <project name>

<One sentence: what this is.>

## Commands

```bash
pnpm install
pnpm dev
bash scripts/gate.sh full    # the definition of done
```

## Conventions

- <language/framework and version>
- <where source lives, where tests live>
- <anything an agent would otherwise get wrong>

## Boundaries

- Never commit directly to `main`.
- Never weaken the gate to make it pass.
- Non-goals live in `docs/PROJECT.md` and are binding.

<!--
Keep this file short. It is loaded on every turn, in every session, by every agent.
A README-shaped AGENTS.md measurably degrades accuracy and inflates token cost.
Detail belongs in docs/PROJECT.md, the constitution, or a skill — all of which are
loaded only when relevant.
-->
