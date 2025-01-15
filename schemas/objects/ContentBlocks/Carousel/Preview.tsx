import React, { useEffect, useState } from "react";
import { useClient } from "sanity";
import { Badge, Flex, Box, Text } from "@sanity/ui";
import { PreviewProps } from "sanity";

export const capitalizeFirstLetter = (str: string) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};

export const Preview = (props: PreviewProps) => {
  const [productData, setProductData] = useState(null);
  const client = useClient({ apiVersion: "2022-10-25" });

  const { title, subtitle, carouselCards } = props;

  useEffect(() => {
    if (!carouselCards[0].product?._ref) return;

    // Fetch the product details
    const query = `*[_type == "product" && _id == $id][0]{store { title, "imageUrl": previewImageUrl }}`;
    client
      .fetch(query, { id: carouselCards[0].product?._ref })
      .then(setProductData);
  }, [carouselCards]);

  if (carouselCards[0]?.cardType === "product" && !productData) {
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
        {carouselCards[0]?.cardType === "product" && (
          <Flex
            style={{ padding: "0.5rem", gap: "0.5rem", alignItems: "center" }}
          >
            <img
              src={productData.store.imageUrl}
              alt={title}
              style={{
                width: "2rem",
                height: "2rem",
                objectFit: "cover",
              }}
            />
            <Box
              flex={1}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Text size={1} weight="medium">
                {capitalizeFirstLetter(title)}
              </Text>
              <Text size={1} muted>
                {subtitle}
              </Text>
            </Box>
          </Flex>
        )}
        {carouselCards[0]?.cardType === "editorial" && (
          <Box flex={1}>{props.renderDefault(props)}</Box>
        )}
      </Box>
      <Badge style={{ marginRight: "0.5rem" }} tone="primary">
        {capitalizeFirstLetter("Carousel Block")}
      </Badge>
    </Flex>
  );
};
