import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./schemas";
import { SanityStructure } from "./sanity-structure";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import "./styles/config.css";

export default defineConfig({
  // icon: StudioLogo,
  name: "default",
  title: "Safe Haven Nursery",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [
    structureTool({
      structure: SanityStructure,
    }),
    visionTool(),
    simplerColorInput({
      // Note: These are all optional
      defaultColorFormat: "rgba",
      defaultColorList: [
        { label: "Light", value: "#ffffff" },
        { label: "Dark", value: "#333333" },
        { label: "Brand", value: "#ca786d" },
        { label: "Accent", value: "#626754" },
        { label: "Custom...", value: "custom" },
      ],
      enableSearch: true,
    }),
    // vercelDeployTool()
  ],
  schema: {
    types: schemas,
  },
});
