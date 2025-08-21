

class UpdateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ user_id, email }) {
    if (!user_id || !email) {
      throw new Error('User ID e E-mail são obrigatórios.');
    }

   
    const existingUser = await this.userRepository.search({ email });
    if (existingUser.length > 0 && String(existingUser[0]._id) !== String(user_id)) {
      throw new Error('Este e-mail já está em uso por outro usuário.');
    }

    const updatedData = {
      _id: user_id,
      email,
    };

    await this.userRepository.save(updatedData);
  }
}

export default UpdateUserUseCase;