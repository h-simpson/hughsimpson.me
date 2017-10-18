import React from 'react'
import styled from 'styled-components'

export default styled.p`
  font-family: ${props => props.theme.bodyFont};
  font-size: 1.2rem;
  margin: 0;

  @media (max-width: 900px) {
    text-align: justify;
  }
`
