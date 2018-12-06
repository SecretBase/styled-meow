import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import normalize from "../src/global/normalize"

import createTheme from "../src/theme"

const Normalize = createGlobalStyle`
  ${normalize}
`
const theme = createTheme()
export default storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <Normalize />
      {storyFn()}
    </>
  </ThemeProvider>
)
