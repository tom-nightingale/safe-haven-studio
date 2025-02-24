import { useClient } from "sanity";

// const client = useClient({ apiVersion: "2022-10-25" });

async function addRedirects(rows) {
  for (let i = 0; i < rows.length; i++) {
    const item = rows[i];

    const redirectObj = {
      _type: "redirect",
      source: {
        _type: "slug",
        current: item.source,
      },
      destination: {
        _tyoe: "slug",
        current: item.destination,
      },
      permanent: true,
      //   active: true,
    };

    console.log(redirectObj);
    // await client.create(redirectObj);
  }
}
