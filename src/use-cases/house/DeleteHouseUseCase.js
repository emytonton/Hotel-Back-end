// verifica permissao do user e deleta a casa
import House from '../models/House';

class DeleteHouseUseCase {
  async execute({ user_id, house_id }) {
    const houseToDelete = await House.findById(house_id);

    if (!houseToDelete) {
      throw new Error('Casa não encontrada');
    }

    if (String(houseToDelete.user) !== String(user_id)) {
      throw new Error('Impossivel deletar, você não é dono dessa casa');
    }

    await House.findByIdAndDelete(house_id);
  }
}

export default DeleteHouseUseCase;