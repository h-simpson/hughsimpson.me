import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  border-radius: 4px;
  min-width: 200px;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1;
  padding: 1.2em 2.3em;
  margin: 1rem 0;
  background-color: white;
  color: ${props => props.theme.paletteFontSecondary};
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

    @media (min-width: 770px) {
      font-size: 1rem;
    }

  }
`

export default Button
