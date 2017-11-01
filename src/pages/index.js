import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import theme from '../styles/theme.js'
import Container from '../components/Container'
import Card from '../components/Card'
import Hero from '../components/Hero'
import GenericLink from '../components/GenericLink'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta
            name="description"
            content="Digital project manager with an interest for design, programming and all things digital."
          />
        </Helmet>
        <Hero
          title="Hugh Simpson"
          paragraph="Digital project manager with an interest for design, programming and all things digital."
          link="Get in touch"
          to="mailto:hughesimpson@gmail.com"
        />
        <Container>
          <ProjectCard>
            <ProjectTitle>Example project</ProjectTitle>
            <ProjectExcerpt>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </ProjectExcerpt>
            <ProjectLink href="" noUnderline>
              Read more
            </ProjectLink>
            <ProjectLink href="" noUnderline>
              View code
            </ProjectLink>
          </ProjectCard>
        </Container>
      </div>
    )
  }
}

export default Index

const ProjectCard = styled(Card)`
  width: 90vw;
  min-height: 20vh;
  margin-top: 10vh;
  @media (min-width: 770px) {
    width: 60vw;
    max-width: 600px;
  }
`

const ProjectTitle = styled.h1`
  font-family: ${props => props.theme.fontFamilyPrimary};
  color: ${props => props.theme.paletteFontPrimary};
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`

const ProjectExcerpt = styled.p`
  font-family: ${props => props.theme.fontFamilyPrimary};
  color: ${props => props.theme.paletteFontSecondary};
  font-size: 1rem;
  font-weight: 100;
  margin: 1.5rem 0 1.5rem 0;
  padding: 0;
  line-height: 1.5;

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

const ProjectLink = styled(GenericLink)`
  margin: 0 2rem 0 0;
`

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        email
      }
    }
  }
`
