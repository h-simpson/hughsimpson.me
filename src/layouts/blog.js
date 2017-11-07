import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components'
import globalStyles from '../styles/globalStyle'
import theme from '../styles/theme.js'
import Navigation from '../components/Navigation.js'
import MobileNavigation from '../components/MobileNavigation.js'

class Template extends Component {
  render() {
    const { location, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Navigation />
          {children()}
          <MobileNavigation />
        </div>
      </ThemeProvider>
    )
  }
}

export default Template

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object
}
