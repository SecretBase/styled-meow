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
export const H2 = styled.h2`
  font-size: 2rem;
  ${headingStyle}
`
export const H3 = styled.h3`
  font-size: 1.75rem;
  ${headingStyle}
`
export const H4 = styled.h4`
  font-size: 1.5rem;
  ${headingStyle}
`
export const H5 = styled.h5`
  font-size: 1.25rem;
  ${headingStyle}
`
export const H6 = styled.h6`
  font-size: 1rem;
  ${headingStyle}
`

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
`

export const Small = styled.span`
  font-size: 80%;
`
