class CreateHouseUseCase {
  constructor(houseRepository) {
    this.houseRepository = houseRepository;
  }

  async execute({ user_id, thumbnail, description, price, location, status }) {
    const houseData = {
      user: user_id,
      thumbnail,
      description,
      price,
      location,
      status,
    };

    const house = await this.houseRepository.save(houseData);
    
    return house;
  }
}

export default CreateHouseUseCase;