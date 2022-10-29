import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta } from '../../component/work'
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
                    a website that consume a third-party API and display a list of movies
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://flex397.netlify.app">view the project</Link>
                    </ListItem>                 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React.js, TailwindCSS, SCSS</span>
                    </ListItem>            
                </List>
            </Container>
        </Layout>
    )
}

export default Work