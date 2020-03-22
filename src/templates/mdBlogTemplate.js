// This is a page that will be created for every md file in src/posts
// you can also choose to use useStaticQuery and put everything inside the function

import React from 'react'
import { graphql } from 'gatsby'
import mdStyles from '../styles/mdTemplate.module.scss'

const MdBlogTemplate = ({ data }) => {
  return (
    <div className={mdStyles.blogContainer}>
      <h1 className={mdStyles.headerPrimary}>{data.markdownRemark.frontmatter.title}</h1>
      <h2 className={mdStyles.headerSecondary}>{data.markdownRemark.frontmatter.date}</h2>
      <div className={mdStyles.blogContent} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </div>
  )
}


export default MdBlogTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
