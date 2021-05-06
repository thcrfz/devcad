"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _languageController = require('../../../controllers/languageController'); var _languageController2 = _interopRequireDefault(_languageController);

const router = new (0, _express.Router)();

router.post('/', _languageController2.default.store);

exports. default = router;
