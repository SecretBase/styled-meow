import React from "react"
import { ThemeProvider } from "styled-components"
import Normalize from "../src/global/normalize"

import createTheme from "../src/theme"

export default storyFn => (
  <ThemeProvider theme={createTheme()}>
    <>
      <Normalize />
      {storyFn()}
    </>
  </ThemeProvider>
)
