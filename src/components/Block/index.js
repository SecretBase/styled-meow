import styled from "styled-components"
import { oneOf } from "prop-types"
import { marginMixin, paddingMixin, spacingPropTypes } from "../../mixins/space"

import { variantMixin, variantMap } from "../../mixins/variant"

import { spaceM, spaceS } from "../../theme/constants"

export const Block = styled.div`
  padding: ${spaceS} ${spaceM};
  ${props => variantMixin(props.variant)}
  ${marginMixin}
  ${paddingMixin}
`

Block.propTypes = {
  ...spacingPropTypes,
  variant: oneOf(Object.keys(variantMap)),
}

Block.displayName = "Block"

Block.defaultProps = {
  variant: "default",
}
