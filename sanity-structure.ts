import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const SanityStructure = (S: any, context: any) =>
  S.list()
    .title("Safe Haven Nursery")
    .items([
      S.divider(),
      orderableDocumentListDeskItem({
        type: "banner",
        title: "Banners",
        S,
        context,
      }),
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .child(S.documentTypeList("page").title("Pages")),

      S.divider(),
      orderableDocumentListDeskItem({
        type: "post",
        title: "Blog Posts",
        S,
        context,
      }),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      S.divider(),
      S.listItem()
        .title("Nurseries")
        .schemaType("nursery")
        .child(S.documentTypeList("nursery").title("Nurseries")),
      S.listItem()
        .title("Staff Members")
        .schemaType("staff")
        .child(S.documentTypeList("staff").title("Staff Members")),
      S.listItem()
        .title("Feedback")
        .schemaType("feedback")
        .child(S.documentTypeList("feedback").title("Feedback")),
      S.divider(),
      S.listItem()
        .title("Navigation")
        .schemaType("navigation")
        .child(S.documentTypeList("navigation").title("Navigation")),
      S.listItem()
        .title("Global Settings")
        .schemaType("global")
        .child(
          S.document()
            .schemaType("global")
            .documentId("global")
            .title("Global Settings"),
        ),
    ]);
