import { defineField, defineType } from "sanity";
import { Preview } from "./Preview";

export default defineType({
  title: "Campaign Slot",
  name: "plpCampaignSlot",
  type: "object",
  fields: [
    defineField({
      title: "PLP Slot",
      name: "slot",
      type: "string",
      options: {
        list: [
          { title: "PLP Slot 1", value: "1" },
          { title: "PLP Slot 2", value: "2" },
          { title: "PLP Slot 3", value: "3" },
        ],
      },
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Content Blocks",
      name: "contentBlocks",
      type: "array",
      of: [
        { type: "carousel" },
        { type: "hero" },
        { type: "textWithImage" },
        { type: "twoImageHero" },
        { type: "video" },
      ],
      validation: rule => [rule.required(), rule.max(1)],
    }),
    defineField({
      title: "Publish on",
      name: "publishOn",
      type: "array",
      description: "Choose a PLP to publish campaign to",
      of: [
        {
          type: "reference",
          weak: true,
          to: [{ type: "collection" }],
        },
      ],
    }),
  ],
  components: { preview: Preview },
  preview: {
    select: {
      slot: "slot",
      contentBlocks: "contentBlocks",
      publishOn: "publishOn",
    },
  },
});
