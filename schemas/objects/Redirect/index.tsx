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
      // validation: (rule: Rule) => slugValidator(rule),
    }),
    defineField({
      name: "destination",
      type: "slug",
      // validation: (rule: Rule) => slugValidator(rule),
    }),
    defineField({
      title: "Status",
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "301", value: "301" },
          { title: "302", value: "302" },
          { title: "303", value: "303" },
          { title: "307", value: "307" },
          { title: "308", value: "308" },
        ],
      },
      description: "Redirect status",
      initialValue: "301",
      // validation: rule => rule.required(),
    }),
    defineField({
      title: "Match",
      name: "match",
      type: "string",
      options: {
        list: [
          { title: "Exact", value: "exact" },
          { title: "Prefix", value: "prefix" },
        ],
      },
      description: "Redirect match type",
      initialValue: "exact",
      // validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      source: "source",
      destination: "destination",
    },
    prepare({ source, destination }: { source: Slug; destination: Slug }) {
      return {
        title: `${source?.current}   →   ${destination?.current}`,
      };
    },
  },
});
