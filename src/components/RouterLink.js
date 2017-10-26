import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

export default styled(Link)`
  color: ${props => props.theme.paletteFontSecondary};
  font-family: inherit;
  font-weight: inherit;
  text-decoration: none;
  transform: translateZ(0);
  transition: color 0.2s ease-in-out;
  position: relative;

  &:hover {
    :before {
      visibility: ${props => (props.noUnderline ? 'hidden' : 'visible')};
      transform: scaleX(1);
    }
  }

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${props => props.theme.palettePrimary};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  }
`
