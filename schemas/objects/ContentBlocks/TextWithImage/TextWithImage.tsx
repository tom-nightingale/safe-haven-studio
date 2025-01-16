import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

export default defineType({
  name: "textWithImage",
  title: "Text With Image",
  type: "object",
  fields: [
    defineField({
      title: "Text",
      name: "text",
      type: "blockContent",
      description: "Text",
    }),
    defineField({
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "link" }],
      validation: rule => rule.max(2),
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "imageBlock",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Colour Theme",
      name: "colourTheme",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
      },
      description: "The text colour theme to use",
      initialValue: "light",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Alignment",
      name: "textAlignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
      description: "Text alignment",
      initialValue: "left",
      validation: rule => rule.required(),
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "text",
      subtitle: "subtitle",
      media: "image.image",
    },
  },
});
