import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.STRING,
        altura: Sequelize.STRING,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
