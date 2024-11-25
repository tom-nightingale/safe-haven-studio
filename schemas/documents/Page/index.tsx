import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: BlockContentIcon,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "orderRank",
      title: "Order",
      type: "string",
      hidden: true,
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "localeString",
      group: "content",
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: "Use dark header theme?",
      name: "darkHeaderTheme",
      type: "boolean",
      description: "Use a dark header theme?",
      initialValue: false,
      group: "content",
    }),
    defineField({
      title: "Content Blocks",
      name: "contentBlocks",
      type: "contentBlocks",
      group: "content",
    }),
    defineField({
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "seo",
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
