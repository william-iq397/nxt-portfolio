import styled from "@emotion/styled"
import NextLink from "next/link"
import Image from "next/image"
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { Global } from "@emotion/react"

export const GridItem = ({ children, href, title, thumbnail }) => (  
    <Box w="100%" align="center">
      <LinkBox cursor={"pointer"}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blue"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center" paddingBlock={5}>
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
        border-radius: 12px
    }`}
  />
)
