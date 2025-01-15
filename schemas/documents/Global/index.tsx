import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export default defineType({
  name: "global",
  title: "Global Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    {
      name: "company",
      title: "Company Details",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      group: "company",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 4,
      group: "company",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      group: "company",
    }),
    defineField({
      name: "registrationNumber",
      title: "Registration Number",
      type: "string",
      group: "company",
    }),
    defineField({
      name: "vatNumber",
      title: "VAT Number",
      type: "string",
      group: "company",
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
    },
    prepare(selection) {
      return {
        title: "Global Settings",
      };
    },
  },
});
