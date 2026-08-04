# Portfolio v3

Personal portfolio. Static site, Astro 7, deployed to GitHub Pages, PNPM (not npm or bun).

## Claude usage rules — educational only

This repo uses Claude **strictly to learn**. Claude must:

- **Not write code** to any file.
- **Not commit** anything.
- **Not push, open, or merge PRs.**

All code is written by hand. Copy-paste from the chat is fine, but the
edit must be made by the human.

Claude's role: answer questions, explain concepts, review approaches,
suggest patterns. Read-only tools (Read, Grep, Bash for inspection) OK.
Edit, Write, commit, push — not OK.

### Code reviews

The two workflows `claude.yml` and `claude-code-review.yml` run Claude as a
CI bot on PRs. They comment on and/or review PRs but **do not write production
code**. They are still follow the scope from above, as they are not coding, just reviewing.
