import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import {Page, Row, Column} from 'hedron'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import theme from '../styles/theme.js'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const email = get(this, 'props.data.site.siteMetadata.email')
    return (
      <section>
        <Helmet title={siteTitle} />
        <Row>
          <Column>
            <ContactItem>
              <ContactLink href="mailto:hugh@hughsimpson.me">
                {email}
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactLink href="https://www.linkedin.com/in/h-simpson">
                LinkedIn
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactLink href="https://www.github.com/h-simpson">
                GitHub
              </ContactLink>
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
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 3rem;
  }
`

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
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
