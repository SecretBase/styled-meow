import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { textColorPrimaryOnLight, colorWhite } from "../theme/constants"

export default createGlobalStyle`
  ${normalize}
  body {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
    color: ${textColorPrimaryOnLight};
    text-align: left;
    background-color: ${colorWhite};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
  }
`
