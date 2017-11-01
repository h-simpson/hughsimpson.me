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
          <BackgroundDiagonal />
          <ContrastDiagonal />
          <Navigation />
          {children()}
          <MobileNavigation />
        </div>
      </ThemeProvider>
    )
  }
}

export default Template

const BackgroundDiagonal = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80vh;
  transform: skewY(6deg);
  transform-origin: 0;
  background-color: ${props => props.theme.paletteSecondary};
  z-index: -999;

  @media (max-width: 770px) {
    height: 65vh;
  }
`
const ContrastDiagonal = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 85vh;
  transform: skewY(-20deg);
  transform-origin: 0;
  background-color: ${props => props.theme.paletteContrast};
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
