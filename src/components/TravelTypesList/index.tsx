import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { TravelType } from "./TravelType";

export const TravelTypesList: React.FC = () => {
  return (
    <SimpleGrid
      direction="row"
      flex="1"
      gap="4"
      mx="8rem"
      my="2rem"
      align="flex-start"
      minChildWidth="10rem"
    >
      <TravelType imgUrl="images/cocktail.svg" text="vida noturna" />
      <TravelType imgUrl="images/surf.svg" text="praia" />
      <TravelType imgUrl="images/building.svg" text="moderno" />
      <TravelType imgUrl="images/museum.svg" text="clássico" />
      <TravelType imgUrl="images/earth.svg" text="e mais..." />
    </SimpleGrid>
  );
};
