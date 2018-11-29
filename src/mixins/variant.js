import { css } from "styled-components"

const defaultMixin = css`
  background: none;
  color: ${props => props.theme.textColorPrimaryOnLight};
`

const primaryMixin = css`
  color: ${props => props.theme.textColorPrimaryOnDark};
  background-color: ${props => props.theme.colorButtonPrimary};

  &:hover {
    background-color: ${props => props.theme.colorButtonPrimaryHover};
  }
`

const secondaryMixin = css`
  color: ${props => props.theme.textColorPrimaryOnLight};
  background-color: ${props => props.theme.colorButtonSecondary};
  &:hover {
    background-color: ${props => props.theme.colorButtonSecondaryHover};
  }
`

export const variantMap = {
  primary: primaryMixin,
  secondary: secondaryMixin,
  default: defaultMixin,
}

export default variant => {
  return variantMap[variant] ? variantMap[variant] : defaultMixin
}
