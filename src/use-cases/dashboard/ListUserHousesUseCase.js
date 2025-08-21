
class ListUserHousesUseCase {
  constructor(houseRepository) {
    this.houseRepository = houseRepository;
  }

  async execute({ user_id }) {
    if (!user_id) {
      throw new Error('User ID is required.');
    }

   
    const houses = await this.houseRepository.search({ user: user_id });

    return houses;
  }
}

export default ListUserHousesUseCase;