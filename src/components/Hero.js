import React from 'react'
import styled from 'styled-components'
import GenericLink from '../components/GenericLink'
import RightArrow from '../components/RightArrow'
import StyledParagraph from '../components/StyledParagraph'

const Hero = props => (
  <HeroContainer>
    <HeroContent>
      <HeroTitle>{props.title}</HeroTitle>
      <HeroParagraph>{props.paragraph}</HeroParagraph>
      {props.link && (
        <HeroLinkContainer>
          <GenericLink href={props.to} noUnderline>
            {props.link}
          </GenericLink>
          <RightArrow />
        </HeroLinkContainer>
      )}
    </HeroContent>
  </HeroContainer>
)

export default Hero

const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 50vh;
  align-items: center;
  justify-content: center;
  margin: 10vh 0 10vh 0;

  @media (min-width: 500px) {
    margin: 10vh 0 0 0;
  }
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
  max-width: 600px;
  padding-bottom: 2rem;
  margin: 0;
`

const HeroLinkContainer = styled.div`
  display: flex;
  align-items: center;
`
