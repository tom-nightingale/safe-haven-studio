import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "orderRank",
      title: "Order",
      type: "string",
      hidden: true,
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "localeText",
      description: "Content of the banner",
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "link" }],
    }),
    defineField({
      title: "Background Colour",
      name: "backgroundColour",
      type: "simplerColor",
      description: "Background colour of the banner",
      initialValue: "#000000",
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: "Use dark text theme?",
      name: "darkTextTheme",
      type: "boolean",
      description: "Use a dark text theme for the banner?",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "content",
      backgroundColour: "backgroundColour",
    },
    prepare({ title, backgroundColour }: any) {
      let customTitle = "No title";
      if (title && title[0]) {
        customTitle = title
          .map((text: any) => text.children.map((child: any) => child.text))
          .join(" ");
      }
      return {
        title: customTitle,
        media: (
          <span
            style={{
              border: "solid",
              borderWidth: "0.5px",
              borderColor: "white",
              width: "2rem",
              height: "2rem",
              backgroundColor: backgroundColour.value,
            }}
          />
        ),
      };
    },
  },
});
