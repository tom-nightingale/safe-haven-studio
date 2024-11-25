import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

export default defineType({
  name: "twoImageHero",
  title: "Two Image Hero",
  type: "object",
  fields: [
    defineField({
      title: "Two Image Hero Blocks",
      name: "blocks",
      type: "array",
      of: [{ type: "twoImageHeroBlock" }],
      validation: rule => rule.required().min(2).max(2),
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "blocks[0].title.en",
      subtitle: "blocks[1].title.en",
      media: "blocks[0].image.image",
    },
  },
});
