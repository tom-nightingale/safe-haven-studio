import { defineField, defineType } from "sanity";
import { AddUserIcon } from "@sanity/icons";

export default defineType({
  name: "staff",
  title: "Staff Members",
  type: "document",
  icon: AddUserIcon,
  fields: [
    defineField({
      name: "orderRank",
      title: "Order",
      type: "string",
      hidden: true,
    }),
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: "Job title",
      name: "jobTitle",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: "Profile Image",
      name: "profileImage",
      type: "imageBlock",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Biography",
      name: "biography",
      type: "blockContent",
    }),
    defineField({
      title: "Nursery",
      name: "nursery",
      type: "string",
      options: {
        list: [
          { title: "Mansfield Woodhouse", value: "Mansfield Woodhouse" },
          { title: "South Normanton", value: "South Normanton" },
        ],
        layout: "dropdown",
      },
      initialValue: "Mansfield Woodhouse",
    }),
  ],
  preview: {
    select: {
      name: "name",
      jobTitle: "jobTitle",
      profileImage: "profileImage",
    },
    prepare({
      name,
      jobTitle,
      profileImage,
    }: {
      name: String;
      jobTitle: String;
      profileImage: any;
    }) {
      return {
        title: name,
        subtitle: jobTitle,
        media: profileImage?.image?.asset,
      };
    },
  },
});
