import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

export default defineType({
  name: "video",
  title: "Video",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Title",
    }),
    defineField({
      title: "Video (SM)",
      name: "videoSm",
      type: "file",
      description: "Select a video to be used on smaller devices",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Video (LG)",
      name: "videoLg",
      type: "file",
      description: "Select a video to be used on larger devices",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Cover Image",
      name: "coverImage",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Select an image to be used in as the cover image",
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
});
