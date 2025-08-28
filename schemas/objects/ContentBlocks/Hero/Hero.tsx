import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";
import { ImageIcon } from "@sanity/icons";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "blockContent",
      description: "Title",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "blockContent",
      description: "Subtitle",
    }),
    defineField({
      title: "Hero Image",
      name: "heroImage",
      type: "imageBlock",
      description: "Hero Image",
      hidden: ({ parent }) => parent?.heroType === "simple",
    }),
    defineField({
      title: "Hero Cards",
      name: "heroCards",
      type: "array",
      of: [{ type: "heroCard" }],
      hidden: ({ parent }) => parent?.heroType === "simple",
      validation: rule => rule.max(3),
    }),
    defineField({
      title: "Buttons",
      name: "buttons",
      type: "array",
      of: [{ type: "link" }],
      validation: rule => rule.max(2),
    }),
  ],
  initialValue: {
    heroType: "default",
  },
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "heroImage.image",
    },
  },
});
