import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

export default defineType({
  name: "cardList",
  title: "Card List",
  type: "object",
  fields: [
    defineField({
      title: "Scalloped Top?",
      name: "scallopedTop",
      type: "boolean",
      description: "Does this block need a scalloped top?",
    }),
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
      title: "Cards",
      name: "cards",
      type: "array",
      of: [{ type: "cardListCard" }],
      validation: rule => rule.required().min(3),
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "cards[0].image.image",
    },
  },
});
