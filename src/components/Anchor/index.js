import styled from "styled-components"

export const Anchor = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: ${props => props.theme.colorInteractiveDefault};

  &:hover {
    text-decoration: underline;
  }
`
