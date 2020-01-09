import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    const { id, title, duration, price } = await Plan.create(req.body);

    return res.json({ id, title, duration, price });
  }

  async index(req, res) {
    const plans = await Plan.findAll({
      attributes: ['id', 'title', 'duration', 'price', 'canceled_at'],
    });

    return res.json(plans);
  }

  async update(req, res) {
    const plan = await Plan.findByPk(req.params.id);

    plan.updated_at = new Date();

    const { id, title, duration, price } = await plan.update(req.body);

    return res.json({ id, title, duration, price });
  }

  /**
   * Função de deletar sem apagar do banco

  async delete(req, res) {
    const plan = await Plan.findByPk(req.params.id);

    plan.canceled_at = new Date();

    await plan.save();

    return res.json(plan);
  }
  */
  async delete(req, res) {
    const plan = await Plan.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'title', 'duration', 'price'],
    });

    if (!plan) {
      return res.status(401).json({ error: 'Este Plano não existe.' });
    }

    await plan.destroy();

    return res.json({ message: 'Plano excluído com sucesso.' });
  }
}

export default new PlanController();
