import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation.link",
  title: "Link",
  type: "object",
  preview: {
    select: {
      title: "title",
      targetTitle: "target.title",
    },
    prepare: ({ title, targetTitle }) => ({
      title: title || targetTitle,
    }),
  },
  fields: [
    defineField({
      type: "reference",
      name: "target",
      title: "Link target",
      to: [{ type: "page" }, { type: "nursery" }, { type: "category" }],
      description: "Description",
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
});
