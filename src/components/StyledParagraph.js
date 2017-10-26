import React from 'react'
import styled from 'styled-components'

export default styled.p`
  font-family: ${props => props.theme.fontFamilyPrimary};
  color: ${props => props.theme.paletteFontSecondary};
  font-size: 1.2rem;
  font-weight: 100;
  line-height: 1.5;
  margin: 0;

  @media (max-width: 900px) {
    text-align: justify;
  }
`
