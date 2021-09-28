import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const Banner: React.FC = () => {
  return (
    <Box
      height="335px"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundImage="url('/images/banner.png')"
    >
      Olá
    </Box>
  );
};
