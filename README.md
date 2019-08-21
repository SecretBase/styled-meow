# styled-meow

![npm](https://img.shields.io/npm/v/styled-meow?color=pink&label=%F0%9F%98%BAstyled-meow) [![Build Status](https://travis-ci.com/SecretBase/styled-meow.svg?branch=master)](https://travis-ci.com/SecretBase/styled-meow)

I love `styled-components`, so I make some components for myself

## Install

```bash
yarn add styled-meow styled-components
```

## Usage

In order to use the show style correctly. Import the `ThemeProvider` from `styled-components` and using `createTheme` from `styled-meow`

```javascript
import { Button, createTheme } from "styled-meow"
import { ThemeProvider } from "styled-components"
import { render } from "react-dom"

render(
  <ThemeProvider theme={createTheme()}>
    <Button variant="primary">Meow !! </Button>
  </ThemeProvider>,
  domElement,
)
```

## StoryBook

Take a look at the [story book](https://secretbase.github.io/styled-meow/) to find out more.
