import Sequelize, { Model } from 'sequelize';

class Help extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        message: Sequelize.TEXT,
        answer: Sequelize.TEXT,
        created_at: new Date(),
        answer_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Help;
