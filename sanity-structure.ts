import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const SanityStructure = (S: any, context: any) =>
  S.list()
    .title('Sanity Starter')
    .items([
      // S.listItem()
      //   .title('Global Settings')
      //   .child(S.document().schemaType('global').documentId('global').title('Global Settings')),
      // S.divider(),
      //   S.listItem()
      //     .title('Home')
      //     .child(S.document().schemaType('home').documentId('home').title('Home')),
      //   S.divider(),
      //   S.listItem()
      //     .title('About')
      //     .child(S.document().schemaType('about').documentId('about').title('About')),
      //   S.divider(),
      //   S.listItem()
      //     .title('Team')
      //     .child(S.document().schemaType('team').documentId('team').title('Team')),
      //   S.divider(),
      orderableDocumentListDeskItem({
        type: 'banner',
        title: 'Banners',
        S,
        context,
      }),
      S.divider(),
      S.listItem().title('Pages').child(S.documentTypeList('page').title('Pages')),
      //   S.listItem()
      //     .title('Contact')
      //     .child(S.document().schemaType('contact').documentId('contact').title('Contact')),
      //   S.divider(),
      //   S.listItem()
      //     .title('Testimonials')
      //     .child(S.documentTypeList('testimonial').title('Testimonials')),
      //   S.divider(),
    ])
