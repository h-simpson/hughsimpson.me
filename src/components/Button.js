import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: 1px solid ${props => props.theme.paletteFontPrimary};
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1;
  padding: 1.2em 2.8em;
  color: ${props => props.theme.paletteFontPrimary};
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover, :focus {
      box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
      transform: translateY(-4px);
      outline: 0;
    }

    &:active {
      box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
      transform: translateY(2px);
    }
  }
`

export default Button
