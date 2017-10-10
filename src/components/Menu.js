import React from 'react'
import StyledLink from '../components/StyledLink'
import { Page, Row, Column } from 'hedron'
import styled, { ThemeProvider } from 'styled-components'

export default () => (
  <Row alignItems="baseline;" justifyContent="space-between;">
    <Column md={6} lg={7}>
      <SiteHeading to={'/'}>Hugh Simpson</SiteHeading>
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
          <MenuLink to="/#projects">Projects</MenuLink>
        </ListItem>
        <ListItem>
          <MenuLink to="/#contact">Contact</MenuLink>
        </ListItem>
      </MenuList>
    </Column>
  </Row>
)

const SiteHeading = styled(StyledLink)`
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
  padding: 1.5em;

  @media (max-width: 770px) {
    padding: 0.5rem;
  }
`
const MenuLink = styled(StyledLink)`font-size: 1.3rem;`
