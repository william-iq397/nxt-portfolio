import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      &nbsp; <ChevronRightIcon /> &nbsp;
    </span>
    <Heading display={"inline-block"} as="h2" fontSize={20} mb={20}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius={"lg"} src={src} alt={alt} mb={4} w={"full"} />
);


export const Meta = ({ children }) => (
    <Badge colorScheme={"green"} mr={2}>
        { children }
    </Badge>
)