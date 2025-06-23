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
      title: "Content",
      name: "content",
      type: "blockContent",
      group: "content",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: { title: any }) {
      return {
        title: title,
      };
    },
  },
});
