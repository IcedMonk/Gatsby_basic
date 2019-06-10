import React from 'react'
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";



const notFound = () => {
  return (
    <Layout>
      <Head title="404 Error"/>
      <h1>Page Not Found!</h1>
      <p>Go to <Link to="/">Home</Link></p>
    </Layout>
  )
}

export default notFound 