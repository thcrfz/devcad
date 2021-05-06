"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _developerController = require('../../../controllers/developerController'); var _developerController2 = _interopRequireDefault(_developerController);

const router = new (0, _express.Router)();

router.post('/', _developerController2.default.store);
router.get('/', _developerController2.default.index);
router.get('/:id', _developerController2.default.show);
router.put('/:id', _developerController2.default.update);
router.delete('/:id', _developerController2.default.delete);

exports. default = router;
