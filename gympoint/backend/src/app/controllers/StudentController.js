import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    // const schema = Yup.object

    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(401).json({ error: 'Estudante já existe' });
    }

    const { id, name, email, idade, peso, altura } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      idade,
      peso,
      altura,
    });
  }

  async index(req, res) {
    const students = await Student.findAll({
      order: ['name'],
    });

    return res.json(students);
  }

  async update(req, res) {
    const student = await Student.findByPk(req.params.id);

    student.updated_at = new Date();

    const { id, name, email, idade, peso, altura } = await student.update(
      req.body
    );

    return res.json({ id, name, email, idade, peso, altura });
  }

  async delete(req, res) {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(401).json({ error: 'Esse aluno não existe.' });
    }

    await student.destroy();

    return res.json({ message: 'Aluno excluído com sucesso.' });
  }
}

export default new StudentController();
