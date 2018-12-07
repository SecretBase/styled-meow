import styled from "styled-components"
import { oneOf } from "prop-types"
import variantMixin, { variantMap } from "../../mixins/variant"
import { marginMixin, paddingMixin, spacingPropTypes } from "../../mixins/space"

import {
  spaceM,
  spaceS,
  colorNeutral90,
  colorNeutral65,
} from "../../theme/constants"

export const Button = styled.button`
  padding: ${spaceS} ${spaceM};
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${props => variantMixin(props.variant)}
  ${marginMixin}
  ${paddingMixin}

  &[disabled] {
    background-color: ${colorNeutral90};
    color: ${colorNeutral65};
    cursor: not-allowed;
  }
`

Button.propTypes = {
  ...spacingPropTypes,
  variant: oneOf(Object.keys(variantMap)),
}

Button.defaultProps = {
  variant: "default",
}

Button.displayName = "Button"
