import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'orderRank',
      title: 'Order',
      type: 'string',
      hidden: true,
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'localeString',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Use dark header theme?',
      name: 'darkHeaderTheme',
      type: 'boolean',
      description: 'Use a dark header theme?',
      initialValue: false,
      group: 'content',
    }),
    defineField({
      title: 'Content Blocks',
      name: 'contentBlocks',
      type: 'contentBlocks',
      group: 'content',
    }),
    // defineField({
    //   title: 'Content',
    //   name: 'content',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //       marks: {
    //         decorators: [
    //           {title: 'Strong', value: 'strong'},
    //           {title: 'Emphasis', value: 'em'},
    //         ],
    //         annotations: [],
    //       },
    //     },
    //   ],
    //   description: 'Content of the banner',
    //   validation: (Rule) => Rule.required(),
    // }),
    // defineField({
    //   title: 'Links',
    //   name: 'links',
    //   type: 'array',
    //   of: [{type: 'link'}],
    // }),
    // defineField({
    //   title: 'Background Colour',
    //   name: 'backgroundColour',
    //   type: 'simplerColor',
    //   description: 'Background colour of the banner',
    //   initialValue: '#000000',
    //   validation: (Rule) => Rule.required(),
    // }),
    defineField({
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: {title: any}) {
      return {
        title: title,
      }
    },
  },
})
