import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET({ site }) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return rss({
    title: "Scripted - A Modern Blog",
    description: "Thoughts, tutorials, and insights on development, writing, and technology",
    site: site || "https://scripted.qzz.io",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
