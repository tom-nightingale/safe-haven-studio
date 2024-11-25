import { defineField, defineType } from "sanity";

export default defineType({
  name: "contentBlocks",
  title: "Content Blocks",
  type: "object",
  fields: [
    defineField({
      title: "Content Blocks",
      name: "contentblocks",
      type: "array",
      of: [
        { type: "hero" },
        { type: "video" },
        { type: "spacer" },
        { type: "twoImageHero" },
        { type: "textWithCta" },
      ],
    }),
  ],
});
