import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Page, Row, Column } from 'hedron'

const BlogPostPreview = ({ title, date, category, image, excerpt, path }) => (
  <Container>
    <PostCard sm={12} md={7} lg={7} fluid>
      <PostLink to={path}>
        <PostTitle>{title}</PostTitle>
        <PostExcerpt>{excerpt}</PostExcerpt>
        <PostDate>{date}</PostDate>
      </PostLink>
    </PostCard>
  </Container>
)

export default BlogPostPreview

const Container = styled(Row)`
  margin-bottom: 20px;
  justify-content: center;
`

const PostCard = styled(Column)`
  padding: 2.1rem 3.15rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
    transform: translateY(-4px);
  }
  &:active {
    box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
    transform: translateY(-4px);
  }
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const PostTitle = styled.h1`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.5rem;
  padding: 0 1rem;
`

const PostExcerpt = styled.p`
  font-family: ${props => props.theme.bodyFont};
  font-size: 1.2rem;
  padding: 0 1rem;
  margin: 0;
`

const PostCategory = styled.h3`
  color: ${props => props.theme.linkColor};
  font-family: ${props => props.theme.headingFont};
  font-size: 1.2rem;
`

const PostDate = styled.h4`
  font-family: ${props => props.theme.headingFont};
  font-size: 1.2rem;
  padding-left: 1rem;
`
