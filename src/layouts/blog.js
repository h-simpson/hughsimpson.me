import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Page } from 'hedron'
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
          <Menu />
          {children()}
          <PageFooter>Designed and developed by Hugh Simpson</PageFooter>
        </Page>
      </ThemeProvider>
    )
  }
}

export default Template

const PageFooter = styled.footer`
  color: ${props => props.theme.secondaryBodyFontColor};
  font-family: ${props => props.theme.headingFont};
  margin-top: 50px;
  text-align: center;
  width: 100vw;
`

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object
}
