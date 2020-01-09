import Student from '../models/Student';

class StudentLoginController {
  async index(req, res) {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(401).json({ error: 'Estudante não encontrado' });
    }

    const { id, name, email, peso, altura, idade } = student;

    return res.json({
      student: {
        id,
        name,
        email,
        peso,
        altura,
        idade,
      },
    });
  }
}

export default new StudentLoginController();
