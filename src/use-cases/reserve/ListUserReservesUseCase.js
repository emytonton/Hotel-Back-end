// lsita as casa de um user
import Reserve from '../models/Reserve';

class ListUserReservesUseCase {
  async execute({ user_id }) {
    if (!user_id) {
      throw new Error('User ID is required.');
    }

    const reserves = await Reserve.find({ user: user_id }).populate('house');
    return reserves;
  }
}

export default ListUserReservesUseCase;