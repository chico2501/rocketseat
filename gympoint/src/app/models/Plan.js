import Sequelize, { Model } from 'sequelize';

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
        created_at: new Date(),
        updated_at: new Date(),
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

export default Plan;
