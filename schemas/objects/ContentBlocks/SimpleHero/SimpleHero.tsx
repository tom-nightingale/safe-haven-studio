import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";
import { ImageIcon } from "@sanity/icons";

export default defineType({
  name: "simpleHero",
  title: "Simple Hero",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      title: "Top Line",
      name: "topLine",
      type: "string",
      description: "Top Line",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      description: "Subtitle",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Title",
    }),
    defineField({
      title: "Buttons",
      name: "buttons",
      type: "array",
      of: [{ type: "link" }],
      validation: rule => rule.max(1),
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    prepare() {
      return {
        title: "Simple Hero",
      };
    },
  },
});
