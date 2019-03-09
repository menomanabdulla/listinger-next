/*module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack(config, options) {
    return config
  }
})
*/


const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
module.exports = withCSS(withSass({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}))


/*
const path = require('path');
module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    // config.resolve.modules = [path.resolve(__dirname, "components"), "node_modules"]
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }, 
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/index' },
      '/about': { page: '/about' }
    }
  }
}
*/