import Help from '../models/Help';

class HelpController {
  async store(req, res) {
    const { message } = req.body;

    const student_id = req.params.id;

    const helpOrder = await Help.create(student_id, message);

    return res.json(helpOrder);
  }
}

export default new HelpController();
