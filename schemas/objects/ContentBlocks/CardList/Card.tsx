import { defineField, defineType } from "sanity";

export default defineType({
  name: "cardListCard",
  title: "Card List Card",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Title of the card",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      description: "Subtitle of the card",
      // validation: rule => rule.required(),
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "imageBlock",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Link",
      name: "link",
      type: "link",
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image.image",
    },
    prepare: ({ title, subtitle, media }) => ({
      title: title,
      subtitle: subtitle,
      media: media,
    }),
  },
});
