import { motion } from "framer-motion"
import Head from "next/head"
import { GridItemStyle } from "../grid-item"

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

const Layout = ({ children, title }) => (
  <motion.article
    initial={variants.hidden}
    animate={variants.enter}
    exit={variants.exit}
    variants={variants}
    transition={{ duration: 0.5, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Hassan Mohamed</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </>
  </motion.article>
)

export default Layout