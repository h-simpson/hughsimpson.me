import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import theme from '../styles/theme.js'
import StyledParagraph from '../components/StyledParagraph'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta
            name="description"
            content="Marfa literally hot chicken, cred scenester beard salvia tousled shabby chic gastropub."
          />
        </Helmet>
        <Hero>
          <HeroContent>
            <SiteTitle>Hugh Simpson</SiteTitle>
            <StyledParagraph>
              Marfa literally hot chicken, cred scenester beard salvia tousled shabby chic gastropub copper mug air
              plant. Live-edge fam kale chips, sriracha prism kombucha lyft post-ironic listicle. Health goth jianbing
              meggings shoreditch. Cliche cray seitan, typewriter everyday carry organic cold-pressed austin church-key
              irony .
            </StyledParagraph>
          </HeroContent>
        </Hero>
      </div>
    )
  }
}

export default Index

const Hero = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 88vh;
  align-items: center;
  justify-content: center;
`

const HeroContent = styled.div`
  display: block;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1100px) {
    width: 80%;
  }
`

const SiteTitle = styled.h1`
  color: ${props => props.theme.headingFontColor};
  font-family: ${props => props.theme.headingFont};
  font-size: 4rem;
  margin: 0 0 50px 0;
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
