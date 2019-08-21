import styled, { css } from "styled-components"

export const headingStyle = css`
  font-weight: 500;
  font-family: inherit;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: inherit;
`

export const H1 = styled.h1`
  font-size: 2.5rem;
  ${headingStyle}
`
H1.displayName = "H1"

export const H2 = styled.h2`
  font-size: 2rem;
  ${headingStyle}
`
H2.displayName = "H2"

export const H3 = styled.h3`
  font-size: 1.75rem;
  ${headingStyle}
`
H3.displayName = "H3"

export const H4 = styled.h4`
  font-size: 1.5rem;
  ${headingStyle}
`
H4.displayName = "H4"

export const H5 = styled.h5`
  font-size: 1.25rem;
  ${headingStyle}
`
H5.displayName = "H5"

export const H6 = styled.h6`
  font-size: 1rem;
  ${headingStyle}
`
H6.displayName = "H6"

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
`
Text.displayName = "Text"

export const Small = styled.span`
  font-size: 80%;
`
Small.displayName = "Small"
