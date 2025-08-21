class ListUserReservesUseCase {
  constructor(reserveRepository) {
    this.reserveRepository = reserveRepository;
  }

  async execute({ user_id }) {
    if (!user_id) {
      throw new Error('ID pe necessario');
    }

    const reserves = await this.reserveRepository.search({ user: user_id });
    
    return reserves;
  }
}

export default ListUserReservesUseCase;