import React from 'react'
import styled from 'styled-components'

export default () => (
  <SVG width="15px" height="20px" viewBox="0 0 50 80">
    <polyline
      fill="none"
      stroke="#7f8698"
      stroke-width="30"
      stroke-linecap="round"
      stroke-linejoin="round"
      points="
	0.375,0.375 45.63,38.087 0.375,75.8 "
    />
  </SVG>
)

const SVG = styled.svg`
  stroke-width: 10;
  margin-left: 15px;
`
