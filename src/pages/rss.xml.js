import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  // const blog = (await getCollection("blog")).filter((post) => !post.data.draft);

  const projects = (await getCollection("projects")).filter(
    (project) => !project.data.draft,
  );

  const resources = await getCollection("resources");

  const assets = await getCollection("assets");

  const godot2dtopdowntemplate = (
    await getCollection("godot-2d-topdown-template")
  ).filter((project) => !project.data.draft);

  const items = [
    ...projects,
    ...resources,
    ...assets,
    ...godot2dtopdowntemplate,
  ].sort((a, b) =>
    a.data.date
      ? new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
      : a.data.index - b.data.index,
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
