// regras de negocio para fazer uma nova reserva
import House from '../../models/House';
import Reserve from '../../models/Reserve';

class CreateReserveUseCase {
  async execute({ user_id, house_id, date }) {
    const house = await House.findById(house_id);
    if (!house) {
      throw new Error('Essa casa não existe');
    }

    if (house.status !== true) {
      throw new Error('Essa casa não esta disponivel');
    }

    if (String(house.user) === String(user_id)) {
      throw new Error('Voce não pode alugar uma casa que já é sua');
    }

    let reserve = await Reserve.create({
      user: user_id,
      house: house_id,
      date,
    });

    reserve = await reserve.populate(['house', 'user']);

    return reserve;
  }
}

export default CreateReserveUseCase;