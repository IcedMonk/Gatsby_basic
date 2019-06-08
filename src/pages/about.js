import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout";



const aboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <h2>This is the about page!</h2>
      <p>Get in contact <Link to="/contact">Here!</Link></p>
    </Layout> 
  )
}

export default aboutPage