import { number } from "prop-types"

const marginKeys = {
  m: "margin",
  mt: "margin-top",
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left",
}

const paddingKeys = {
  p: "padding",
  pt: "padding-top",
  pr: "padding-right",
  pb: "padding-bottom",
  pl: "padding-left",
}

const createSpace = spaceType => props =>
  Object.entries(props)
    .filter(([key]) => Object.keys(spaceType).includes(key))
    .map(([key, value]) => `${spaceType[key]}: ${value}px}`)

export const marginMixin = createSpace(marginKeys)
export const paddingMixin = createSpace(paddingKeys)

export const spacingPropTypes = Object.entries({
  ...marginKeys,
  ...paddingKeys,
})
  .map(([key]) => [key, number])
  .reduce(
    (acc, [key, type]) => ({
      ...acc,
      [key]: type,
    }),
    {},
  )
