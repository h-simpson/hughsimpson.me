import React from 'react'
import Helmet from 'react-helmet'
import BlogPost from '../components/BlogPost'

export default ({data}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <section>
      <Helmet title={siteTitle} />
      {posts.map(post => {
        if (post.node.path !== '/404/') {
          const title = post.node.frontmatter.title || post.node.path
          return (
            <BlogPost
              frontmatter={post.node.frontmatter}
              excerpt={post.node.excerpt}
              key={title}
            />
          )
        }
      })}
    </section>
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
