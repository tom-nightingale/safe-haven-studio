import { defineField, defineType } from "sanity";

export default defineType({
  name: "option",
  title: "Option",
  type: "object",
  fields: [
    defineField({
      name: "options",
      title: "Options",
      type: "array",
      of: [
        {
          name: "option",
          title: "Option",
          type: "productOption",
        },
      ],
    }),
  ],
});
