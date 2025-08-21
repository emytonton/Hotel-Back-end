

class DeleteUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ user_id }) {
    if (!user_id) {
      throw new Error('User ID é obrigatório.');
    }

    const userExists = await this.userRepository.search({ _id: user_id });
    if (userExists.length === 0) {
      throw new Error('Usuário não encontrado.');
    }

    await this.userRepository.delete(user_id);
  }
}

export default DeleteUserUseCase;