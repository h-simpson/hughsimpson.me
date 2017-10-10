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
          <Column sm={10} md={10} lg={8}>
            <StyledParagraph>
              Marfa literally hot chicken, cred scenester beard salvia tousled shabby chic gastropub copper mug air
              plant. Live-edge fam kale chips, sriracha prism kombucha lyft post-ironic listicle. Health goth jianbing
              meggings shoreditch. Cliche cray seitan, typewriter everyday carry organic cold-pressed austin church-key
              irony .
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
