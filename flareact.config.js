module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
    })

    return config
  },
}
