import { defineField, defineType } from "sanity";
import { MarkerIcon } from "@sanity/icons";

export default defineType({
  name: "nursery",
  title: "Nurseries",
  type: "document",
  icon: MarkerIcon,
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
      type: "string",
      validation: Rule => Rule.required(),
      group: "content",
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "blockContent",
      group: "content",
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
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      name: "title",
    },
    prepare({ name }: { name: string }) {
      return {
        title: name,
      };
    },
  },
});
