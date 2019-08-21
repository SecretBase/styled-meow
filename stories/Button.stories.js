import React from "react"

import { storiesOf } from "@storybook/react"

import { Button } from "../src"

storiesOf("Button", module).add("Basic", () => (
  <>
    <Button variant="primary" m={16}>
      Button Primary
    </Button>
    <Button variant="secondary">Button Secondary</Button>
    <Button variant="primary" disabled>
      Button Disabled
    </Button>
    <Button variant="primary" as="a" p={30}>
      Link Primary
    </Button>
  </>
))
