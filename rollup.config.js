import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"

import pkg from "./package.json"

const babelConfig = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        loose: true,
      },
    ],
  ],
}

const baseConfig = {
  input: "src/index.js",
  plugins: [
    babel({ exclude: "**/node_modules/**", ...babelConfig }),
    resolve(),
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
