import Sequelize, { Model } from 'sequelize';
import { isBefore, isAfter, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

class Enrollment extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
        plan_id: Sequelize.INTEGER,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.FLOAT,
        active: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, [
            'start_date',
            'end_date',
          ]),
          get() {
            return (
              isBefore(this.get('start_date'), new Date()) &&
              isAfter(this.get('end_date'), new Date())
            );
          },
        },
        date_formatted: {
          type: Sequelize.VIRTUAL(Sequelize.STRING, ['start_date', 'end_date']),
          get() {
            return {
              start_date: format(
                this.get('start_date'),
                "dd 'de' MMMM 'de' yyyy",
                {
                  locale: pt,
                }
              ),
              end_date: format(this.get('end_date'), "dd 'de' MMMM 'de' yyyy", {
                locale: pt,
              }),
            };
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' });
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
  }
}

export default Enrollment;
