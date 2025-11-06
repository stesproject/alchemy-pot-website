import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  AUTHOR: "Stefano Mercadante",
  TITLE: "Alchemy Pot",
  DESCRIPTION:
    "Alchemy Pot is a space about game development and full of useful resources for your projects.",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects with download links.",
};

export const GAMES: Metadata = {
  TITLE: "Games",
  DESCRIPTION: "A collection of my games with download links.",
};

export const RESOURCES: Metadata = {
  TITLE: "Resources",
  DESCRIPTION: "A collection of resources for game development.",
};

export const SOCIALS: Socials = [
  // {
  //   NAME: "BlueSky",
  //   HREF: "https://bsky.app/profile/stefhhh.bsky.social",
  // },
  // {
  //   NAME: "Mastodon",
  //   HREF: "https://mastodon.gamedev.place/@stefh",
  // },
  {
    NAME: "GitHub",
    HREF: "https://github.com/stesproject",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/stefano-mercadante",
  },
  {
    NAME: "Resume",
    HREF: "/files/cv/index.pdf",
  },
];
