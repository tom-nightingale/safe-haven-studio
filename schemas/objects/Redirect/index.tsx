import { defineField, defineType } from "sanity";
import { type Rule, type Slug } from "sanity";

const slugValidator = (rule: Rule) =>
  rule.required().custom((value: Slug) => {
    if (!value || !value.current) return "Can't be blank";
    if (!value.current.startsWith("/")) {
      return "The path must start with a /";
    }
    return true;
  });

export default defineType({
  name: "redirect",
  title: "Redirect",
  type: "object",
  fields: [
    defineField({
      name: "source",
      type: "slug",
      validation: (rule: Rule) => slugValidator(rule),
    }),
    defineField({
      name: "destination",
      type: "slug",
      validation: (rule: Rule) => slugValidator(rule),
    }),
    defineField({
      name: "permanent",
      type: "boolean",
    }),
  ],
  initialValue: {
    permanent: true,
  },
  preview: {
    select: {
      source: "source",
      destination: "destination",
    },
    prepare({ source, destination }: { source: Slug; destination: Slug }) {
      return {
        title: `${source?.current} → ${destination?.current}`,
      };
    },
  },
});
