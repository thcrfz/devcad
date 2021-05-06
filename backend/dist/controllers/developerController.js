"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _developerModel = require('../presenter/developerModel'); var _developerModel2 = _interopRequireDefault(_developerModel);
var _languageModel = require('../presenter/languageModel'); var _languageModel2 = _interopRequireDefault(_languageModel);

class DeveloperController {
  async store(req, res) {
    try {
      const developer = await _developerModel2.default.create(req.body);

      return res.json(developer);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(((err) => err.message)) });
    }
  }

  async index(req, res) {
    try {
      const developers = await _developerModel2.default.findAll({
        attributes: ['id', 'name', 'email', 'age', 'url'],
        order: [['id', 'DESC'], [_languageModel2.default, 'id', 'DESC']],
        include: {
          model: _languageModel2.default,
          attributes: ['name'],
        },
      });
      return res.json(developers);
    } catch (e) {
      return res.status(404).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['Missing ID.'] });

      const developer = await _developerModel2.default.findByPk(id, {
        attributes: ['id', 'name', 'email', 'age', 'url'],
        order: [['id', 'DESC'], [_languageModel2.default, 'id', 'DESC']],
        include: {
          model: _languageModel2.default,
          attributes: ['name'],
        },
      });

      if (!developer) return res.status(400).json({ errors: ['Developer not exists.'] });

      return res.json(developer);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['Missing ID'] });

      const developer = await _developerModel2.default.findByPk(id);

      if (!developer) return res.status(400).json({ errors: ['Developer not exist.'] });

      const updateDeveloper = await developer.update(req.body);

      return res.json(updateDeveloper);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ['Missing ID'] });

      const developer = await _developerModel2.default.findByPk(id);

      if (!developer) return res.status(400).json({ errors: ['Developer not exist.'] });

      await developer.destroy();

      return res.json({ deleted: true });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

exports. default = new DeveloperController();
