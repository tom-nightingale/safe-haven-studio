import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

export default defineType({
  name: "reviewsCarousel",
  title: "ReviewsCarousel",
  type: "object",
  fields: [
    defineField({
      title: "Scalloped Top?",
      name: "scallopedTop",
      type: "boolean",
      description: "Does this block need a scalloped top?",
    }),
    defineField({
      title: "Scalloped Bottom?",
      name: "scallopedBottom",
      type: "boolean",
      description: "Does this block need a scalloped bottom?",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "title",
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "title",
    },
  },
});
