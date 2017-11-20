import React from 'react'
import Helmet from 'react-helmet'
import BlogPostPreview from '../components/BlogPostPreview'
import styled from 'styled-components'

export default ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <main>
      {<Helmet title={siteTitle} />}
      {posts.map(post => {
        if (post.node.path !== '/404/') {
          const title = post.node.frontmatter.title || post.node.path
          return <BlogPostPreview {...post.node.frontmatter} key={title} />
        }
      })}
    </main>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "MMMM Do, YYYY")
            title
            excerpt
          }
        }
      }
    }
  }
`
