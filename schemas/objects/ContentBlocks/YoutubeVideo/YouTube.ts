import { defineType, defineField } from "sanity";
import { PlayIcon } from "@sanity/icons";
import { Preview } from "./Preview";

export default defineType({
  name: "youtube",
  title: "YouTube Embed",
  type: "object",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "Enter a YouTube video URL",
    }),
  ],
  components: { preview: Preview },
  preview: {
    select: { title: "url" },
  },
});
