import React from 'react'
import styled from 'styled-components'
import Close from 'react-icons/lib/md/close'

const Modal = props =>
  props.isOpen ? (
    <ModalContainer>
      <ModalContent>
        <CloseIcon onClick={() => props.handleClose()} />
        {props.children}
      </ModalContent>
    </ModalContainer>
  ) : (
    <div />
  )

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  padding: 50px;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  min-height: 200px;
  border-radius: 4px;
  background-color: ${props => props.theme.paletteTertiary};
  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
  padding: 2rem 2rem 5rem 2rem;
`

const CloseIcon = styled(Close)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  color: ${props => props.theme.paletteFontPrimary};
  padding-left: 80%;
  margin: 0 0 4rem 0;
`

export default Modal
