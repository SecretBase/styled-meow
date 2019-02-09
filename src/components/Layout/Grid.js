import styled from "styled-components"
import { oneOf } from "prop-types"
import { marginMixin, paddingMixin, spacingPropTypes } from "../../mixins/space"

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.direction};
  ${marginMixin}
  ${paddingMixin}
`

Grid.displayName = "Grid"
Grid.propTypes = {
  ...spacingPropTypes,
  direction: oneOf(["row", "row-reverse", "column", "column-reverse"]),
}
