import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";
import { DownloadIcon } from "@sanity/icons";

export default defineType({
  name: "downloads",
  title: "Downloads",
  type: "object",
  icon: DownloadIcon,
  fields: [
    defineField({
      title: "Downloads",
      name: "downloads",
      type: "array",
      of: [{ type: "fileBlock" }],
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    prepare() {
      return {
        title: "Downloads",
      };
    },
  },
});
