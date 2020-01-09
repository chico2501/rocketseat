import Sequelize, { Model } from 'sequelize';
import { parseISO, addMonths } from 'date-fns';

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

    return this;
  }

  getDataEnd(data, duration) {
    const dataInicio = parseISO(data);
    return addMonths(dataInicio, duration);
  }

  getTotal(price, duration) {
    return price * duration;
  }
}

export default Student;
