import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import get from 'lodash/get'
import { Page, Row, Column } from 'hedron'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <article>
        <Row justifyContent="center">
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          <StyledColumn md={10} lg={8}>
            <BlogTitle>{post.frontmatter.title}</BlogTitle>
          </StyledColumn>
        </Row>
        <Row alignItems="baseline;" justifyContent="center">
          <StyledColumn xs={6} sm={6} md={5} lg={6}>
            <BlogDate>{post.frontmatter.date}</BlogDate>
          </StyledColumn>
          <StyledColumn xs={6} sm={6} md={5} lg={2}>
            <BlogCategory>{post.frontmatter.category}</BlogCategory>
          </StyledColumn>
        </Row>
        <Row justifyContent="center">
          <StyledColumn md={10} lg={8}>
            <BlogBody dangerouslySetInnerHTML={{ __html: post.html }} />
          </StyledColumn>
        </Row>
      </article>
    )
  }
}

export default BlogPostTemplate

const BlogTitle = styled.h1`
  font-family: ${props => props.theme.headingFont};
  font-size: 2rem;
  text-decoration: none;
`
const BlogCategory = styled.h4`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.5rem;
`
const BlogDate = styled.h3`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.3rem;
`

const BlogBody = styled.section`
  font-family: ${props => props.theme.bodyFont};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.headingFont};
  }
  font-size: 1.3rem;
`

const StyledColumn = styled(Column)`
  padding-top: 0;
`

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
        author
      }
    }
  }
`
