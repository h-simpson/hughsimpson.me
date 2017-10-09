import React from 'react'
import styled from 'styled-components'
import {Column} from 'hedron'

export default styled(Column)`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 30px -7px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0px 15px 50px -12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: 0px 5px 30px -7px rgba(0, 0, 0, 0.3);
  }

  transition: box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`
