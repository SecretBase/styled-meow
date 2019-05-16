import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import minify from "rollup-plugin-babel-minify"

import pkg from "./package.json"
import babelConfig from "./.babelrc.json"

const baseConfig = {
  input: "src/index.js",
  plugins: [
    babel({ exclude: "**/node_modules/**", ...babelConfig }),
    resolve(),
    minify(),
  ],
}

const esConfig = {
  ...baseConfig,
  output: {
    file: pkg.module,
    format: "esm",
  },
  external: [
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.dependencies),
  ],
}

const cjsConfig = {
  ...esConfig,
  output: {
    file: pkg.main,
    format: "cjs",
  },
}

export default [esConfig, cjsConfig]
