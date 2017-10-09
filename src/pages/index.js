import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Page, Row, Column } from 'hedron'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import theme from '../styles/theme.js'
import StyledLink from '../components/StyledLink'
import StyledParagraph from '../components/StyledParagraph'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const email = get(this, 'props.data.site.siteMetadata.email')
    return (
      <section>
        <Helmet title={siteTitle} />
        <Row justifyContent="center">
          <Column md={6} lg={4}>
            <StyledParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </StyledParagraph>
          </Column>
        </Row>
        <Row justifyContent="center">
          <Column md={4} lg={4}>
            <ContactItem>
              <StyledLink href="mailto:hugh@hughsimpson.me">Email</StyledLink>
            </ContactItem>
            <ContactItem>
              <StyledLink href="https://www.linkedin.com/in/h-simpson">LinkedIn</StyledLink>
            </ContactItem>
            <ContactItem>
              <StyledLink href="https://www.github.com/h-simpson">GitHub</StyledLink>
            </ContactItem>
          </Column>
        </Row>
      </section>
    )
  }
}

export default Index

const ContactItem = styled.h1`
  color: ${props => props.theme.linkFontColor};
  font-family: ${props => props.theme.headingFont};
  font-weight: 100;
  font-size: 1.8rem;
  text-align: center;

  @media (min-width: 900px) {
    font-size: 2.4rem;
  }
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
