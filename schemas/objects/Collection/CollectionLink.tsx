import { defineField, defineType } from "sanity";
import { CollectionLinkComponent } from "./CollectionLinkComponent";

export default defineType({
  name: "collectionLink.link",
  title: "Collection Link Object",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
    }),
    defineField({
      name: "fullPath",
      title: "Full Path",
      type: "string",
    }),
  ],
  components: {
    input: CollectionLinkComponent,
  },
  //   preview: {
  //     select: {
  //       title: "title",
  //       targetTitle: "target.title",
  //     },
  //     prepare: ({ title, targetTitle }) => ({
  //       title: title || targetTitle,
  //     }),
  //   },
});
