import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./schemas";
import { SanityStructure } from "./sanity-structure";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import { shopifyAssets } from "sanity-plugin-shopify-assets";
import StudioLogo from "./utils/StudioLogo";
// import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

import "./styles/config.css";

export default defineConfig({
  icon: StudioLogo,
  name: "default",
  title: "Sanity Studio Boilerplate",
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
    imageHotspotArrayPlugin(),
    shopifyAssets({
      shopifyDomain: "*.myshopify.com",
    }),
    // vercelDeployTool()
  ],
  schema: {
    types: schemas,
  },
});
