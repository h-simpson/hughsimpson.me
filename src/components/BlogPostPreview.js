import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Card from '../components/Card'

const BlogPostPreview = ({ title, date, image, excerpt, path }) => (
  <Container>
    <PostCard sm={11} md={8} lg={6} fluid>
      <PostLink to={path}>
        <PostTitle>{title}</PostTitle>
        <PostExcerpt>{excerpt}</PostExcerpt>
        <BlogAuthor>{date}</BlogAuthor>
      </PostLink>
    </PostCard>
  </Container>
)

export default BlogPostPreview

const Container = styled.section`
  display: flex;

  @media (min-width: 770px) {
    margin-bottom: 20px;
  }
  justify-content: center;
`

const PostCard = styled(Card)`
  width: 90vw;

  @media (min-width: 770px) {
    width: 60vw;
    max-width: 600px;
  }
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const PostTitle = styled.h1`
  font-family: ${props => props.theme.fontFamilyPrimary};
  color: ${props => props.theme.paletteFontPrimary};
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`

const PostExcerpt = styled.p`
  font-family: ${props => props.theme.fontFamilyPrimary};
  color: ${props => props.theme.paletteFontSecondary};
  font-size: 1rem;
  font-weight: 100;
  margin: 1.5rem 0 0 0;
  padding: 0;
  line-height: 1.5;
`

const BlogAuthor = styled.p`
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-weight: 100;
  color: ${props => props.theme.paletteFontSecondary};
  font-size: 1rem;
  margin: 0.5rem 0 0 0;

  :before {
    width: 30px;
    height: 6px;
    background-color: ${props => props.theme.paletteTertiary};
    display: block;
    content: '';
    position: absolute;
    margin-top: 2rem;
  }
`
