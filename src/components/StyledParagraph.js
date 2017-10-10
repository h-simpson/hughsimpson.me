import React from 'react'
import styled from 'styled-components'

export default styled.p`
  font-family: ${props => props.theme.bodyFont};
  font-size: 1.4rem;
  line-height: 40px;

  @media (max-width: 900px) {
    text-align: justify;
  }
`
