import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"

import { Media, MediaBody, Text, H1 } from "../src/"

const AlignCenterImg = styled.img`
  align-self: center;
  margin-right: 16px;
`
storiesOf("Media", module)
  .add("example", () => (
    <>
      <Media>
        <img src="https://via.placeholder.com/64" alt="placeholder" />
        <MediaBody>
          <H1>Hello world</H1>
        </MediaBody>
      </Media>
    </>
  ))
  .add("align self center", () => (
    <>
      <Media>
        <AlignCenterImg
          src="https://via.placeholder.com/64"
          alt="placeholder"
        />
        <MediaBody>
          <H1>Hello world</H1>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            accusamus ut rem praesentium ab sint obcaecati non esse eos
            excepturi quaerat numquam reiciendis, doloremque cum repellat ea
            ipsa, commodi. Saepe?
          </Text>
        </MediaBody>
      </Media>
    </>
  ))
  .add("nested media list", () => (
    <>
      <Media>
        <img src="https://via.placeholder.com/64" alt="placeholder" />
        <MediaBody>
          <H1>Hello world</H1>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            accusamus ut rem praesentium ab sint obcaecati non esse eos
            excepturi quaerat numquam reiciendis, doloremque cum repellat ea
            ipsa, commodi. Saepe?
          </Text>
          <Media>
            <AlignCenterImg
              src="https://via.placeholder.com/64"
              alt="placeholder"
            />
            <MediaBody>
              <H1>Hello world</H1>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                accusamus ut rem praesentium ab sint obcaecati non esse eos
                excepturi quaerat numquam reiciendis, doloremque cum repellat ea
                ipsa, commodi. Saepe?
              </Text>
            </MediaBody>
          </Media>
        </MediaBody>
      </Media>
    </>
  ))
  .add("left and right", () => (
    <>
      <Media>
        <img src="https://via.placeholder.com/64" alt="placeholder" />
        <MediaBody>
          <H1>Hello world</H1>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            accusamus ut rem praesentium ab sint obcaecati non esse eos
            excepturi quaerat numquam reiciendis, doloremque cum repellat ea
            ipsa, commodi. Saepe?
          </Text>
        </MediaBody>
        <img src="https://via.placeholder.com/64" alt="placeholder" />
      </Media>
    </>
  ))
