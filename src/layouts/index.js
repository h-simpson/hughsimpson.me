import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {Page, Row, Column} from 'hedron'
import styled, {ThemeProvider} from 'styled-components'
import theme from '../styles/theme.js'

class Template extends React.Component {
  render() {
    const {location, children} = this.props
    let header = (
      <Row alignItems="baseline;" justifyContent="space-between;">
        <Column md={6} lg={7}>
          <MenuLink to={'/'}>
            <SiteHeading>Hugh Simpson</SiteHeading>
          </MenuLink>
        </Column>
        <Column md={6} lg={5}>
          <MenuList>
            <ListItem>
              <MenuLink to="/">Home</MenuLink>
            </ListItem>
            <ListItem>
              <MenuLink to="/blog">Blog</MenuLink>
            </ListItem>
            <ListItem>
              <MenuLink to="/contact/">Contact</MenuLink>
            </ListItem>
          </MenuList>
        </Column>
      </Row>
    )

    return (
      <ThemeProvider theme={theme}>
        <Page debug={false} fluid={true}>
          {header}
          {children()}
        </Page>
      </ThemeProvider>
    )
  }
}

const SiteHeading = styled.h1`
  color: ${props => props.theme.headingFontColor};
  font-family: ${props => props.theme.headingFont};
  font-size: 2rem;
`

const MenuList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
`

const ListItem = styled.li`
  display: inline;
  font-family: ${props => props.theme.headingFont};
  padding: 0.7em;
`
const MenuLink = styled(Link)`
  color: ${props => props.theme.bodyFontColor};
  font-size: 1.3rem;
  text-decoration: none;
`

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object
}

export default Template
