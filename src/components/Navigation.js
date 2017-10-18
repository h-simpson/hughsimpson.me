import React from 'react'
import StyledLink from '../components/StyledLink'
import styled, { ThemeProvider } from 'styled-components'
import GitHubIcon from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin'
import Email from 'react-icons/lib/md/email'

export default () => (
  <Menu>
    <MenuList>
      <ListItem>
        <a href="/" target="_blank" rel="nofollow">
          <LinkedIn />
        </a>
      </ListItem>
      <ListItem>
        <a href="/" target="_blank" rel="nofollow">
          <GitHubIcon />
        </a>
      </ListItem>
      <ListItem>
        <a href="mailto:hughesimpson@gmail.com" target="_blank" rel="nofollow">
          <Email />
        </a>
      </ListItem>
    </MenuList>
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
  </Menu>
)

const Menu = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 770px) {
    display: none;
  }
`

const MenuList = styled.ul`
  list-style: none;
  text-align: center;
  margin: 2rem 0 0 0;
  padding: 0;

  a {
    text-decoration: none;
    color: inherit;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
  }
`

const ListItem = styled.li`
  display: inline;
  font-family: ${props => props.theme.headingFont};
  padding-right: 1.5rem;

  :first-child {
    padding-left: 1rem;
  }

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
