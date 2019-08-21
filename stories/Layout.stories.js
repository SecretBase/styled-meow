import React from "react"
import styled from "styled-components"

import { storiesOf } from "@storybook/react"

import { Grid, Cell, Container } from "../src"

const VerticalGrid = styled(Grid)`
  flex-direction: column;
  height: 400px;
`

VerticalGrid.displayName = "VerticalGrid"

const DemoGrid = styled.div`
  ${Cell} {
    border: 1px solid #000;
  }
`

DemoGrid.displayName = "DemoGrid"

storiesOf("Layout", module).add("Grid and Cell", () => (
  <Container fluid>
    <DemoGrid>
      <VerticalGrid>
        <Cell xs={4}>sm 4</Cell>
        <Cell xs={6}>xs 6</Cell>
        <Cell xs={2}>sm 2</Cell>
      </VerticalGrid>
      <Grid>
        <Cell xs={4}>xs 4</Cell>
        <Cell xs={6}>xs 6</Cell>
        <Cell xs={2}>xs 2</Cell>
      </Grid>
      <Grid>
        <Cell sm={6}>Even</Cell>
        <Cell sm={3}>Even</Cell>
        <Cell sm={3}>Even</Cell>
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
  </Container>
))
