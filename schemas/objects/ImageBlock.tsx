import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageBlock",
  title: "Image",
  type: "object",
  fields: [
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image",
    }),
    defineField({
      title: "Alt Text",
      name: "altText",
      type: "localeString",
      description: "Alt text to use for the image",
    }),
  ],
  preview: {
    select: {
      title: "altText.en",
      media: "image",
    },
  },
});
