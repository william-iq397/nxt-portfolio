import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import footPrint from "../images/footPrint.png";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 20px;

  &:hover Image {
    transform: router(20deg);
  }
`;

const Logo = () => {
  // const footPrintImg = "/./footPrint.png";

  return (
    <Link href="/">
      <a href="">
        <LogoBox color={useColorModeValue("gray.800", "whiteAlpha.900")}>
          <Image
            style={{ rotate: "-20deg" }}
            src={footPrint}
            width={20}
            height={20}
            alt="logo"
          />
          <Text
            ml={3}
            width={"9em"}
            fontWeight={"bold"}
          >
            Hassan Mohamed
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
