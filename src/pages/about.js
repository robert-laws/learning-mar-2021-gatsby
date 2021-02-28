import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"

const AboutPage = () => (
  <Layout>
    <h1>About this Site</h1>
    <p>This is a website.</p>
    <Image style={{ width: "200px" }} src="pumpkin.JPG" alt="Computer Image" />
  </Layout>
)

export default AboutPage
