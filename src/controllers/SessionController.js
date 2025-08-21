
import * as Yup from 'yup';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';
import AuthenticateUserUseCase from '../use-cases/session/AuthenticateUserUseCase';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Email é necessário' });
    }

    const { email } = req.body;

    const userRepository = new UserRepository(User);
    const authenticateUser = new AuthenticateUserUseCase(userRepository);

    try {
      const user = await authenticateUser.execute({ email });
      return res.json(user); 
    } catch (error) {
      return res.status(401).json({ error: error.message }); 
    }
  }
}

export default new SessionController();