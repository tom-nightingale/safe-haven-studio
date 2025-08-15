import { defineField, defineType } from "sanity";
import { MarkerIcon } from "@sanity/icons";

export default defineType({
  name: "nursery",
  title: "Nurseries",
  type: "document",
  icon: MarkerIcon,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "nurseryDetails",
      title: "Nursery Details",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "orderRank",
      title: "Order",
      type: "string",
      hidden: true,
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
      group: "nurseryDetails",
    }),
    defineField({
      title: "Location",
      name: "location",
      type: "string",
      validation: Rule => Rule.required(),
      group: "nurseryDetails",
    }),
    defineField({
      title: "Address",
      name: "address",
      type: "string",
      validation: Rule => Rule.required(),
      group: "nurseryDetails",
    }),
    defineField({
      title: "Phone Number",
      name: "phoneNumber",
      type: "string",
      validation: Rule => Rule.required(),
      group: "nurseryDetails",
    }),
    defineField({
      title: "Email",
      name: "email",
      type: "string",
      validation: Rule => Rule.required(),
      group: "nurseryDetails",
    }),
    defineField({
      title: "Directions Link",
      name: "directionsLink",
      type: "url",
      validation: Rule => Rule.required(),
      group: "nurseryDetails",
    }),
    defineField({
      title: "Maps Link",
      name: "mapsLink",
      type: "url",
      validation: Rule => Rule.required(),
      group: "nurseryDetails",
    }),
    defineField({
      title: "Content Blocks",
      name: "contentBlocks",
      type: "contentBlocks",
      group: "content",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "seo",
      validation: Rule => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      location: "location",
    },
    prepare({ title, location }: { title: string; location: string }) {
      return {
        title: title,
        subtitle: location,
      };
    },
  },
});
