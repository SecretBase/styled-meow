import { configure, addDecorator } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import ThemeDecorator from "./ThemeDecorator"

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// addDecorator(withInfo())
addDecorator(ThemeDecorator)
configure(loadStories, module)
