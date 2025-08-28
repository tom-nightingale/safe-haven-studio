import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";

export default defineType({
  name: "staffSection",
  title: "Staff Section",
  type: "object",
  icon: UsersIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Title",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      description: "Subtitle",
    }),
    defineField({
      title: "Staff",
      name: "staff",
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
      validation: rule => rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});
