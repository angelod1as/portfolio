# Contract — the public address surface

Every address the site answers on. Anything not listed here returns the not-found page.

## Entries

| Address         | What                                                    |
| --------------- | ------------------------------------------------------- |
| `/YYYY/MM/slug` | One entry, from any lane. The only entry address shape. |
| `/YYYY`         | Year archive — every entry published that year.         |

## Lanes

| Address           | What                                    |
| ----------------- | --------------------------------------- |
| `/essays`         | All essays, newest first.               |
| `/essays/en`      | English only.                           |
| `/essays/pt`      | Portuguese only.                        |
| `/notes`          | Same three forms.                       |
| `/notes/en`       |                                         |
| `/notes/pt`       |                                         |
| `/work`           | Same three forms, plus recommendations. |
| `/work/en`        |                                         |
| `/work/pt`        |                                         |
| `/library`        | Same three forms.                       |
| `/library/en`     |                                         |
| `/library/pt`     |                                         |
| `/library/books`  | Medium filters.                         |
| `/library/series` |                                         |
| `/library/films`  |                                         |
| `/now`            | The standing page.                      |

Language and medium filters are separate built pages, reachable by plain links. No
JavaScript is involved (FR-033).

## Subjects

| Address       | What                                                |
| ------------- | --------------------------------------------------- |
| `/tags`       | Every tag in use, with a count.                     |
| `/tags/<tag>` | Every entry with that tag, any lane, lane labelled. |

## Site

| Address        | What                                         |
| -------------- | -------------------------------------------- |
| `/`            | Homepage — a taste of each lane.             |
| `/rss.xml`     | Feed covering all published entries.         |
| `/sitemap.xml` | Every address above.                         |
| `/404`         | Not-found, for unknown tags, years, entries. |

## Reserved

`essays`, `notes`, `work`, `library`, `now`, `tags` are reserved words. A year can never
collide with them because years are numeric.

## Not answered

`/blog/*` and `/projects/*` from the old site. They break at cutover, by decision. No
redirects.
