import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Posts",
  type: "document",
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
      title: "Article Image",
      name: "articleImage",
      type: "imageBlock",
      validation: rule => rule.required(),
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
      articleImage: "articleImage",
    },
    prepare({ name, articleImage }: { name: String; articleImage: any }) {
      return {
        title: name,
        media: articleImage?.image?.asset,
      };
    },
  },
});
