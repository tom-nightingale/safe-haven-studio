import { defineField, defineType } from "sanity";

export default defineType({
  name: "fileBlock",
  title: "File",
  type: "object",
  fields: [
    defineField({
      title: "File",
      name: "file",
      type: "file",
    }),
    defineField({
      title: "Label",
      name: "label",
      type: "string",
      description: "Label to use for the file",
    }),
  ],
  preview: {
    select: {
      title: "label",
    },
  },
});
