
import * as Yup from 'yup';
import FindOrCreateUserUseCase from '../use-cases/session/FindOrCreateUserUseCase';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Email é necessario' });
    }

    const { email } = req.body;
    const findOrCreateUser = new FindOrCreateUserUseCase();

    try {
      const user = await findOrCreateUser.execute({ email });
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new SessionController();