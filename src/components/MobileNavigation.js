import React from 'react'
import StyledLink from '../components/StyledLink'
import styled, { ThemeProvider } from 'styled-components'
import GitHubIcon from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin'
import Email from 'react-icons/lib/md/email'

export default () => (
  <MenuRow>
    <MenuList>
      <ListItem>
        <a href="https://www.linkedin.com/in/h-simpson/" target="_blank" rel="nofollow noopener">
          <LinkedIn />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.linkedin.com/in/h-simpson/" target="_blank" rel="nofollow noopener">
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
  </MenuRow>
)

const MenuRow = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: #eed9ff;
  border-top: 4px solid #9063bb;

  @media (min-width: 770px) {
    border: none;
  }
`

const MenuList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  display: none;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: inherit;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
  }

  @media (max-width: 770px) {
    padding: 0.5rem;
    display: block;
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
