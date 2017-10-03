import React from 'react'
import Helmet from 'react-helmet'
import BlogTile from '../components/BlogTile'

export default ({data}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <Helmet title={siteTitle} />
      {posts.map(post => {
        if (post.node.path !== '/404/') {
          const title = post.node.frontmatter.title || post.node.path
          return (
            <BlogTile
              frontmatter={post.node.frontmatter}
              excerpt={post.node.excerpt}
              key={title}
            />
          )
        }
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            category
          }
        }
      }
    }
  }
`
