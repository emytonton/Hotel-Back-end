class AuthenticateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email }) {
    if (!email) {
      throw new Error('Email é obrigatório.');
    }

    const usersFound = await this.userRepository.search({ email });
    const user = usersFound[0];

    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    return user;
  }
}

export default AuthenticateUserUseCase;