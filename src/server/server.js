import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';

import path from 'path';
import compression from 'compression';
import express from 'express';
import open from 'open';

import {config} from './bundler/webpack.dev.config';

/* eslint-disable no-console */
const app = express();
const port = 3000;
const compiler = webpack(config);

const devMiddleware = webpackDev(compiler, {
  publicPath: config.output.publicPath
});

const hotMiddleware = webpackHot(compiler, {
  path: '/__webpack_hmr',
  heartbeat: 10000
});

app.use(compression());

app.use(devMiddleware);

app.use(hotMiddleware);

app.use((req, res, next) => {
  const reqPath = req.url;
  const file = reqPath.split('/').pop();

  if (['index.html'].indexOf(file) !== -1) {
    res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, file)));
  } else if(file.indexOf('.html') === -1) {
    res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')));
  } else {
    next();
  }
});

app.get('/source', (req, res) => {
  const file = path.join(config.output.path, 'index.html');
  res.set('Content-Type', 'text/plain');
  res.end(devMiddleware.fileSystem.readFileSync(file));
});

app.listen(port, (err) => err ? console.log(err) : open('http://localhost:' + port));
