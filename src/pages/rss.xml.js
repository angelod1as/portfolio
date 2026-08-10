import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { byDate } from "../utils/sort";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    byDate,
  );

  return rss({
    title: "I am angelo and I do blogging",
    description: "Writing about code, career, and whatever else is on my mind",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      categories: post.data.categories,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
