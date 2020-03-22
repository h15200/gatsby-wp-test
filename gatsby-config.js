/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby with md files and wp cms',
    description: "Practice connecting gatsby to a new cms",
    author: "Hideaki Aomori"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },

  ]
}
