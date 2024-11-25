import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

export default defineType({
  name: "navigation",
  type: "document",
  title: "Navigation",
  icon: LinkIcon,
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      type: "array",
      name: "sections",
      title: "Sections",
      of: [{ type: "navigation.section" }],
    }),
  ],
});
