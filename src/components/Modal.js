import React from 'react'
import styled from 'styled-components'

const Modal = props =>
  props.isOpen && (
    <ModalContainer>
      <ModalContent>{props.children}</ModalContent>
    </ModalContainer>
  ) : (
    <div />
  )

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  padding: 50px;
`

const ModalContent = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 200px;
  border-radius: 4px;
  background-color: ${props => props.theme.paletteTertiary};
  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  padding: 3rem;
`

export default Modal
