import { defineField, defineType } from "sanity";

export default defineType({
  name: "fee",
  title: "Fee & Pricing",
  type: "object",
  fields: [
    defineField({
      title: "Label",
      name: "label",
      type: "string",
      description: "Description of the fee (e.g. 'Full Day')",
    }),
    defineField({
      title: "Cost",
      name: "cost",
      type: "string",
      description: "Cost of the fee (e.g. '£74.50')",
      validation: rule => rule.required(),
    }),
  ],
  preview: {
    select: {
      label: "label",
      cost: "cost",
    },
    prepare({ label, cost }: { label: string; cost: string }) {
      return {
        title: label,
        subtitle: cost,
      };
    },
  },
});
