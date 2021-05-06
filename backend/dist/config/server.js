"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _main = require('../main'); var _main2 = _interopRequireDefault(_main);

_main2.default.listen(process.env.PORT || 3001, () => {
  console.log('servidor na porta 3001');
});
