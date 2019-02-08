import styled from "styled-components"
import { oneOf } from "prop-types"
import { variantButtonMixin, variantButtonMap } from "../../mixins/variant"
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
  ${props => variantButtonMixin(props.variant)}
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
  variant: oneOf(Object.keys(variantButtonMap)),
}

Button.defaultProps = {
  variant: "default",
}

Button.displayName = "Button"
