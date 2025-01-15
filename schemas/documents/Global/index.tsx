import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export default defineType({
  name: "global",
  title: "Global Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "registrationNumber",
      title: "Registration Number",
      type: "string",
    }),
    defineField({
      name: "vatNumber",
      title: "VAT Number",
      type: "string",
    }),
    defineField({
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return {
        title: "Global Settings",
      };
    },
  },
});
