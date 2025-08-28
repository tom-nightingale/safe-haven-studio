import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

import { ImagesIcon } from "@sanity/icons";

export default defineType({
  name: "gridGallery",
  title: "Grid Gallery",
  type: "object",
  icon: ImagesIcon,
  fields: [
    defineField({
      title: "Gallery Sections",
      name: "gallerySections",
      type: "array",
      of: [{ type: "gallerySection" }],
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    prepare() {
      return {
        title: "Grid Gallery",
      };
    },
  },
});
