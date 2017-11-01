import React from 'react'
import styled from 'styled-components'

const Card = styled.article`
  padding: 1.5rem 1.15rem;
  transition: padding 300ms ease;

  @media (min-width: 770px) {
    padding: 3rem 2.8rem;
    background-color: #fff;
    border-radius: 5px;

    box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
      transform: translateY(-7px);
    }

    &:active {
      box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
      transform: translateY(-7px);
    }
  }
`
export default Card
