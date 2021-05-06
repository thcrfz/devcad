"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class languageModel extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: { msg: 'Invalid field empty' },
        },
      },
    }, {
      sequelize,
      tableName: 'languages',
    });
  }

  static associate(models) {
    this.belongsTo(models.developerModel, { foreignKey: 'developer_id' });
  }
} exports.default = languageModel;
