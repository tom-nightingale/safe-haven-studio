import React from "react";
import { Importer, ImporterField } from "react-csv-importer";
import { useClient } from "sanity";
import "react-csv-importer/dist/index.css";

export default function CsvUpload(props: any) {
  const { onComplete, id, published } = props;
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const client = useClient({ apiVersion: "2022-10-25" });

  React.useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDialogOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return {
    label: `Import CSV file`,
    onHandle: () => {
      setDialogOpen(true);
    },
    dialog: dialogOpen && {
      type: "modal",
      header: "Import CSV File",
      content: (
        <Importer
          assumeNoHeaders={false}
          restartable={false}
          processChunk={async (rows, { startIndex }) => {
            for (let i = 0; i < rows.length; i++) {
              const item = rows[i];

              const redirectObj = {
                _type: "redirect",
                source: {
                  _type: "slug",
                  current: item.source,
                },
                destination: {
                  _type: "slug",
                  current: item.destination,
                },
                status: item.status,
                match: item.match,
              };
              await client
                .patch(`${published ? `${id}` : `drafts.${id}`}`)
                .setIfMissing({ redirects: [] })
                .insert("after", "redirects[-1]", [redirectObj])
                .commit({
                  autoGenerateArrayKeys: true,
                });
            }
          }}
          onClose={async ({ file, preview, fields, columnFields }) => {
            onComplete();
          }}
        >
          <ImporterField name="source" label="Source" />
          <ImporterField name="status" label="Status" />
          <ImporterField name="destination" label="Destination" />
          <ImporterField name="match" label="Match" />
        </Importer>
      ),
    },
  };
}
