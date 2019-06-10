import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const indexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello world this is first blog!</h1>
      <h2>I am Samyek Sonawane. Living in beatiful Nasik!</h2>
      <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
    </Layout>
  )
}

export default indexPage