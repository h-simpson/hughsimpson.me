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
            content="Marfa literally hot chicken, cred scenester beard salvia tousled shabby chic gastropub."
          />
        </Helmet>
        <Hero
          title="Hugh Simpson"
          paragraph="Digital project manager with an interest for design, programming and all things digital."
          link="Get in touch"
          to="mailto:hughesimpson@gmail.com"
        />
      </div>
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
