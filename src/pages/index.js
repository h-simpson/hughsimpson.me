import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import {Page, Row, Column} from 'hedron'
import Helmet from 'react-helmet'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <section>
        <Helmet title={siteTitle} />
      </section>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
