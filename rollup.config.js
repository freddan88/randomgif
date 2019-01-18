const browsersync = require ('rollup-plugin-browsersync');
const postcss = require ('rollup-plugin-postcss');
const normalize = require ('postcss-normalize');
const cssnano = require ('cssnano');
const sass = require ('node-sass')
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

module.exports = {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/giphy.js',
    format: 'iife'
  },
  plugins: [
    (isProduction && browsersync({server: 'public'})),
    // (isProduction && browsersync({proxy: "localhost:8888"})),
    postcss({
      extract: true,
      plugins: [
        normalize(),
        cssnano(),
      ],
      sourceMap: isDevelopment,
    }),
    ]
};
