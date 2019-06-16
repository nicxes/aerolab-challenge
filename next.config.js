if (process.env.NODE_ENV !== 'production') {
  require('now-env')
}

module.exports = {
  target: 'serverless',
  env: {
    URL: process.env.AEROLAB_URL,
    TOKEN: process.env.AEROLAB_TOKEN
  }
}