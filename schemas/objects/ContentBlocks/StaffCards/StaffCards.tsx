import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

export default defineType({
  name: "staffCards",
  title: "Staff Cards",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Title",
    }),
    defineField({
      title: "Text",
      name: "text",
      type: "blockContent",
      description: "Text",
    }),
    defineField({
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "link" }],
      validation: rule => rule.max(1),
    }),
    defineField({
      title: "Staff Profiles",
      name: "staffProfiles",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "staff",
            },
          ],
        },
      ],
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "title",
    },
  },
});
