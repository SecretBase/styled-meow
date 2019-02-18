import React from "react"

import { storiesOf } from "@storybook/react"

import {
  Input,
  Label,
  FormGroup,
  TextArea,
  Select,
  Grid,
  Cell,
  Container,
} from "../src"

const GridFormGroup = props => <Grid as={FormGroup} {...props} />

storiesOf("Form", module)
  .add("Input", () => {
    return (
      <Container>
        <FormGroup>
          <Label>Username</Label>
          <Input placeholder="name" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input placeholder="Hell World" type="password" />
        </FormGroup>
        <FormGroup>
          <Label>About me</Label>
          <TextArea placeholder="Hell World" rows={5} />
        </FormGroup>
        <FormGroup>
          <Label>About me</Label>
          <Select placeholder="Hell World">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
        </FormGroup>
      </Container>
    )
  })
  .add("Form layout", () => {
    return (
      <Container>
        <GridFormGroup>
          <Cell as={Label} sm={3} lg={2}>
            Username
          </Cell>
          <Cell>
            <Input placeholder="name" />
          </Cell>
        </GridFormGroup>
        <GridFormGroup>
          <Cell as={Label} sm={3} lg={2}>
            Password
          </Cell>
          <Cell>
            <Input placeholder="Hell World" type="password" />
          </Cell>
        </GridFormGroup>
        <GridFormGroup>
          <Cell as={Label} sm={3} lg={2}>
            About me
          </Cell>
          <Cell>
            <TextArea placeholder="Hell World" rows={5} />
          </Cell>
        </GridFormGroup>
        <GridFormGroup>
          <Cell as={Label} sm={3} lg={2}>
            About me
          </Cell>
          <Cell>
            <Select placeholder="Hell World">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
          </Cell>
        </GridFormGroup>
      </Container>
    )
  })
