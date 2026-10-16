// The four desktop apps. `corner` places them on the desktop at md+ widths.
export const APPS = [
  {
    id: "agents",
    path: "/agents",
    file: "agents.log",
    title: "Experience",
    blurb: "Where I build agents for a living",
    corner: "tl",
  },
  {
    id: "projects",
    path: "/projects",
    file: "projects.vol",
    title: "Projects",
    blurb: "Agents, backends and models I've shipped",
    corner: "tr",
  },
  {
    id: "profile",
    path: "/profile",
    file: "profile.sys",
    title: "Profile",
    blurb: "Who I am, what I use, what I've earned",
    corner: "bl",
  },
  {
    id: "contact",
    path: "/contact",
    file: "contact.app",
    title: "Contact",
    blurb: "Open a channel",
    corner: "br",
  },
];

export const appForPath = (pathname) => APPS.find((a) => pathname.startsWith(a.path));

export const BOOT_KEY = "sagaros.booted";
