import React from "react"

import { storiesOf, addDecorator } from "@storybook/react"

import ThemeDecorator from "./ThemeDecorator"

import { Button } from "../src"

addDecorator(ThemeDecorator)
storiesOf("Button", module).add("with text", () => (
  <>
    <Button variant="primary">Button Primary</Button>
    <Button variant="secondary">Button Secondary</Button>
    <Button variant="primary" disabled>
      Button Disabled
    </Button>
    <Button variant="primary" as="a">
      Link Primary
    </Button>
  </>
))
