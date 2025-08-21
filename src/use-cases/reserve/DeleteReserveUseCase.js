
class DeleteReserveUseCase {
  constructor(reserveRepository) {
    this.reserveRepository = reserveRepository;
  }

  async execute({ user_id, reserve_id }) {
    
    const reservesFound = await this.reserveRepository.search({ _id: reserve_id });
    const reserve = reservesFound[0];

    if (!reserve) {
      throw new Error('Reserva não encontrada');
    }

    if (String(reserve.user) !== String(user_id)) {
      throw new Error('Não autorizado');
    }

    
    await this.reserveRepository.delete(reserve_id);
  }
}

export default DeleteReserveUseCase;