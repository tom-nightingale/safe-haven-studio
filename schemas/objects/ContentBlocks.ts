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
        { type: "carousel" },
        { type: "hero" },
        { type: "spacer" },
        { type: "textWithCta" },
        { type: "textWithImage" },
        { type: "twoImageHero" },
        { type: "video" },
      ],
    }),
  ],
});
