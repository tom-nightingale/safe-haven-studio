import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { InfoOutlineIcon } from "@sanity/icons";

export const SanityStructure = (S: any, context: any) =>
  S.list()
    .title("Sanity Studio Boilerplate")
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
      S.listItem()
        .title("Navigation")
        .schemaType("navigation")
        .child(S.documentTypeList("navigation").title("Navigation")),
      S.divider(),
      S.listItem()
        .title("Collections")
        .schemaType("collection")
        .child(S.documentTypeList("collection")),
      S.listItem()
        .title("Products")
        .schemaType("product")
        .child(
          S.documentTypeList("product")
            // .defaultLayout('detail')
            .child(async id =>
              S.list()
                .title("Product")
                .items([
                  // Details
                  S.listItem()
                    .title("Details")
                    .icon(InfoOutlineIcon)
                    .child(S.document().schemaType("product").documentId(id)),
                  // Product variants
                  S.listItem()
                    .title("Variants")
                    .schemaType("productVariant")
                    .child(
                      S.documentList()
                        .title("Variants")
                        .schemaType("productVariant")
                        .filter(
                          `
                      _type == "productVariant"
                      && store.productId == $productId
                    `,
                        )
                        .params({
                          productId: Number(id.replace("shopifyProduct-", "")),
                        }),
                    ),
                ]),
            ),
        ),
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
