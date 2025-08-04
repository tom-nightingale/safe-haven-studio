import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";
import { ImageIcon } from "@sanity/icons";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "object",
  icon: ImageIcon,
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
  components: { preview: BlockPreview },
  preview: {
    prepare() {
      return {
        title: "Gallery",
      };
    },
  },
});
