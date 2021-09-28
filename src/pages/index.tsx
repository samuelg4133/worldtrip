import { Box, Divider, Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypesList } from "../components/TravelTypesList";

export default function Home(): JSX.Element {
  return (
    <Flex flexDirection="column">
      <Head>
        <title>Home | WordlTrip</title>
      </Head>
      <Header />
      <Banner />
      <TravelTypesList />
      <Box
        width="5.625rem"
        justifyContent="center"
        alignItems="center"
        m="0 auto"
      >
        <Divider height="2px" bg="gray.900" />
      </Box>
    </Flex>
  );
}
