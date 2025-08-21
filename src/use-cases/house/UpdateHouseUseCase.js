
class UpdateHouseUseCase {
  constructor(houseRepository) {
    this.houseRepository = houseRepository;
  }

  async execute({ user_id, house_id, thumbnail, description, price, location, status }) {
   
    const housesFound = await this.houseRepository.search({ _id: house_id });
    const houseToUpdate = housesFound[0];

    if (!houseToUpdate) {
      throw new Error('Casa não encontrada');
    }

    if (String(houseToUpdate.user) !== String(user_id)) {
      throw new Error('Impossivel atualizar, você não é dono dessa casa');
    }

    
    const updatedData = {
      _id: house_id, 
      user: user_id, 
      thumbnail,
      description,
      price,
      location,
      status,
    };

    await this.houseRepository.save(updatedData);
  }
}

export default UpdateHouseUseCase;