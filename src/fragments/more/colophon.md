---
title: Colophon
---

## Colophon

Third time I build this website. It was Gatsby, then Next.js, now
[Astro](https://astro.build) — every move for the same reason: less machinery
between the writing and the page.

There is no frontend framework here. The only JavaScript that ships is a theme
toggle and the filters on the blog and projects lists. Turn JavaScript off and
you still get every post, every project, in full.

Content is MDX in a folder, validated by schemas — if I typo a date or forget a
description the build fails instead of the page. Markdown runs through
[satteri](https://www.npmjs.com/package/satteri) with two plugins I wrote: one
marks external links, the other turns lone images into captioned figures.

Social cards are drawn at build time with satori and resvg — one per post and
per project, no image service, nothing running when you open the page.

Type is DM Serif Display and Lora. Hosted on GitHub Pages. It is open source:
[read the code](https://github.com/angelod1as/portfolio).

This project was created with [non-creative assistance](https://declare-ai.org/1.0.0/non-creative.html) from Claude Code. `CLAUDE.md` has strict rules about not writing any code, just helping with information. I have strong opinions on using AI creatively, but to hear them you must (at least) buy me fried chicken.
