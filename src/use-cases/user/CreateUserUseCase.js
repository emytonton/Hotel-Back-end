
class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email }) {
    if (!email) {
      throw new Error('Email é obrigatório.');
    }

    const userAlreadyExists = await this.userRepository.search({ email });

    if (userAlreadyExists.length > 0) {
      throw new Error('Usuário com este e-mail já existe.');
    }

    const newUser = await this.userRepository.save({ email });
    return newUser;
  }
}

export default CreateUserUseCase;