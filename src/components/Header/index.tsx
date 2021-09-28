import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export const Header: React.FC = () => {
  return (
    <Flex width="100%" alignItems="center" justifyContent="center" p="4">
      <Image src="/images/logo.svg" alt="WorldTrip" height="2rem" />
    </Flex>
  );
};
