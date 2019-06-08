import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout";

const indexPage = () => {
  return (
    <Layout>
      <h1>Hello world this is first blog!</h1>
      <h2>I am Samyek Sonawane. Living in beatiful Nasik!</h2>
      <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
    </Layout>
  )
}

export default indexPage