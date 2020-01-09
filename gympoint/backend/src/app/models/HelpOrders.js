import Sequelize, { Model } from 'sequelize';

class HelpOrders extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        message: Sequelize.TEXT,
        answer: Sequelize.TEXT,
        created_at: new Date(),
        answer_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default HelpOrders;
