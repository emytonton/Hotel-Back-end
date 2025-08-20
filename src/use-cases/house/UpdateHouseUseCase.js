// verifica permissao do user e altera a casa
import House from '../models/House';

class UpdateHouseUseCase {
  async execute({ user_id, house_id, thumbnail, description, price, location, status }) {
    const houseToUpdate = await House.findById(house_id);

    if (!houseToUpdate) {
      throw new Error('Casa não encontrada');
    }

    if (String(houseToUpdate.user) !== String(user_id)) {
      throw new Error('Impossivel atualizar, você não é dono dessa casa');
    }

    await House.updateOne({ _id: house_id }, {
      thumbnail,
      description,
      price,
      location,
      status,
    });
  }
}

export default UpdateHouseUseCase;