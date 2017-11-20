import React from 'react'
import Helmet from 'react-helmet'
import BlogPostPreview from '../components/BlogPostPreview'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  max-width: 690px;
`

export default ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <main>
      <Container>
        {<Helmet title={siteTitle} />}
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = post.node.frontmatter.title || post.node.path
            return <BlogPostPreview {...post.node.frontmatter} key={title} />
          }
        })}
      </Container>
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
