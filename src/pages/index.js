import React from "react"
import { graphql, Link } from "gatsby"
import indexStyles from "../styles/index.module.scss"

const IndexPage = ({ data }) => {
  return (
    <>
      <h2>Dynamically created pages via md files:</h2>

      <ul className={indexStyles.ul}>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <li key={i}>
              <Link
                key={edge.node.frontmatter.path}
                to={`/${edge.node.frontmatter.path}`}
              >
                {edge.node.frontmatter.title}
              </Link>
            </li>
          )
        })}
      </ul>

      <h2>Dynamically created pages via CMS:</h2>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date
            path
            author
          }
          html
        }
      }
    }
  }
`
