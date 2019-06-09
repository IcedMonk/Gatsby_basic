import React from "react"
import  { Link, graphql, useStaticQuery }from "gatsby";
import Layout from "../components/layout";




const blogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              Date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(data);
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
          {data.allMarkdownRemark.edges.map((edge) => (<li>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.Date}</p>
            </Link>
          </li>))}
      </ol>
    </Layout>
  )
}

export default blogPage