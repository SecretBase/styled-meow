import styled, { css } from "styled-components"
import { Anchor } from "../Anchor"

export const NavLink = styled(Anchor).attrs(({ disabled }) => {
  if (disabled) {
    return {
      tabIndex: "-1",
      "aria-disabled": "true",
    }
  }

  return {}
})`
  display: block;
  padding: ${props => props.theme.spaceS} ${props => props.theme.spaceM};
  ${props =>
    props.disabled &&
    css`
      color: ${props => props.theme.colorNeutral65};
      pointer-events: none;
      cursor: default;
    `};
`

NavLink.displayName = "NavLink"
