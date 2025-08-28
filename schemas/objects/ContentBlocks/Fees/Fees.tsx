import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";
import { BillIcon } from "@sanity/icons";

export default defineType({
  name: "fees",
  title: "Fees",
  type: "object",
  icon: BillIcon,
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
      title: "Reverse layout? ",
      name: "reverseLayout",
      type: "boolean",
      description:
        "Reverse the layout of the fees block? (Useful if one fee block follows another)",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Fees",
      name: "fees",
      type: "array",
      of: [{ type: "fee" }],
      validation: rule => rule.min(1),
    }),
    defineField({
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "link" }],
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
    prepare(selection) {
      return {
        title: selection?.title ?? "Fees",
        subtitle: selection?.subtitle,
      };
    },
  },
});
