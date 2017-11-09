import React from 'react'
import styled from 'styled-components'

export default () => (
  <SVG width="15px" height="20px" viewBox="0 0 50 80">
    <polyline fill="none" stroke="#7f8698" points="
	0.375,0.375 45.63,38.087 0.375,75.8 " />
  </SVG>
)

const SVG = styled.svg`
  stroke-width: 10;
  margin-left: 15px;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(15px);
    }
    60% {
      transform: translateX(7px);
    }
  }
`
