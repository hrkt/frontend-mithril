module.exports = {
  devServer: {
    host: "localhost",
    port: 3000,
    disableHostCheck: true,

    proxy: {
      "/api": {
        target: "http://localhost:8080/"
      }
    },
    historyApiFallback: {
      index: 'index.html'
    }
  },
  output: {
    publicPath: "/",
    filename: "bundle.js"
  }
};
