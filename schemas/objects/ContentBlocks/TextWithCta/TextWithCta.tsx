import { defineField, defineType } from "sanity";
import { Preview } from "./Preview";

export default defineType({
  name: "textWithCta",
  title: "Text with CTA",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Title",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Text",
      name: "text",
      type: "blockContent",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "link" }],
      validation: rule => rule.max(2),
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
  components: { preview: Preview },
  preview: {
    select: {
      title: "title.en",
      text: "text.en[0].children[0].text",
    },
  },
});
