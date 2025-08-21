
import * as Yup from 'yup';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';


import ListUsersUseCase from '../use-cases/user/ListUsersUseCase';
import UpdateUserUseCase from '../use-cases/user/UpdateUserUseCase';
import DeleteUserUseCase from '../use-cases/user/DeleteUserUseCase';
import CreateUserUseCase from '../use-cases/user/CreateUserUseCase'
class UserController {
    
  async index(req, res) {
    const userRepository = new UserRepository(User);
    const listUsers = new ListUsersUseCase(userRepository);

    try {
      const users = await listUsers.execute();
      return res.json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação: E-mail inválido.' });
    }

    const { email } = req.body;

    const userRepository = new UserRepository(User);
    const createUser = new CreateUserUseCase(userRepository);

    try {
      const user = await createUser.execute({ email });
      return res.status(201).json(user); 
    } catch (error) {
      return res.status(400).json({ error: error.message }); 
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação: E-mail inválido.' });
    }

    const { user_id } = req.params; 
    const { email } = req.body;

    const userRepository = new UserRepository(User);
    const updateUser = new UpdateUserUseCase(userRepository);

    try {
      await updateUser.execute({ user_id, email });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async destroy(req, res) {
    const { user_id } = req.params;

    const userRepository = new UserRepository(User);
    const deleteUser = new DeleteUserUseCase(userRepository);

    try {
      await deleteUser.execute({ user_id });
      return res.json({ message: 'Usuário deletado com sucesso.' });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();