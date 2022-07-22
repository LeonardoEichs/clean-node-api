module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.0.3',
      skipMD5Check: true
    },
    autoStart: false
  }
}
