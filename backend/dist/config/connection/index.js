"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _databaseService = require('../database/databaseService'); var _databaseService2 = _interopRequireDefault(_databaseService);
var _developerModel = require('../../presenter/developerModel'); var _developerModel2 = _interopRequireDefault(_developerModel);
var _languageModel = require('../../presenter/languageModel'); var _languageModel2 = _interopRequireDefault(_languageModel);

const models = [_developerModel2.default, _languageModel2.default];

const connection = new (0, _sequelize2.default)(_databaseService2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

exports. default = models;
