import styled from "styled-components"

import { marginMixin, paddingMixin, spacingPropTypes } from "../../mixins/space"

export const Nav = styled.ul`
  display: flex;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  flex-direction: ${props => props.direction};
  ${marginMixin}
  ${paddingMixin}
`

Nav.propTypes = {
  ...spacingPropTypes,
}
