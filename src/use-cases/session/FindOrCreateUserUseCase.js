import User from '../../models/User';

class FindOrCreateUserUseCase {
  async execute({ email }) {
    if (!email) {
      throw new Error('Email é obrigatorio');
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return user;
  }
}

export default FindOrCreateUserUseCase;