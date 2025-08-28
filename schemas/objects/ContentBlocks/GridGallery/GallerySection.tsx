import { defineField, defineType } from "sanity";

import { ImagesIcon } from "@sanity/icons";

export default defineType({
  name: "gallerySection",
  title: "Gallery Section",
  type: "object",
  icon: ImagesIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Title",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      description: "Subtitle",
    }),
    defineField({
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "imageBlock" }],
      options: {
        layout: "grid",
      },
      validation: rule => rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});
