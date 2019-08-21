import React from "react"
import { node, func, bool, oneOf } from "prop-types"
import styled from "styled-components"
import { Modal as ReactOverlaysModal } from "react-overlays"

const Backdrop = styled.div`
  background-color: ${props => props.theme.colorBlack};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1040;
  opacity: 0.5;
`

Backdrop.displayName = "Backdrop"

const StyledModal = styled(ReactOverlaysModal)`
  position: fixed;
  z-index: 1040;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

const ModalDocument = styled.div.attrs(({ size }) => ({
  size: size || "s",
}))`
  position: relative;
  width: auto;
  pointer-events: none;
  margin: ${props => props.theme.spaceS};

  @media screen and (min-width: ${props => props.theme.breakpointSm}) {
    max-width: ${props => props.size === "s" && "500px"};
    max-width: ${props => props.size === "m" && "800px"};
    max-width: ${props => props.size === "l" && "1000px"};

    margin: 1.75rem auto;
  }
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
`

export const Modal = ({ children, renderBackdrop, size, ...rest }) => {
  return (
    <StyledModal renderBackdrop={renderBackdrop} {...rest}>
      <ModalDocument size={size}>
        <ModalContent>{children}</ModalContent>
      </ModalDocument>
    </StyledModal>
  )
}

Modal.propTypes = {
  children: node,
  renderBackdrop: func,
  show: bool.isRequired,
  onHide: func,
  size: oneOf(["s", "m", "l"]),
}

Modal.defaultProps = {
  renderBackdrop: props => <Backdrop {...props} />,
  size: "s",
}

Modal.displayName = "Modal"

export const ModalHeader = styled.div`
  padding: ${props => props.theme.spaceM};
`

ModalHeader.displayName = "ModalHeader"

export const ModalBody = styled.div`
  padding: ${props => props.theme.spaceM};
`

ModalBody.displayName = "ModalBody"

export const ModalFooter = styled.div`
  padding: ${props => props.theme.spaceM};
`

ModalFooter.displayName = "ModalFooter"
