import { defineField, defineType } from "sanity";
import { Preview } from "./Preview";

export default defineType({
  name: "carousel",
  title: "Carousel",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "localeString",
      description: "Title",
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "localeString",
      description: "Subtitle",
    }),
    defineField({
      title: "Text",
      name: "text",
      type: "blockContent",
      description: "Text",
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
      description: "The text colour theme to use within the hero",
      initialValue: "light",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Carousel Cards",
      name: "carouselCards",
      type: "array",
      of: [{ type: "carouselCard" }],
      validation: rule => rule.min(1),
    }),
  ],
  components: { preview: Preview },
  preview: {
    select: {
      title: "title.en",
      subtitle: "subtitle.en",
      carouselCards: "carouselCards",
      media: "carouselCards[0].image.image",
    },
  },
});
