import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  title: "Link object",
  type: "object",
  fields: [
    defineField({
      title: "Label",
      name: "label",
      type: "localeString",
      description: "Label to use for the link",
    }),
    defineField({
      title: "Href",
      name: "href",
      type: "string",
      description: "Link destination",
      validation: rule =>
        rule.max(50).warning("Shorter titles are usually better"),
    }),
    defineField({
      title: "Open in new window?",
      name: "targetBlank",
      type: "boolean",
      description: "Should this link open in new window",
    }),
  ],
});
