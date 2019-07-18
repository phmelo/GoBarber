//  const express = require("express"); //Common JS Syntax
//  const routes = require("./routes");
import express from 'express'; // Babel or Babel Node or Sucrase
import path from 'path';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.midlewares();
    this.routes();
  }

  midlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

//  module.exports = new App().server; //Common JS Syntax
export default new App().server;
