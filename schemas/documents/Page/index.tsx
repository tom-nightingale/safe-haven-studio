import { defineField, defineType } from "sanity";

import { EditIcon } from "@sanity/icons";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: EditIcon,
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
      title: "Page type",
      name: "pageType",
      type: "string",
      options: {
        list: [
          { title: "Page", value: "page" },
          { title: "Room", value: "room" },
        ],
      },
      group: "content",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      group: "content",
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      group: "content",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      validation: Rule => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
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
  initialValue: {
    pageType: "page",
  },
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: { title: string }) {
      return {
        title: title,
      };
    },
  },
});
