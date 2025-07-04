import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export default defineType({
  name: "post",
  title: "Blog Posts",
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
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
      description: "Which category does this blog post relate to?",
      validation: rule => rule.required(),
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
      category: "category.title",
    },
    prepare({
      name,
      articleImage,
      category,
    }: {
      name: String;
      articleImage: any;
      category: any;
    }) {
      return {
        title: name,
        subtitle: category ? `Category: ${category}` : "No category yet...",
        media: articleImage?.image?.asset,
      };
    },
  },
});
