import Navbar from "../Navbar";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";


function Main({ children, router }) {

  const route = router.asPath

  return (
    <Box as="main" pb={8}>
      <Head> 
        <title> { route === '/' ? "Hassan Portfolio" : `${route.slice(1).charAt(0).toUpperCase()+route.slice(2)} Page` } </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar path={router.asPath} />

        <Container maxW="container.xl" pt={15}>
          {children}
        </Container>
    </Box>
  );
}

export default Main
