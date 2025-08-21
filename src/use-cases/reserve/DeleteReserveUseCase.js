import Reserve from '../../models/Reserve';

class DeleteReserveUseCase {
  async execute({ user_id, reserve_id }) {
    const reserve = await Reserve.findById(reserve_id);

    if (!reserve) {
      throw new Error('Reserva não encontrada');
    }

    if (String(reserve.user) !== String(user_id)) {
      throw new Error('Não autorizado');
    }

    await Reserve.findByIdAndDelete(reserve_id);
  }
}

export default DeleteReserveUseCase;