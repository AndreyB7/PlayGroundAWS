const express = require("express");
const router = express.Router()
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');

var history = require('connect-history-api-fallback');

const compiler = webpack(config);

const app = express();

const port = process.env.PORT || 3000;

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

app.use(history());
app.use(middleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(require("webpack-hot-middleware")(compiler));

router.route("*").get((_req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log('Server started on: ' + port);
});