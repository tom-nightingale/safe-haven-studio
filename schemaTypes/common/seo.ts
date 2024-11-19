import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'Seo / Share settings',
  type: 'object',
  fields: [
    defineField({
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'Title used for search engines and browsers.',
      validation: (Rule) =>
        Rule.max(50).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      title: 'Meta Description',
      name: 'metaDesc',
      type: 'text',
      rows: 3,
      description: 'Description for search engines.',
      validation: (Rule) =>
        Rule.max(150).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      title: 'Keywords',
      name: 'keywords',
      description: 'Meta Keywords',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      title: 'Share Graphic',
      name: 'shareGraphic',
      type: 'image',
      description: 'Share graphics will be cropped to 1200x630',
    }),
  ],
})
