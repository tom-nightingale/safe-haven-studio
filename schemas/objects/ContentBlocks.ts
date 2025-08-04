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
        { type: "simpleHero" },
        { type: "cardList" },
        { type: "textWithImage" },
        { type: "reviewsCarousel" },
        { type: "staffCards" },
        { type: "locationDetails" },
        { type: "gallery" },
        // { type: "carousel" },
        // { type: "spacer" },
        // { type: "textWithCta" },
        // { type: "video" },
      ],
    }),
  ],
});
