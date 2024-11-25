import { defineField, defineType } from "sanity";
import { Preview } from "./Preview";

export default defineType({
  name: "spacer",
  title: "Spacer",
  type: "object",
  fields: [
    defineField({
      title: "Size",
      name: "spacerSize",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
      description: "Size of the spacer to be used",
      initialValue: "left",
      validation: rule => rule.required(),
    }),
  ],
  components: { preview: Preview },
  preview: {
    select: {
      title: "spacerSize",
    },
  },
});
