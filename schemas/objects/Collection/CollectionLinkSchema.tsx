import { defineField, defineType } from "sanity";

export default defineType({
  title: "Collection Link",
  name: "collectionLink",
  type: "object",
  fields: [
    defineField({
      name: "collectionLink",
      title: "Collection Link",
      type: "collectionLink.link",
    }),
    defineField({
      name: "customTitle",
      title: "Custom Title",
      type: "localeString",
    }),
  ],
  preview: {
    select: {
      collectionLink: "collectionLink",
      localeTitle: "customTitle",
    },
    prepare(selection) {
      const { collectionLink, localeTitle } = selection;
      return {
        title: localeTitle?.en ? localeTitle?.en : collectionLink.title,
        subtitle: collectionLink.slug,
      };
    },
  },
});
