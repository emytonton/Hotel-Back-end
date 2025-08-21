
class UpdateReserveUseCase {
  constructor(reserveRepository) {
    this.reserveRepository = reserveRepository;
  }

  async execute({ user_id, reserve_id, date }) {
    
    const reservesFound = await this.reserveRepository.search({ _id: reserve_id });
    const reserve = reservesFound[0];

    if (!reserve) {
      throw new Error('Reserva não encontrada');
    }

    if (String(reserve.user._id) !== String(user_id)) {
      throw new Error('Não autorizado: você não pode atualizar esta reserva.');
    }

    
    const updatedData = {
      _id: reserve_id,
      date,
    };

    await this.reserveRepository.save(updatedData);
  }
}

export default UpdateReserveUseCase;