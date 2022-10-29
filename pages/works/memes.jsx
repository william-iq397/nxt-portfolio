import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, Meta } from '../../component/work'
import Layout from "../../component/layout/article"
import P from "../../component/paraghraph"

const Work = () => {
    return(
        <Layout title="movie project">
            <Container mt={20}>
                <Title>
                    Movie Project <Badge>2021</Badge>
                </Title>
                <P>
                    retrieve images from an API and display them with custom text by the user.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://meme-generator397.netlify.app/">view the project</Link>
                    </ListItem>                 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React.js, CSS, TailwindCSS</span>
                    </ListItem>            
                </List>
            </Container>
        </Layout>
    )
}

export default Work