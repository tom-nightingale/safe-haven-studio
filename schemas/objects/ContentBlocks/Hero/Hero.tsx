import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      title: "Hero Type",
      name: "heroType",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Simple", value: "simple" },
        ],
      },
      description: "Hero Type (Default has an image, simple does not)",
    }),
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
      title: "Age Group",
      name: "ageGroup",
      type: "string",
      description: "Age group",
      hidden: ({ parent }) => parent?.heroType === "default",
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

    // defineField({
    //   title: "Text",
    //   name: "text",
    //   type: "blockContent",
    //   description: "Text",
    // }),
    // // defineField({
    // //   title: "Alignment",
    // //   name: "textAlignment",
    // //   type: "string",
    // //   options: {
    // //     list: [
    // //       { title: "Left", value: "left" },
    // //       { title: "Center", value: "center" },
    // //       { title: "Right", value: "right" },
    // //     ],
    // //   },
    // //   description: "Text alignment",
    // //   initialValue: "left",
    // //   validation: rule => rule.required(),
    // // }),
    // defineField({
    //   title: "Colour Theme",
    //   name: "colourTheme",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Light", value: "light" },
    //       { title: "Dark", value: "dark" },
    //     ],
    //   },
    //   description: "The text colour theme to use",
    //   initialValue: "light",
    //   validation: rule => rule.required(),
    // }),
    // defineField({
    //   title: "Media Type",
    //   name: "mediaType",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Image", value: "image" },
    //       { title: "Video", value: "video" },
    //     ],
    //   },
    //   initialValue: "image",
    //   validation: rule => rule.required(),
    // }),
    // defineField({
    //   title: "Image",
    //   name: "image",
    //   type: "heroImage",
    //   // hidden: ({ parent }) => parent?.mediaType === "video",
    // }),
    // defineField({
    //   title: "Video",
    //   name: "video",
    //   type: "file",
    //   description: "Select a video to be used in the hero",
    //   hidden: ({ parent }) => parent?.mediaType === "image",
    // }),
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
