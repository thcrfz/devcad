"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class developerModel extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: ['Name should have between 3 an 255 characters.'],
          },

        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: { msg: 'Email already exists.' },
        validate: {
          isEmail: { msg: 'Email invalid.' },
        },
      },
      age: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: { msg: 'Age should have to be a integer' },
        },
      },
      url: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          isUrl: { msg: 'Field should have to be a url type.' },
        },
      },
    }, {
      sequelize,
      tableName: 'developers',
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.languageModel, { foreignKey: 'developer_id' });
  }
} exports.default = developerModel;
