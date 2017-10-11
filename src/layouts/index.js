import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Page, Row, Column } from 'hedron'
import styled, { ThemeProvider } from 'styled-components'
import globalStyles from '../styles/globalStyle'
import theme from '../styles/theme.js'
import Menu from '../components/Menu.js'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Page fluid={true}>
          <WhiteBackground />
          {/* <PurpleBackground /> */}
          <Menu />
          {children()}
          <PageFooter>Designed and developed by Hugh Simpson © 2017</PageFooter>
        </Page>
      </ThemeProvider>
    )
  }
}

const PageFooter = styled.footer`
  color: ${props => props.theme.headingFontColor};
  font-family: ${props => props.theme.headingFont};
  margin-top: 50px;
  text-align: center;
  width: 100vw;
`

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
  background-color: #f5eefe;
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

export default Template
