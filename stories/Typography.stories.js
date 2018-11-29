import React from "react"

import { storiesOf, addDecorator } from "@storybook/react"

import ThemeDecorator from "./ThemeDecorator"

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  Small,
} from "../src/components/Typography"

addDecorator(ThemeDecorator)
storiesOf("Typography", module)
  .add("Heading", () => (
    <>
      <H1>H1 Hello World</H1>
      <H2>H2 Hello World</H2>
      <H3>H3 Hello World</H3>
      <H4>H4 Hello World</H4>
      <H5>H5 Hello World</H5>
      <H6>H6 Hello World</H6>
    </>
  ))
  .add("extended heading style", () => (
    <>
      <H1 as="span">span Hello World with H1</H1>
      <H2 as={Text}>p Hello World with H2</H2>
    </>
  ))
  .add("Paragraphy", () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta velit
      pariatur iste eos, iure, eius iusto nisi vero nihil. Ipsam magnam quam
      vitae mollitia dolorem quas eveniet doloribus repellendus ullam.
    </Text>
  ))
  .add("Small", () => (
    <>
      <H1>
        Hello World <Small>Hello World Small Text</Small>
      </H1>
    </>
  ))
