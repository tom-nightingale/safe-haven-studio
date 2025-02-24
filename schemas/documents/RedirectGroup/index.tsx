import { defineType, defineField, type Rule, type Slug } from "sanity";
import { EqualIcon } from "@sanity/icons";

export default defineType({
  name: "redirectGroup",
  title: "Redirect Groups",
  type: "document",
  icon: EqualIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "redirects",
      title: "Redirects",
      type: "array",
      of: [{ type: "redirect" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: { title: any }) {
      return {
        title: title,
      };
    },
  },
});
