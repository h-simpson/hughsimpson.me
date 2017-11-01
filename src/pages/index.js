import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import theme from '../styles/theme.js'
import Container from '../components/Container'
import Card from '../components/Card'
import Hero from '../components/Hero'

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
          </ProjectCard>
        </Container>
      </div>
    )
  }
}

export default Index

const ProjectCard = styled(Card)`
  width: 90vw;
  height: 20vh;
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
  margin: 1.5rem 0 0 0;
  padding: 0;
  line-height: 1.5;
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
