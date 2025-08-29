import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET({ site }: { site: URL }) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return rss({
    title: "Scripted - A Personal Blog",
    description: "A personal blog where I share thoughts, experiences, and whatever interests me",
    site: site || "https://scripted.qzz.io",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
