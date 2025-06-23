import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
// import { InfoOutlineIcon } from "@sanity/icons";

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

      orderableDocumentListDeskItem({
        type: "post",
        title: "Blog Posts",
        S,
        context,
      }),
      S.listItem()
        .title("Staff Members")
        .schemaType("staff")
        .child(S.documentTypeList("staff").title("Staff Members")),
      S.divider(),
      S.listItem()
        .title("Navigation")
        .schemaType("navigation")
        .child(S.documentTypeList("navigation").title("Navigation")),
      S.divider(),
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
