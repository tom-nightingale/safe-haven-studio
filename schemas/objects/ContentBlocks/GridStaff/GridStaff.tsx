import { defineField, defineType } from "sanity";
import { BlockPreview } from "../BlockPreview";

import { UsersIcon } from "@sanity/icons";

export default defineType({
  name: "gridStaff",
  title: "Grid Staff",
  type: "object",
  icon: UsersIcon,
  fields: [
    defineField({
      title: "Staff Sections",
      name: "staffSections",
      type: "array",
      of: [{ type: "staffSection" }],
    }),
  ],
  components: { preview: BlockPreview },
  preview: {
    prepare() {
      return {
        title: "Grid Staff",
      };
    },
  },
});
