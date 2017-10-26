import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import theme from '../styles/theme.js'
import StyledParagraph from '../components/StyledParagraph'
import GenericLink from '../components/GenericLink'
import RightArrow from '../components/RightArrow'

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
            <HeroTitle>Hugh Simpson</HeroTitle>
            <HeroParagraph>
              Marfa literally hot chicken, cred scenester beard salvia tousled shabby chic gastropub copper mug air
              plant. Live-edge fam kale chips, sriracha prism kombucha lyft post-ironic listicle.
            </HeroParagraph>
            <HeroLinkContainer>
              <GenericLink href="mailto:hughesimpson@gmail.com" noUnderline>
                Get in touch
              </GenericLink>
              <RightArrow />
            </HeroLinkContainer>
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
  height: 75vh;
  align-items: center;
  justify-content: center;
`

const HeroContent = styled.div`
  display: block;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-weight: 100;
  color: ${props => props.theme.paletteFontPrimary};

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 1100px) {
    width: 80%;
    max-width: 700px;
  }
`

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin: 0 0 50px 0;
`

const HeroParagraph = styled(StyledParagraph)`
  padding-bottom: 2rem;
  margin: 0;
`

const HeroLinkContainer = styled.div`
  display: flex;
  align-items: center;
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
