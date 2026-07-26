# angelodias.com.br — v4

## North star

A personal site that carries a complicated person without asking the visitor to
untangle him. Lanes are **formats**, not subjects: Essays, Notes, Work, Library, Now.
Subject lives in tags. A hiring manager clicks _Work_; a curious reader clicks _Essays_
or _Library_; both find the same person from a different door.

The reference shape is `maggieappleton.com`. The aspiration is a site good enough to be
featured on `sidebar.io`.

## Who it is for

Two visitors, in this order:

1. **A hiring manager** who lands from LinkedIn, needs to believe within ten seconds that
   this person can do the work, and then — ideally — stays out of curiosity.
2. **A tech person who is not hiring**, who reads one thing, likes it, and subscribes.

Everyone else is welcome but is not who the structure serves.

## Phases

Decided up front so no early choice paints us into a corner.

| Phase  | What                                                                               |
| ------ | ---------------------------------------------------------------------------------- |
| **v1** | Astro static site, five lanes, **plain HTML — effectively no CSS**, content ported |
| v2     | Design: high contrast black and white plus one accent, sharp corners               |
| v3     | listmonk on the VPS, weekly digest composed from the site's own feed               |
| v4     | Scheduled publishing, and `standalone` entries that go out as their own newsletter |
| v5     | Cronofobia migrated off Substack                                                   |
| later  | Full `/en` `/pt` routing, possibly AI-assisted translation                         |

Only v1 is in scope. Everything below the v1 row is a non-goal until it is not.

## Non-goals

Binding. Work that serves one of these does not get done, however small it looks.

- **No newsletter, no listmonk, no cron, no scheduled publishing at v1.** The frontmatter
  carries `newsletter` and `date`; no code reads them for sending.
- **No Substack or Cronofobia migration.** That list is real and lives elsewhere; it does
  not get moved onto unproven infrastructure.
- **No `/en` `/pt` routes and no translation.** Language is a field, not a route.
- **No CSS beyond block-level layout.** No colours, no fonts, no dark mode, no components,
  no design system. v1 is semantic HTML. Design is v2 and it is a conversation, not a task.
- **No CMS, no comments, no analytics.**
- **No redirects from the old URLs.** Decided: the old `/blog/*` and `/projects/*` links
  break at cutover and that is accepted.
- **No fiction lane.** Fiction is `#fiction` on an Essay.
- **No Instagram embeds.** Instagram is an outbound link.
- **No VPS, Coolify, DNS or deployment work by an agent.** That is a human step.

## Success metric

v1 replaces the live site when all of this is true:

- [ ] Essays, Notes, Work, Library and Now all render
- [ ] Tag filtering and the `en`/`pt` badge + filter work
- [ ] Work fully ported from the current Next.js site
- [ ] Recommendations live, split into professional (LinkedIn) and personal
- [ ] At least 3 essays, 5 notes, 3 library entries — real ones
- [ ] RSS, sitemap and OG images
- [ ] Lighthouse accessibility ≥ 95

Then, as a human step: DNS → the VPS.

The metric behind the metric: Angelo publishes without friction. If writing a note is
harder than opening Substack, v1 failed regardless of the checklist.

## Failure tolerance

A personal site, self-hosted on a box Angelo owns. No SLA, no pager, nobody else depends
on it. An outage is embarrassing, not expensive.

But: `angelodias.com.br` is the professional front door. A broken build served to a hiring
manager costs more than a day of downtime. So the gate is strict even though the stakes
are low.

## Constraints

- **Repo:** `github.com/angelod1as/portfolio`, branch `v4` off `main`, worked in the
  `../v4` worktree. `main` stays live on Vercel and is not touched.
- **Stack:** Astro 7, MDX, pnpm, Node ≥ 20. No UI framework.
- **Built from scratch.** The `v3` branch and the `astro/` folder are earlier attempts.
  They are not a starting point and their structure is not inherited — neither their
  routes, their components, nor their content model.
- **URLs are date-stamped:** `/2026/07/why-i-left-nextjs`. One shape for every entry
  regardless of lane, mirroring how content is already filed on disk
  (`content/blog/2022/05/…`). Lane indexes (`/essays`, `/notes`, …) are views over that,
  and `/2026` is a year archive.
- **Tags are free-form.** No fixed vocabulary — it does not exist yet and inventing one now
  would be wrong. `/tags` makes the drift visible; revisit past roughly 30 tags.
- **Host:** the Hostinger KVM2 — 2 vCPU, 8 GB, 100 GB — running Coolify. v1 deploys there,
  not to Vercel. The same box will later carry listmonk and Postgres. **When that deploy
  happens is Angelo's call, and Angelo does it** — no agent touches the box.
- **Content lives in `content/`,** outside `src/`, loaded by glob loaders.
- **Bilingual:** every entry declares `lang: en | pt`.

## Who reviews

Angelo, alone. There is no second reviewer, which is why the gate has to be honest and why
the halt list in `.os/autonomy.yaml` is long.

## Porting the old content

The existing frontmatter is **not** compatible. Porting needs a migration script — 12 blog
posts, 22 projects, all mechanical:

| Old                              | New                                 |
| -------------------------------- | ----------------------------------- |
| `createdAt` (epoch milliseconds) | `date`                              |
| `categories`                     | `tags`                              |
| absent                           | `lang`, assigned per file by Angelo |
| `draft: true`                    | unchanged                           |

Two more things about the port:

- **Old titles contain markdown** (`I **gave up** on my fountain pen`). The migration
  strips it — titles are plain strings. Angelo has approved this; it is the one exception
  to "never touch the prose", and it applies to titles only.
- **Projects carry a richer shape than essays or notes:** `type: personal | professional`,
  `hero { src, alt }`, `live`, and a `summary` object of `when / where / who / what / why`.
  The Work lane keeps this. It is the reason Work is a lane and not a tag.

## Library

Goodreads has no API — access was shut down in 2020 and is not coming back. The Library
lane is hand-written markdown, one file per book, optionally enriched from Open Library by
ISBN at the time of writing. No runtime dependency on any book service.

## Recommendations

Professional recommendations are ported from the current site (LinkedIn). Personal
recommendations do not exist yet and Angelo will collect them. The lane ships with whatever
exists; an empty personal list is acceptable at v1.
