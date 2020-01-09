import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Enrollment from '../models/Enrollment';
import Student from '../models/Student';
import Plan from '../models/Plan';

import Mail from '../../lib/Mail';

class EnrollmentController {
  async store(req, res) {
    const { student_id, plan_id, data_ini } = req.body;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(401).json({ error: 'Student not found' });
    }

    const plan = await Plan.findOne({ where: { id: plan_id } });

    if (!plan) {
      return res.status(401).json({ error: 'Plan not found' });
    }

    const dataEnd = await student.getDataEnd(data_ini, plan.duration);
    const totalPrice = await student.getTotal(plan.price, plan.duration);

    const enrollment = await Enrollment.create({
      student_id,
      plan_id,
      start_date: parseISO(data_ini),
      end_date: dataEnd,
      price: totalPrice,
    });

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Seja bem vindo a Gympoint!',
      text: `Sua matrícula doi efetivada!\nConfira abaixo as informações da sua matrícula:\n
        Plano - ${plan.title} (${plan.duration} meses)\n
        Início - ${format(parseISO(data_ini), "dd 'de' MMM 'de' yyyy", {
          locale: pt,
        })}\n
        Término - ${format(dataEnd, "dd 'de' MMM 'de' yyyy", { locale: pt })}\n
        Valor: R$ ${totalPrice}`,
    });

    return res.json(enrollment);
  }

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
}

export default new EnrollmentController();
