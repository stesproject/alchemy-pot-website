import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  AUTHOR: "Stefano Mercadante",
  TITLE: "Alchemy Pot",
  DESCRIPTION: "Alchemy Pot is a space about game development and full of useful resources for your projects.",
  EMAIL: "stefmercadante@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const RESOURCES: Metadata = {
  TITLE: "Resources",
  DESCRIPTION: "A collection of resources for game development.",
};

export const ASSETS: Metadata = {
  TITLE: "Assets",
  DESCRIPTION: "A collection of assets for game development.",
};

export const GODOT_2D_TOPDOWN_TEMPLATE: Metadata = {
  TITLE: "Godot 2D Topdown Template",
  DESCRIPTION:
    "A template for creating 2D topdown games in Godot Engine.",
};

export const SOCIALS: Socials = [
  {
    NAME: "BlueSky",
    HREF: "https://bsky.app/profile/stefhhh.bsky.social",
  },
  {
    NAME: "Mastodon",
    HREF: "https://mastodon.gamedev.place/@stefh",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/stesproject",
  },
  {
    NAME: "Email",
    HREF: `mailto:${SITE.EMAIL}`,
  }
];
