module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));


      config.module.rules.push(
          {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }
      );

      return config;
    },
    webpackDevMiddleware: config => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      return config
    },
  }