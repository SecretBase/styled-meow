import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"

import { Container, Nav, NavItem, NavLink } from "../src"

const CenterNav = styled(Nav)`
  justify-content: center;
`

storiesOf("Nav", module)
  .add("Basic", () => (
    <Container mt={40}>
      <Nav>
        <NavItem>
          <NavLink href="#">Hello world</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Hello world</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" disabled>
            Hello world
          </NavLink>
        </NavItem>
      </Nav>
    </Container>
  ))
  .add("Justify Center", () => (
    <Container mt={40}>
      <CenterNav>
        <NavItem>
          <NavLink href="#">Hello world</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Hello world</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" disabled>
            Hello world
          </NavLink>
        </NavItem>
      </CenterNav>
    </Container>
  ))
  .add("Vertical", () => (
    <Container mt={40}>
      <Nav direction="column">
        <NavItem>
          <NavLink href="#">Hello world</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Hello world</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" disabled>
            Hello world
          </NavLink>
        </NavItem>
      </Nav>
    </Container>
  ))
