// atualiza uma reserva
import Reserve from '../../models/Reserve';

class UpdateReserveUseCase {
  async execute({ user_id, reserve_id, date }) {
    const reserve = await Reserve.findById(reserve_id);

    if (!reserve) {
      throw new Error('Reserva não encontrada');
    }

    if (String(reserve.user) !== String(user_id)) {
      throw new Error('Falha na validação');
    }

    await Reserve.updateOne({ _id: reserve_id }, { date });
  }
}

export default UpdateReserveUseCase;