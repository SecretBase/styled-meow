import React from "react"
import styled from "styled-components"

import { storiesOf } from "@storybook/react"

import { Grid, Cell } from "../src"

const VerticalGrid = styled(Grid)`
  flex-direction: column;
  height: 400px;
`

const DemoGrid = styled.div`
  ${Cell} {
    border: 1px solid #000;
  }
`

storiesOf("Layout", module).add("Grid and Cell", () => (
  <DemoGrid>
    <VerticalGrid>
      <Cell sm={4}>sm 4</Cell>
      <Cell xs={6}>xs 6</Cell>
      <Cell sm={2}>sm 2</Cell>
    </VerticalGrid>
    <Grid>
      <Cell>Even</Cell>
      <Cell>Even</Cell>
      <Cell>Even</Cell>
    </Grid>
    <Grid>
      <Cell>Even</Cell>
      <Cell>Even</Cell>
      <Cell>
        <VerticalGrid>
          <Cell sm={4}>sm 4</Cell>
          <Cell xs={6}>xs 6</Cell>
          <Cell sm={2}>sm 2</Cell>
        </VerticalGrid>
      </Cell>
    </Grid>
  </DemoGrid>
))
