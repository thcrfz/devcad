"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _languageModel = require('../presenter/languageModel'); var _languageModel2 = _interopRequireDefault(_languageModel);

class LanguageController {
  async store(req, res) {
    try {
      const language = await _languageModel2.default.create(req.body);
      return res.json(language);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(((err) => err.message)) });
    }
  }
}
exports. default = new LanguageController();
