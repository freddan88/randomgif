const sass = require ('node-sass');
const cssnano = require ('cssnano');
const normalize = require ('postcss-normalize');
const postcss = require ('rollup-plugin-postcss');
const {terser} = require ('rollup-plugin-terser');
const commonjs = require ('rollup-plugin-commonjs');
const filesize = require ('rollup-plugin-filesize');
const injectEnv = require ('rollup-plugin-inject-env');
const browsersync = require ('rollup-plugin-browsersync');
const nodeResolve = require ('rollup-plugin-node-resolve');
///////////////////////////////////////////////////////////
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

module.exports = {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/giphy.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    injectEnv(),
    postcss({
      extract: true,
      plugins: [
        normalize(),
        cssnano(),
      ],
      sourceMap: true,
    }),
      (isProduction && terser()),
      (isProduction && browsersync({server: 'public'})),
      // (isProduction && browsersync({proxy: "localhost:8888"})),
      (isDevelopment && filesize()),
    ]
};
