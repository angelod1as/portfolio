# Contract — the public address surface

Every address the site answers on. Anything not listed here returns the not-found page.

## Entries

| Address         | What                                                    |
| --------------- | ------------------------------------------------------- |
| `/YYYY/MM/slug` | One entry, from any lane. The only entry address shape. |
| `/YYYY`         | Year archive — every entry published that year.         |

## Lanes

| Address           | What                            |
| ----------------- | ------------------------------- |
| `/essays`         | All essays, newest first.       |
| `/notes`          | All notes, newest first.        |
| `/work`           | All work, plus recommendations. |
| `/library`        | Everything in the library.      |
| `/library/books`  | Medium filters.                 |
| `/library/series` |                                 |
| `/library/films`  |                                 |
| `/now`            | The standing page.              |

Medium filters are separate built pages, reachable by plain links. No JavaScript is
involved (FR-033). The site has no language routes — it does not model language.

## Subjects

| Address       | What                                                |
| ------------- | --------------------------------------------------- |
| `/tags`       | Every tag in use, with a count.                     |
| `/tags/<tag>` | Every entry with that tag, any lane, lane labelled. |

## Site

| Address              | What                                         |
| -------------------- | -------------------------------------------- |
| `/`                  | Homepage — a taste of each lane.             |
| `/rss.xml`           | Feed covering all published entries.         |
| `/sitemap-index.xml` | Index pointing at `/sitemap-0.xml`.          |
| `/sitemap-0.xml`     | Every address above except `/404`.           |
| `/404`               | Not-found, for unknown tags, years, entries. |

The sitemap is split into an index and a numbered file because that is what the sitemap
integration emits. `/sitemap.xml` is deliberately not an address — nothing links to it and
crawlers are pointed at the index by `robots.txt`.

## Reserved

`essays`, `notes`, `work`, `library`, `now`, `tags` are reserved words. A year can never
collide with them because years are numeric.

## Not answered

`/blog/*` and `/projects/*` from the old site. They break at cutover, by decision. No
redirects.
