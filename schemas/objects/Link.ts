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
      title: "Background Colour",
      name: "backgroundColour",
      type: "simplerColor",
      description: "Background colour of the CTA",
      initialValue: "#000000",
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: "Use dark text theme?",
      name: "darkTextTheme",
      type: "boolean",
      description: "Use a dark text theme for CTA text?",
      initialValue: false,
    }),
    defineField({
      title: "Open in new window?",
      name: "targetBlank",
      type: "boolean",
      description: "Should this link open in new window",
      initialValue: false,
    }),
  ],
});
