import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

export default defineType({
  name: "locationDetails",
  title: "Location Details",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Text",
    }),
    defineField({
      title: "Text",
      name: "text",
      type: "blockContent",
      description: "Text",
    }),
  ],
  initialValue: {
    title: "Our Locations",
  },
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "title",
    },
  },
});
