import styled, { css } from "styled-components"

const control = css`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  height: 38px;
  background-color: ${props => props.theme.colorWhite};
  color: ${props => props.theme.textColorPrimaryOnLight};
  border: 1px solid ${props => props.theme.colorNeutral55};
`

export const Input = styled.input`
  ${control}
`
Input.displayName = "Input"

export const TextArea = styled.textarea`
  ${control}
  height: auto;
`

TextArea.displayName = "TextArea"

export const Select = styled.select`
  ${control}
`
Select.displayName = "Select"
