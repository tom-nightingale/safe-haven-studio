import { defineField, defineType } from "sanity";
import { Preview } from "./Preview";

export default defineType({
  name: "carouselCard",
  title: "Carousel Card",
  type: "object",
  fields: [
    defineField({
      title: "Card Type",
      name: "cardType",
      type: "string",
      options: {
        list: [
          { title: "Editorial", value: "editorial" },
          { title: "Product", value: "product" },
        ],
      },
      description: "Card Type",
      initialValue: "editorial",
      validation: rule => rule.required(),
    }),
    // Editorial
    defineField({
      title: "Image",
      name: "image",
      type: "imageBlock",
      hidden: ({ parent }) => parent?.cardType === "product",
      // validation: rule => rule.required(),
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Title",
      hidden: ({ parent }) => parent?.cardType === "product",
      // validation: rule =>
      //   rule.max(50).warning("Shorter titles are usually better"),
    }),
    defineField({
      title: "Link Text",
      name: "linkText",
      type: "string",
      description: "Title",
      hidden: ({ parent }) => parent?.cardType === "product",
      // validation: rule =>
      //   rule.max(50).warning("Shorter titles are usually better"),
    }),
    defineField({
      title: "Href",
      name: "linkHref",
      type: "string",
      description: "Link destination",
      hidden: ({ parent }) => parent?.cardType === "product",
    }),
  ],
  components: { preview: Preview },
  preview: {
    select: {
      title: "title",
      media: "image.image",
      cardType: "cardType",
      productRef: "product", // This will give you the reference
    },
  },
});
