import React from 'react'
import styled from 'styled-components'
import {Page, Row, Column} from 'hedron'
import Link from 'gatsby-link'

const BlogTile = ({frontmatter, excerpt}) => (
  <BlogPost>
    <BlogCard lg={8}>
      <Row key={frontmatter.path}>
        <Column>
          <BlogTitle to={frontmatter.path}>{frontmatter.title}</BlogTitle>
        </Column>
      </Row>
      <Row alignItems="baseline;">
        <StyledColumn xs={6} sm={6} md={6}>
          <BlogDate>{frontmatter.date}</BlogDate>
        </StyledColumn>
        <StyledColumn xs={6} sm={6} md={6}>
          <BlogCategory>{frontmatter.category}</BlogCategory>
        </StyledColumn>
      </Row>
      <Row>
        <StyledColumn sm={11} md={10}>
          <BlogExcerpt dangerouslySetInnerHTML={{__html: excerpt}} />
        </StyledColumn>
      </Row>
    </BlogCard>
  </BlogPost>
)

export default BlogTile

const BlogPost = styled(Row)`
  margin-bottom: 20px;
  justify-content: center;
`
const BlogCard = styled(Column)`
  background-color: #f3f3f3;
  border-radius: 5px;
`

const BlogTitle = styled(Link)`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.4rem;
  text-decoration: none;
`
const BlogCategory = styled.h3`
  color: ${props => props.theme.linkFontColor};
  font-family: ${props => props.theme.headingFont};
  font-size: 1.2rem;
`
const BlogDate = styled.h4`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.2rem;
`
const BlogExcerpt = styled.p`
  font-family: ${props => props.theme.bodyFont};
  font-size: 1.2rem;
`
const StyledColumn = styled(Column)`padding-top: 0;`
