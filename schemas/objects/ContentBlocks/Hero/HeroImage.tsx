import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroImage",
  title: "HeroImage",
  type: "object",
  fields: [
    defineField({
      title: "Image",
      name: "image",
      type: "array",
      of: [
        {
          name: "imageBlock",
          title: "Image",
          type: "imageBlock",
        },
        // {
        //   name: "productWithVariant",
        //   title: "Product with variant",
        //   type: "productWithVariant",
        // },
        // {
        //   name: "imageWithProductHotspots",
        //   title: "Image With Product Hotspots",
        //   type: "imageWithProductHotspots",
        // },
      ],
      validation: rule => rule.required().max(1),
    }),
  ],
});
