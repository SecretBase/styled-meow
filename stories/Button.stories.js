import React from "react"

import { storiesOf, addDecorator } from "@storybook/react"

import ThemeDecorator from "./ThemeDecorator"

import { Button } from "../src"

addDecorator(ThemeDecorator)
storiesOf("Button", module).add("with primary", () => [
  <Button variant="primary" m={16}>
    Button Primary
  </Button>,
  <Button variant="secondary">Button Secondary</Button>,
  <Button variant="primary" disabled>
    Button Disabled
  </Button>,
  <Button variant="primary" as="a" p={30}>
    Link Primary
  </Button>,
])
