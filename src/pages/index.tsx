import * as React from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MotionHeading = styled(motion.h1)({
  color: "rebeccapurple",
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MotionHeading animate={{ x: 200, y: 200 }}>Hello, world.</MotionHeading>
  </Layout>
)

export default IndexPage
