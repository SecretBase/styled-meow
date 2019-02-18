import styled, { css } from "styled-components"
import {
  spaceM,
  breakpointSm,
  breakpointMd,
  breakpointLg,
  breakpointXl,
} from "../../theme/constants"

export const Container = styled.div`
  padding-left: ${spaceM};
  padding-right: ${spaceM};
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${props =>
    props.fluid
      ? null
      : css`
          @media (min-width: ${breakpointSm}) {
            max-width: 540px;
          }

          @media (min-width: ${breakpointMd}) {
            max-width: 720px;
          }

          @media (min-width: ${breakpointLg}) {
            max-width: 960px;
          }

          @media (min-width: ${breakpointXl}) {
            max-width: 1140px;
          }
        `}
`
