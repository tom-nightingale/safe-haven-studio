import {defineConfig} from 'sanity'
// import {deskTool} from 'sanity/desk'
// import {structureTool from sanity/structure
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio Boilerplate',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [
    structureTool(),
    visionTool(),
    // vercelDeployTool()
  ],
  schema: {
    types: schemaTypes,
  },
})
