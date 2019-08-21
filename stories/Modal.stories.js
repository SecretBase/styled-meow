import React, { useState, useCallback } from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, radios } from "@storybook/addon-knobs"

import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "../src"

const stories = storiesOf("Modal", module)
stories.addDecorator(withKnobs)

stories.add("Basic", () => {
  const show = boolean("Show", true)
  const size = radios(
    "Modal Size",
    {
      Small: "s",
      Medium: "m",
      Large: "l",
    },
    "s",
  )
  return (
    <Modal show={show} size={size}>
      <ModalHeader>Title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        repellendus, officiis cumque recusandae deleniti ullam. Cum maiores
        nobis fugit sapiente laudantium officiis debitis architecto voluptatibus
        magni! Incidunt ad ducimus eius?
      </ModalBody>
      <ModalFooter>Footer</ModalFooter>
    </Modal>
  )
})

const ControlledModalExample = () => {
  const [show, setShow] = useState(false)

  const handleHide = useCallback(() => {
    console.log("here")
    setShow(false)
  }, [setShow])

  const handleOpenModal = useCallback(() => {
    setShow(true)
  }, [setShow])

  return (
    <>
      <Button type="button" onClick={handleOpenModal} variant="primary">
        Open Modal
      </Button>
      <Modal show={show} onHide={handleHide} onBackdropClick={handleHide}>
        <ModalHeader>Title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          repellendus, officiis cumque recusandae deleniti ullam. Cum maiores
          nobis fugit sapiente laudantium officiis debitis architecto
          voluptatibus magni! Incidunt ad ducimus eius?
        </ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    </>
  )
}

stories.add("Controlled Modal", () => <ControlledModalExample />, {
  info: {
    disable: true,
  },
})
