import House from '../../models/House';

class ListUserHousesUseCase {
  async execute({ user_id }) {
    if (!user_id) {
      throw new Error('User ID is required.');
    }

    const houses = await House.find({ user: user_id });

    return houses;
  }
}

export default ListUserHousesUseCase;