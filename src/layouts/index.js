import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Page, Row, Column } from 'hedron'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../styles/theme.js'
import Menu from '../components/Menu.js'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Page fluid={true}>
          <HeaderBackground />
          <Menu />
          {children()}
        </Page>
      </ThemeProvider>
    )
  }
}

const HeaderBackground = styled.div`
  background-color: #f3f3f3;
  height: 30vh;
  margin: 0;
  position: absolute;
  width: 100vw;
  z-index: -1;

  @media (max-width: 770px) {
    height: 35vh;
  }
`

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object
}

export default Template
