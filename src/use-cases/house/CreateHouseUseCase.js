//criar uma casa no banco de dados
import House from '../models/House';

class CreateHouseUseCase {
  async execute({ user_id, thumbnail, description, price, location, status }) {
    const house = await House.create({
      user: user_id,
      thumbnail,
      description,
      price,
      location,
      status,
    });
    return house;
  }
}

export default CreateHouseUseCase;