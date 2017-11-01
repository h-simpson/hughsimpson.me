import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'

//TODO: Seperate into components

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
          <meta name="theme-color" content="#f4f7f9" />
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
  width: 90%;
  max-width: 800px;
  padding: 0;
  margin-top: 2rem;

  @media (min-width: 500px) {
    width: 80%;
  }
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
  width: 90%;
  max-width: 800px;
  padding: 0;
  margin-top: 1rem;

  @media (min-width: 500px) {
    width: 80%;
  }
`
const BlogBody = styled.section`
  color: ${props => props.theme.paletteFontPrimary};
  font-family: ${props => props.theme.fontFamilySecondary};
  width: 90%;
  max-width: 800px;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 80px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fontFamilyPrimary};
    color: ${props => props.theme.paletteFontPrimary};
    font-size: 1.4rem;
  }
  font-size: 1.3rem;

  a {
    color: ${props => props.theme.palettePrimary};
    font-family: inherit;
    font-weight: 600;
    text-decoration: none;
    transform: translateZ(0);
    position: relative;

    &:hover {
      :before {
        transform: scaleX(1);
      }
    }

    :before {
      content: '';
      position: absolute;
      width: 100%;
      height: 13px;
      bottom: 2px;
      left: 0;
      background-color: ${props => props.theme.palettePrimaryTransparent};
      transform: scaleX(0);
      transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }
  }

  :before {
    width: 30px;
    height: 6px;
    background-color: ${props => props.theme.paletteTertiary};
    display: block;
    content: '';
    position: absolute;
    margin-top: -1rem;
  }

  @media (min-width: 500px) {
    width: 80%;
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
