import type { CollectionEntry } from "astro:content";

export const byPubDate = (
  a: CollectionEntry<"blog">,
  b: CollectionEntry<"blog">,
) => b.data.pubDate.getTime() - a.data.pubDate.getTime();

export const byYear = (
  a: CollectionEntry<"projects">,
  b: CollectionEntry<"projects">,
) => {
  const aTo = a.data.year.to ?? Number.MAX_SAFE_INTEGER;
  const bTo = b.data.year.to ?? Number.MAX_SAFE_INTEGER;
  return bTo - aTo || b.data.year.from - a.data.year.from;
};

export const splitHighlighted = (projects: CollectionEntry<"projects">[]) => ({
  highlighted: projects
    .filter((p) => p.data.highlighted)
    .sort((a, b) => (a.data.highlighted ?? 0) - (b.data.highlighted ?? 0)),
  rest: projects.filter((p) => !p.data.highlighted).sort(byYear),
});
