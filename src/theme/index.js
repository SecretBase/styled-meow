import * as themes from "./constants"

export default (config = {}) => ({
  ...themes,
  ...config,
})
