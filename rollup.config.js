const browsersync = require ('rollup-plugin-browsersync');
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = isProduction === false;

module.exports = {
  input: 'src/scripts/index.js',
  output: {
    file: 'public/giphy.js',
    format: 'iife'
  },
  plugins: [
    (isProduction && browsersync({server: 'public'}))
  ]
};
