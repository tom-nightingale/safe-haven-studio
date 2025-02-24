import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
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
      title: "Text",
      name: "text",
      type: "blockContent",
      description: "Text",
    }),
    defineField({
      title: "Alignment",
      name: "textAlignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
      description: "Text alignment",
      initialValue: "left",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Colour Theme",
      name: "colourTheme",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
      },
      description: "The text colour theme to use",
      initialValue: "light",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Media Type",
      name: "mediaType",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
      },
      initialValue: "image",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "heroImage",
      hidden: ({ parent }) => parent?.mediaType === "video",
    }),
    defineField({
      title: "Video",
      name: "video",
      type: "file",
      description: "Select a video to be used in the hero",
      hidden: ({ parent }) => parent?.mediaType === "image",
    }),
    defineField({
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "link" }],
      validation: rule => rule.max(2),
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image.image.[0].image",
    },
  },
});
