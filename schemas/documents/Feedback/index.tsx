import { defineField, defineType } from "sanity";
import { AddCommentIcon } from "@sanity/icons";

export default defineType({
  name: "feedback",
  title: "Feedback",
  type: "document",
  icon: AddCommentIcon,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
  ],
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      group: "content",
    }),
    defineField({
      title: "Star Rating",
      name: "starRating",
      type: "number",
      options: {
        list: [
          { title: "1", value: 1 },
          { title: "2", value: 2 },
          { title: "3", value: 3 },
          { title: "4", value: 4 },
          { title: "5", value: 5 },
        ],
      },
      validation: Rule => Rule.required(),
      group: "content",
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "blockContent",
      group: "content",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare({ title }: { title: any }) {
      return {
        title: title,
      };
    },
  },
});
