import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteURL = get(this.props, 'data.site.siteMetadata.url')

    return (
      <BlogArticle>
        <Helmet>
          <title>{`${post.frontmatter.title} | ${siteTitle}`}</title>
          <meta name="description" content={`${post.frontmatter.excerpt}`} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${siteURL}${post.frontmatter.path}`} />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content={`${post.frontmatter.excerpt}`} />
          <meta property="og:site_name" content={siteTitle} />
          <meta property="og:locale" content="en_UK" />
        </Helmet>
        <BlogTitle>{post.frontmatter.title}</BlogTitle>
        <BlogDate>{post.frontmatter.date}</BlogDate>
        {post.frontmatter.category && <BlogCategory>{post.frontmatter.category}</BlogCategory>}
        <BlogBody dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogArticle>
    )
  }
}

export default BlogPostTemplate

const BlogArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

const BlogTitle = styled.h1`
  color: ${props => props.theme.paletteFontPrimary};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 2rem;
  text-decoration: none;
  width: 70%;
  max-width: 800px;
  padding: 0;
  margin-top: 2rem;
`
const BlogCategory = styled.h4`
  color: ${props => props.theme.paletteFontPrimary};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 1.5rem;
  max-width: 800px;
`
const BlogDate = styled.h3`
  color: ${props => props.theme.paletteFontPrimary};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 1.3rem;
  width: 70%;
  max-width: 800px;
  padding: 0;
  margin-top: 1rem;
`
const BlogBody = styled.section`
  color: ${props => props.theme.paletteFontPrimary};
  font-family: ${props => props.theme.fontFamilySecondary};
  width: 70%;
  max-width: 800px;
  padding: 0;
  margin-top: 2rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fontFamilyPrimary};
  }
  font-size: 1.3rem;

  :before {
    width: 30px;
    height: 6px;
    background-color: ${props => props.theme.paletteTertiary};
    display: block;
    content: '';
    position: absolute;
    margin-top: -1rem;
  }
`

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
        url
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        excerpt
        path
      }
    }
  }
`
