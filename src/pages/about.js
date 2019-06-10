import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";



const aboutPage = () => {
  return (
    <Layout>
      <Head title="About"/>
      <h1>About</h1>
      <h2>This is the about page!</h2>
      <p>Get in contact <Link to="/contact">Here!</Link></p>
    </Layout> 
  )
}

export default aboutPage