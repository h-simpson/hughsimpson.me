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
        <a href="https://www.linkedin.com/in/h-simpson/" target="_blank" rel="nofollow noopener">
          <LinkedIn />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://github.com/h-simpson" target="_blank" rel="nofollow noopener">
          <GitHubIcon />
        </a>
      </ListItem>
      <ListItem>
        <a href="mailto:hughesimpson@gmail.com" target="_blank" rel="nofollow noopener">
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
    </MenuList>
  </Menu>
)

const Menu = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 770px) {
    display: none;
  }
`

const MenuList = styled.ul`
  list-style: none;
  text-align: center;
  margin: 2rem 0 0 0;
  padding-right: 4rem;

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
  font-family: ${props => props.theme.fontFamilyPrimary};
  padding-right: 1.5rem;

  :first-child {
    padding-left: 4rem;
  }

  @media (max-width: 770px) {
    padding: 0.5rem;
  }
`
const MenuLink = styled(StyledLink)`
  font-size: 1.1rem;
  color: ${props => props.theme.paletteFontPrimary};
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`
