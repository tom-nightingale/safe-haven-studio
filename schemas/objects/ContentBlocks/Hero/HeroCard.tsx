import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

export default defineType({
  name: "heroCard",
  title: "Hero Card",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Title",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      description: "Subtitle",
    }),
    defineField({
      title: "link",
      name: "link",
      type: "link",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Colour Theme",
      name: "colourTheme",
      type: "string",
      options: {
        list: [
          { title: "Peach", value: "peach" },
          { title: "Blue", value: "blue" },
          { title: "Yellow", value: "yellow" },
        ],
      },
      description: "Subtitle",
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});
