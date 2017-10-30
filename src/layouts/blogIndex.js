import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components'
import globalStyles from '../styles/globalStyle'
import theme from '../styles/theme.js'
import Navigation from '../components/Navigation.js'
import MobileNavigation from '../components/MobileNavigation.js'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Navigation />
          {children()}
          <MobileNavigation />
        </Page>
      </ThemeProvider>
    )
  }
}

export default Template

const Page = styled.div`
  min-height: 100vh;

  @media (min-width: 770px) {
    background-color: #f4f7f9;
  }
`

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object
}
