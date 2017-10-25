import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Page, Row, Column } from 'hedron'

const BlogPostPreview = ({ title, date, author, image, excerpt, path }) => (
  <Container>
    <PostCard sm={11} md={8} lg={6} fluid>
      <PostLink to={path}>
        <PostTitle>{title}</PostTitle>
        <PostExcerpt>{excerpt}</PostExcerpt>
        <BlogAuthor>
          {author} on {date}
        </BlogAuthor>
      </PostLink>
    </PostCard>
  </Container>
)

export default BlogPostPreview

const Container = styled(Row)`
  @media (min-width: 770px) {
    margin-bottom: 20px;
  }
  justify-content: center;
`

const PostCard = styled(Column)`
  padding: 0.5rem 1.15rem;
  transition: padding 300ms ease;

  @media (min-width: 770px) {
    padding: 3.5rem 3.15rem;
    background-color: #fff;
    border-radius: 8px;
    border-top: 5px solid #a897ec;
    box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
      transform: translateY(-7px);
    }

    &:active {
      box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
      transform: translateY(-7px);
    }
  }
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const PostTitle = styled.h1`
  font-family: ${props => props.theme.headingFont};
  color: ${props => props.theme.BodyFontColor};
  font-size: 1.5rem;
  font-weight: bold;
  color: #34434b;
`

const PostExcerpt = styled.p`
  font-family: ${props => props.theme.headingFont};
  color: ${props => props.theme.secondaryBodyFontColor};
  font-size: 1rem;
  margin: 0;
  padding-bottom: 0.5rem;
  line-height: 1.5;
`

const BlogAuthor = styled.p`
  font-family: ${props => props.theme.headingFont};
  color: ${props => props.theme.secondaryBodyFontColor};
  font-size: 1rem;
`
