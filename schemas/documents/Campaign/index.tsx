import { defineField, defineType } from "sanity";
import { RocketIcon } from "@sanity/icons";

export default defineType({
  name: "campaign",
  title: "Campaign",
  type: "document",
  icon: RocketIcon,
  fields: [
    defineField({
      name: "orderRank",
      title: "Order",
      type: "string",
      hidden: true,
    }),
    defineField({
      title: "Campaign Type",
      name: "campaignType",
      type: "string",
      options: {
        list: [
          { title: "PLP", value: "plp" },
          { title: "PDP", value: "pdp" },
        ],
      },
    }),
    defineField({
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Publish on",
      name: "publishOn",
      type: "reference",
      weak: true,
      to: [{ type: "product" }],
      description: "Choose a PDP to publish campaign to",
      hidden: ({ parent }) => parent?.campaignType === "plp",
    }),
    defineField({
      title: "Content Blocks",
      name: "contentBlocks",
      type: "contentBlocks",
      hidden: ({ parent }) => parent?.campaignType === "plp",
    }),
    defineField({
      title: "Campaign Slots",
      name: "campaignSlots",
      type: "array",
      of: [{ type: "plpCampaignSlot" }],
      hidden: ({ parent }) => parent?.campaignType === "pdp",
    }),
  ],
  preview: {
    select: {
      name: "name",
      campaignType: "campaignType",
    },
    prepare({ name, campaignType }: any) {
      return {
        title: name,
        media: (
          <span
            style={{
              border: "solid",
              borderWidth: "0.5px",
              borderColor: "white",
              width: "2rem",
              height: "2rem",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "0.75rem",
            }}
          >
            {campaignType.toUpperCase()}
          </span>
        ),
      };
    },
  },
});
