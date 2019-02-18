import styled, { css } from "styled-components"
import { oneOf } from "prop-types"
import {
  spaceM,
  breakpointSm,
  breakpointMd,
  breakpointLg,
  breakpointXl,
} from "../../theme/constants"

const colSpan = oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

const colWidth = span => css`
  flex: 0 0 ${(100 / 12) * span}%;
`

export const Cell = styled.div`
  padding-left: ${spaceM};
  padding-right: ${spaceM};
  width: 100%;
  flex-grow: 1;

  ${props => (props.xs ? colWidth(props.xs) : null)}

  @media (min-width: ${breakpointSm}) {
    width: auto;
    ${props => (props.sm ? colWidth(props.sm) : null)}
  }

  @media (min-width: ${breakpointMd}) {
    ${props => (props.md ? colWidth(props.md) : null)};
  }

  @media (min-width: ${breakpointLg}) {
    ${props => (props.lg ? colWidth(props.lg) : null)};
  }

  @media (min-width: ${breakpointXl}) {
    ${props => (props.xl ? colWidth(props.xl) : null)};
  }
`

Cell.displayName = "Cell"
Cell.propTypes = {
  xs: colSpan,
  sm: colSpan,
  md: colSpan,
  lg: colSpan,
  xl: colSpan,
}
