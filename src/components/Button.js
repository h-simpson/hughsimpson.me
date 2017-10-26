import React from 'react'
import styled from 'styled-components'

export default styled.button`
  margin: 10px 20px 0 0;
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  border: none;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  text-decoration: none;
  transition: all 0.15s ease;
  color: #fff;
  background: ${props => props.theme.wisteria};
  font-family: ${props => props.theme.fontFamilyPrimary};
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: ${props => props.theme.blueChalk};
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`
