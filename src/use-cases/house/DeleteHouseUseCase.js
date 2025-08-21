
class DeleteHouseUseCase {
  constructor(houseRepository) {
    this.houseRepository = houseRepository;
  }

  async execute({ user_id, house_id }) {
    
    const housesFound = await this.houseRepository.search({ _id: house_id });

    
    const houseToDelete = housesFound[0];

    if (!houseToDelete) {
      throw new Error('Casa não encontrada');
    }

    if (String(houseToDelete.user) !== String(user_id)) {
      throw new Error('Impossivel deletar, você não é dono dessa casa');
    }

    await this.houseRepository.delete(house_id);
  }
}

export default DeleteHouseUseCase;