import { Badge, Flex, Box, Text } from "@sanity/ui";
import { PreviewProps } from "sanity";

export const capitalizeFirstLetter = (str: string) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};

export const Preview = (props: PreviewProps) => {
  const { _type, title, text } = props;

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
            backgroundColor: "#333333",
            fontSize: "0.75rem",
            color: "white",
          }}
        >
          T
        </span>
        <Box
          flex={1}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Text size={1} weight="medium">
            {title}
          </Text>
          <Text size={1} muted>
            {text ? `${text.substring(0, 25)}...` : "No text"}
          </Text>
        </Box>
      </Box>
      <Badge style={{ marginRight: "0.5rem" }} tone="primary">
        {capitalizeFirstLetter(_type)} Block
      </Badge>
    </Flex>
  );
};
