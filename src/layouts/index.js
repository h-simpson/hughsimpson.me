import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled, { ThemeProvider } from 'styled-components'
import globalStyles from '../styles/globalStyle'
import theme from '../styles/theme.js'
import Navigation from '../components/Navigation.js'
import MobileNavigation from '../components/MobileNavigation.js'

// Require styles for code block syntax highlighting (with Prism)
require('../styles/prism.css')

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <div>
          <WhiteBackground />
          <PurpleBackground />
          <Navigation />
          {children()}
          <MobileNavigation />
        </div>
      </ThemeProvider>
    )
  }
}

export default Template

const WhiteBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 95vh;
  transform: skewY(-12deg);
  transform-origin: 0;
  background-color: #fff;
  z-index: -999;

  @media (max-width: 770px) {
    height: 65vh;
  }
`

const PurpleBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 55vh;
  transform: skewY(-35deg);
  transform-origin: 0;
  background-color: ${props => props.theme.paletteSecondary};
  z-index: -999;

  @media (max-width: 770px) {
    height: 65vh;
  }
`

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object
}
