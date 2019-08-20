import React from "react"

import { storiesOf } from "@storybook/react"
import { Modal, ModalHeader, ModalFooter, ModalBody } from "../src"

storiesOf("Modal", module).add("Basic", () => {
  return (
    <Modal show size="l">
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
