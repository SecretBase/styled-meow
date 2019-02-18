import styled from "styled-components"
import { oneOf } from "prop-types"
import { marginMixin, paddingMixin, spacingPropTypes } from "../../mixins/space"
import { spaceM } from "../../theme/constants"

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.direction};
  ${marginMixin}
  ${paddingMixin}
  margin-left: -${spaceM};
  margin-right: -${spaceM};
`

Grid.displayName = "Grid"
Grid.propTypes = {
  ...spacingPropTypes,
  direction: oneOf(["row", "row-reverse", "column", "column-reverse"]),
}
