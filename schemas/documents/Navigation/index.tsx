import { defineField, defineType } from "sanity";
import { LinkIcon } from "@sanity/icons";

export default defineType({
  name: "navigation",
  type: "document",
  title: "Navigation",
  icon: LinkIcon,
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      type: "array",
      name: "sections",
      title: "Sections",
      of: [{ type: "navigation.section" }],
    }),
  ],
  //   preview: {
  //     select: {
  //       title: "content",
  //       backgroundColour: "backgroundColour",
  //     },
  //     prepare({ title, backgroundColour }: any) {
  //       let customTitle = "No title";
  //       if (title && title[0]) {
  //         customTitle = title
  //           .map((text: any) => text.children.map((child: any) => child.text))
  //           .join(" ");
  //       }
  //       return {
  //         title: customTitle,
  //         media: (
  //           <span
  //             style={{
  //               border: "solid",
  //               borderWidth: "0.5px",
  //               borderColor: "white",
  //               width: "2rem",
  //               height: "2rem",
  //               backgroundColor: backgroundColour.value,
  //             }}
  //           />
  //         ),
  //       };
  //     },
  //   },
});
