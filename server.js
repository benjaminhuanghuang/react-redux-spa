const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.get("/", function (req, res) {
  res.render('index');
});

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/dist',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(9527, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}}`);
});