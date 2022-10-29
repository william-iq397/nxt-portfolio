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
                    Crypto App <Badge>2021</Badge>
                </Title>
                <P>
                build a crypto app that display the latest price of crypto currencies using a third-party API.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://crypto-app397.netlify.app">view the project</Link>
                    </ListItem>                 
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React.js, CSS,TailwindCSS</span>
                    </ListItem>            
                </List>
            </Container>
        </Layout>
    )
}

export default Work