import { Theme } from "~/composables/theme-utils";

export const redline: Theme = {
  key: "redline",
  name: "Redline",
  inspiration: "Redline Anime",
  inspirationUrl: "https://myanimelist.net/anime/6675/Redline",
  mode: "light",
  shadow: "white",
  shadowStyle: {
    opacity: 0,
  },
  background: `#fbb739`,
  appStyle: {
    backgroundColor: `white`,
    border: "1.5px solid black",
  },
  monaco: {
    foreground: `hsl(0, 0%, 0%)`,
    comments: `hsl(0, 0%, 60%)`,
    numbers: "hsl(219, 50%, 44%)",
    delimiters: `hsl(0, 0%, 0%)`,
    keywords: `hsl(219, 58%, 58%)`,
    strings: `hsl(24, 87%, 44%)`,
    regexp: `hsl(0, 0%, 0%)`,
    selectionBackground: `hsl(336, 0%, 92%)`,
  },
};
