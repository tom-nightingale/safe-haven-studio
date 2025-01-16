import React, { useEffect, useState } from "react";
import { useClient } from "sanity";
import { Badge, Flex, Box, Text } from "@sanity/ui";
import { PreviewProps } from "sanity";

export const capitalizeFirstLetter = (str: string) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};

type CustomPreviewProps = PreviewProps & {
  productRef: { _ref: string };
  cardType: string;
};

export const Preview = (props: CustomPreviewProps) => {
  const [productData, setProductData] = useState<any>(null);
  const client = useClient({ apiVersion: "2022-10-25" });

  const { productRef, cardType } = props;

  useEffect(() => {
    if (!productRef?._ref) return;

    // Fetch the product details
    const query = `*[_type == "product" && _id == $id][0]{store { title, "imageUrl": previewImageUrl }}`;
    client.fetch(query, { id: productRef._ref }).then(setProductData);
  }, [productRef]);

  if (cardType === "product" && !productData) {
    return <div>Loading...</div>;
  }

  return (
    <Flex align="center">
      <Box
        flex={1}
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        {cardType === "product" && (
          <Flex
            style={{ padding: "0.5rem", gap: "0.5rem", alignItems: "center" }}
          >
            <img
              src={productData.store.imageUrl}
              alt={productData.store.title}
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "cover",
              }}
            />
            <Text size={1} weight="medium">
              {capitalizeFirstLetter(productData.store.title)}
            </Text>
          </Flex>
        )}

        {cardType === "editorial" && (
          <Box flex={1}>{props.renderDefault(props)}</Box>
        )}
      </Box>
      <Badge style={{ marginRight: "0.5rem" }} tone="primary">
        {capitalizeFirstLetter(cardType)}
      </Badge>
    </Flex>
  );
};
