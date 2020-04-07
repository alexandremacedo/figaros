import Sequelize, { Model } from 'sequelize';

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        duration: Sequelize.STRING,
        price: Sequelize.FLOAT
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Service;
