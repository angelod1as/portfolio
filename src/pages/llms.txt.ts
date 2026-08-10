import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { formatCardDate } from "../utils/format-date";
import { byDate, byYear } from "../utils/sort";

// https://llmstxt.org — a map of the site for anything reading it as text.
// Generated from the collections so it can't drift out of date the way a
// hand-written file in public/ would.
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;

  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    byDate,
  );
  const projects = (await getCollection("projects")).sort(byYear);

  const lines = [
    "# Angelo Dias",
    "",
    "> Developer, writer and designer. Award-winning journalist turned generalist — communication applied to technology.",
    "",
    "## Pages",
    "",
    `- [Home](${url("/")}): introduction, latest writing and projects.`,
    `- [Blog](${url("/blog/")}): writing about code, career, and whatever else is on my mind.`,
    `- [Projects](${url("/projects/")}): personal and professional work, filterable by what it is and its medium.`,
    `- [Recommendations](${url("/recommendations/")}): what people I've worked with have to say.`,
    `- [More](${url("/more/")}): who I am, what I want, where I've worked, and how this site is built.`,
    `- [RSS](${url("/rss.xml")}): feed of the blog.`,
    "",
    "## Blog",
    "",
    ...posts.map(
      (post) =>
        `- [${post.data.title}](${url(`/blog/${post.id}/`)}): ${post.data.description}`,
    ),
    "",
    "## Projects",
    "",
    ...projects.map(
      (project) =>
        `- [${project.data.title}](${url(`/projects/${project.id}/`)}) (${formatCardDate(
          project.data.year.from,
          project.data.year.to,
        )}, ${project.data.type}): ${project.data.description}`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
