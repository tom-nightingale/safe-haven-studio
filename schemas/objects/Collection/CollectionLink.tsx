import React, { useEffect, useState } from "react";
import { defineField, defineType } from "sanity";
import { useClient } from "sanity";

export const CollectionLink = (props: any) => {
  const [navData, setNavData] = useState<any>(null);
  const client = useClient({ apiVersion: "2022-10-25" });

  const query = `*[_type == "navigation"]{
  _id,
  _type,
  name,
  title,
  sections[]{
    title,
    target->{
      _type == "collection" => { _type, "title": store.title, "slug": store.slug.current },
      _type == "page" => { _type, "title": title, "slug": slug.current }
    },
    children[]{
      title,
      target->{
        _type == "collection" => { _type, "title": store.title, "slug": store.slug.current },
        _type == "page" => { _type, "title": title, "slug": slug.current }
      },
      children[]{
        title,
        target->{
          _type == "collection" => {  _type, "title": store.title, "slug": store.slug.current },
          _type == "page" => { _type, "title": title }
        }
      }
    }
  }
}`;

  //   client.fetch(query, {}).then(setNavData);

  console.log("navData", navData);
  //   console.log(props);
  return <div>Value: {props.value}</div>;
};

// export default defineType({
//   name: "collectionLink",
//   title: "Collection Link",
//   type: "object",
//   fields: [
//     defineField({
//       name: "link",
//       title: "Link",
//       type: "reference",
//       to: [{ type: "page" }, { type: "collection" }],
//     }),
//     defineField({
//       name: "customTitle",
//       title: "Custom Title",
//       type: "localeString",
//     }),
//   ],
// });
