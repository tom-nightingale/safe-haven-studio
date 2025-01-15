import { Badge, Flex, Box } from "@sanity/ui";
import { PreviewProps } from "sanity";

export const capitalizeFirstLetter = (str: string) => {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
};

export const BlockPreview = (props: PreviewProps) => {
  const { _type } = props;
  return (
    <Flex align="center">
      <Box flex={1}>{props.renderDefault(props)}</Box>
      <Badge style={{ marginRight: "0.5rem" }} tone="primary">
        {capitalizeFirstLetter(_type)} Block
      </Badge>
    </Flex>
  );
};
