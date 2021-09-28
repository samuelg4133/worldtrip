import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  imgUrl: string;
  text: string;
}

export const TravelType: React.FC<Props> = ({ imgUrl, text }) => {
  return (
    <Box p={["1", "2"]} align="center" justify="center">
      <Image src={imgUrl} alt={text} />
      <Text fontWeight="600">{text}</Text>
    </Box>
  );
};
