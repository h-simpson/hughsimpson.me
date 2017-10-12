import React from 'react'
import StyledLink from '../components/StyledLink'
import { Page, Row, Column } from 'hedron'
import styled, { ThemeProvider } from 'styled-components'

export default () => (
  <Row justifyContent="flex-end;">
    <MenuList>
      <ListItem>
        <MenuLink to="/">Home</MenuLink>
      </ListItem>
      <ListItem>
        <MenuLink to="/blog">Blog</MenuLink>
      </ListItem>
      <ListItem>
        <MenuLink to="/#contact">Contact</MenuLink>
      </ListItem>
    </MenuList>
  </Row>
)

const MenuList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 20px 20px 30px 0;
`

const ListItem = styled.li`
  display: inline;
  font-family: ${props => props.theme.headingFont};
  padding-right: 1.5rem;

  @media (max-width: 770px) {
    padding: 0.5rem;
  }
`
const MenuLink = styled(StyledLink)`
  font-size: 1.1rem;
  font: 300;
  color: ${props => props.theme.bodyFontColor};
  text-transform: uppercase;
`
