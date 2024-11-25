import { Badge, Flex, Box, Text } from "@sanity/ui";
import { PreviewProps } from "sanity";

export const capitalizeFirstLetter = (str: string) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};

export const Preview = (props: PreviewProps) => {
  const { _type, title } = props;

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
            marginLeft: "0.5rem",
            backgroundColor: "#ffffff",
            fontSize: "0.75rem",
            color: "#333333",
          }}
        >
          S
        </span>
        <Text size={1} weight="medium">
          Spacer | {capitalizeFirstLetter(title)}
        </Text>
      </Box>
      <Badge tone="primary">{capitalizeFirstLetter(_type)} Block</Badge>
    </Flex>
  );
};
