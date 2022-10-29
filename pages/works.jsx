import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../component/section";
import { WorkGridItem } from "../component/grid-item";
import MovieProjectImage from "../public/movies-secondary.png";
import KanyeLyricsProject from "../public/kanye.png";
import memes from '../images/memes.png'
import crypto from '../images/crypto.png'
import Layout from "../component/layout/article";

function works() {
  return (
    <Layout title="Works">
      <Container>
        <Heading variant={"section-title"} as={"h3"} fontSize={20} mt={20}>
          Works
        </Heading>

        <SimpleGrid gap={6}>
          <Section>
            <WorkGridItem
              id="movieproject"
              title="Movie Project"
              thumbnail={MovieProjectImage}
            >
              A movie project that I made that consume a third-party API.
            </WorkGridItem>
            <WorkGridItem
              id="kanye"
              title="kanye lyrics app"
              thumbnail={KanyeLyricsProject}
            >
              watch kanye&apos;s song while reading the lyrics.
            </WorkGridItem>
            <WorkGridItem
              id="memes"
              title="Memes Generator"
              thumbnail={memes}
            >
              retrieve images from an API and display them with custom text by the user.
            </WorkGridItem>
            <WorkGridItem
              id="crypto"
              title="Crypto App"
              thumbnail={crypto}
            >
              build a crypto app that display the latest price of crypto currencies using a third-party API.
            </WorkGridItem>
            {/* add crypto app here */}

            {/* add SOCIAL media app here */}

            {/* add chat app here */}
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export default works;
