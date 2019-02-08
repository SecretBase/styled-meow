import { css } from "styled-components"

const defaultMixin = css`
  background: none;
  color: ${props => props.theme.textColorPrimaryOnLight};
`

const primaryMixin = css`
  color: ${props => props.theme.textColorPrimaryOnDark};
  background-color: ${props => props.theme.colorButtonPrimary};
`

const secondaryMixin = css`
  color: ${props => props.theme.textColorPrimaryOnLight};
  background-color: ${props => props.theme.colorButtonSecondary};
`

const successMixin = css`
  color: ${props => props.theme.textColorPrimaryOnLight};
  background-color: ${props => props.theme.colorBgSucces};
`

const errorMixin = css`
  color: ${props => props.theme.textColorPrimaryOnLight};
  background-color: ${props => props.theme.colorBgError};
`

const warningMixin = css`
  color: ${props => props.theme.textColorPrimaryOnLight};
  background-color: ${props => props.theme.colorBgWarning};
`

export const variantMap = {
  primary: primaryMixin,
  secondary: secondaryMixin,
  default: defaultMixin,
  success: successMixin,
  error: errorMixin,
  warning: warningMixin,
}

export const variantButtonMap = {
  primary: css`
    ${primaryMixin}
    &:hover {
      background-color: ${props => props.theme.colorButtonPrimaryHover};
    }
  `,
  secondary: css`
    ${secondaryMixin}
    &:hover {
      background-color: ${props => props.theme.colorButtonSecondaryHover};
    }
  `,
}

export const variantMixin = variant => {
  return variantMap[variant] ? variantMap[variant] : defaultMixin
}

export const variantButtonMixin = variant => {
  return variantButtonMap[variant] ? variantButtonMap[variant] : defaultMixin
}
