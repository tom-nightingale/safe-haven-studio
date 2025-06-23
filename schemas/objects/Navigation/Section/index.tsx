import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation.section",
  type: "object",
  title: "Section",
  fields: [
    defineField({
      type: "reference",
      name: "target",
      title: "Target",
      to: [{ type: "page" }],
    }),
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      description: "Override title from the target.",
    }),
    defineField({
      type: "array",
      name: "children",
      title: "Children",
      of: [{ type: "navigation.link" }],
    }),
  ],
  preview: {
    select: {
      parentTitle: "target.title",
      title: "title",
    },
    prepare({ parentTitle, title }) {
      return {
        title: title ? title : parentTitle,
      };
    },
  },
});
