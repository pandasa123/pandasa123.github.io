const withOffline = require('next-offline')
const withSass = require('@zeit/next-sass')
module.exports = withOffline(withSass())
