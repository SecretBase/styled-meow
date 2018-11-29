import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export default createGlobalStyle`
  ${normalize}
  body {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
    color: ${props => props.theme.textColorPrimaryOnLight};
    text-align: left;
    background-color: ${props => props.theme.colorWhite};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
  }
`
