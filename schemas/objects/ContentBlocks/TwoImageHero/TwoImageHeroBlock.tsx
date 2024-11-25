import { defineField, defineType } from "sanity";

export default defineType({
  name: "twoImageHeroBlock",
  title: "Two Image Hero Block",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "localeString",
      description: "Title of the block",
      validation: rule => rule.required(),
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
      title: "title.en",
      media: "image.image",
    },
    prepare: ({ title, media }) => ({
      title: title,
      media: media,
    }),
  },
});
