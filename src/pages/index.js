import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Page, Row, Column } from 'hedron'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import theme from '../styles/theme.js'
import Contact from '../components/Contact'
import StyledParagraph from '../components/StyledParagraph'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const email = get(this, 'props.data.site.siteMetadata.email')
    return (
      <section>
        <Helmet title={siteTitle} />
        <Row justifyContent="center">
          <Column sm={10} md={10} lg={10}>
            <StyledParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </StyledParagraph>
          </Column>
        </Row>
        <Contact />
      </section>
    )
  }
}

export default Index

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
