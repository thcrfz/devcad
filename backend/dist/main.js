"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cookieparser = require('cookie-parser'); var _cookieparser2 = _interopRequireDefault(_cookieparser);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
require('./config/connection');
var _developerRoutes = require('./frameworks/web/routes/developerRoutes'); var _developerRoutes2 = _interopRequireDefault(_developerRoutes);
var _languagesRoutes = require('./frameworks/web/routes/languagesRoutes'); var _languagesRoutes2 = _interopRequireDefault(_languagesRoutes);

_dotenv2.default.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const whiteList = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://34.95.158.147",
  "https://devcad.netlify.app",
];

const corsOption = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOption));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_cookieparser2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
  }

  routes() {
    this.app.use("/developers", _developerRoutes2.default);
    this.app.use("/languages", _languagesRoutes2.default);
  }
}
exports. default = new App().app;
