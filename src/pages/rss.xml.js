import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const projects = (await getCollection("projects")).filter(
    (post) => !post.data.draft,
  );

  const resources = await getCollection("resources");

  const assets = await getCollection("assets");

  const godot2dtopdowntemplate = (
    await getCollection("godot-2d-topdown-template")
  ).filter((post) => !post.data.draft);

  const items = [
    ...projects,
    ...resources,
    ...assets,
    ...godot2dtopdowntemplate,
  ].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.id}/`,
    })),
  });
}
