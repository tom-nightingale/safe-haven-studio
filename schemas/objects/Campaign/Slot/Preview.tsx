import React, { useEffect, useState } from "react";
import { Badge, Flex, Box, Text } from "@sanity/ui";
import { PreviewProps } from "sanity";
import { useClient } from "sanity";

export const capitalizeFirstLetter = (str: string) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};

type CustomPreviewProps = PreviewProps & {
  slot: any;
  contentBlocks: any;
  publishOn: any;
};

export const Preview = (props: CustomPreviewProps) => {
  const { slot, contentBlocks, publishOn } = props;
  const client = useClient({ apiVersion: "2022-10-25" });
  const [collectionData, setCollectionData] = useState<any>(null);

  useEffect(() => {
    if (!publishOn) return;
    const publishOnIds = publishOn.map((collection: any) => collection._ref);

    // Fetch the product details
    const query = `*[_type == 'collection' && _id in $id]{store { title, id }}`;
    client.fetch(query, { id: publishOnIds }).then(setCollectionData);
  }, [publishOn]);

  return (
    <Flex align="center">
      <Box
        flex={1}
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          padding: "0.5rem",
        }}
      >
        <span
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            border: "solid",
            borderWidth: "0.5px",
            borderColor: "#333",
            width: "2rem",
            height: "2rem",
            backgroundColor: "#ffffff",
            fontSize: "0.75rem",
            color: "#333333",
            textAlign: "center",
          }}
        >
          Slot <br />
          {slot}
        </span>

        <Box
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <Text size={0.5} weight="medium">
            {contentBlocks &&
              contentBlocks.length > 0 &&
              capitalizeFirstLetter(contentBlocks[0].title)}
          </Text>
          <Text size={1}>
            {collectionData &&
              collectionData.map((data: any, index: any) => {
                return (
                  <Badge
                    tone="neutral"
                    style={{ marginRight: "0.5rem" }}
                    key={index}
                  >
                    {data.store.title}
                  </Badge>
                );
              })}
          </Text>
        </Box>
      </Box>
      <Badge style={{ marginRight: "0.5rem" }} tone="primary">
        {contentBlocks &&
          contentBlocks.length > 0 &&
          capitalizeFirstLetter(contentBlocks[0]._type)}
      </Badge>
    </Flex>
  );
};
