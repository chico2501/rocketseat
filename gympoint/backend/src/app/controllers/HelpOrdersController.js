import HelpOrders from '../models/HelpOrders';

class HelpOrdersController {
  async store(req, res) {
    const { message } = req.body;

    const student_id = req.params.id;

    const helpOrder = await HelpOrders.create(student_id, message);

    return res.json(helpOrder);
  }
  /*
  async index(req, res) {
    const enrollments = await Enrollment.findAll({
      order: ['start_date'],
      attributes: [
        'id',
        'student_id',
        'plan_id',
        'start_date',
        'end_date',
        'price',
        'active',
        'date_formatted',
      ],
      include: [
        {
          model: Plan,
          as: 'plan',
          attributes: ['title', 'duration'],
        },
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    });

    return res.json(enrollments);
  }

  async update(req, res) {
    const { student_id, plan_id, data_ini } = req.body;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(401).json({ error: 'Student not found' });
    }

    const plan = await Plan.findOne({ where: { id: plan_id } });

    if (!plan) {
      return res.status(401).json({ error: 'Plan not found' });
    }

    const enrollment = await Enrollment.findByPk(req.params.id);

    const dataEnd = await student.getDataEnd(data_ini, plan.duration);
    const totalPrice = await student.getTotal(plan.price, plan.duration);

    if (!enrollment) {
      return res.status(401).json({ error: 'Essa matrícula não existe.' });
    }

    await enrollment.update({
      student_id,
      plan_id,
      start_date: parseISO(data_ini),
      end_date: dataEnd,
      price: totalPrice,
    });

    return res.json(enrollment);
  }

  async delete(req, res) {
    const enrollment = await Enrollment.findByPk(req.params.id);

    if (!enrollment) {
      return res.status(401).json({ error: 'Essa matrícula não existe.' });
    }

    await enrollment.destroy();

    return res.json({ message: 'Matrícula excluída com sucesso.' });
  }
  */
}

export default new HelpOrdersController();
