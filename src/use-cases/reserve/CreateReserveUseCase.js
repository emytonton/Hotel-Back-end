
class CreateReserveUseCase {
  constructor(houseRepository, reserveRepository) {
    this.houseRepository = houseRepository;
    this.reserveRepository = reserveRepository;
  }

  async execute({ user_id, house_id, date }) {
    
    const housesFound = await this.houseRepository.search({ _id: house_id });
    const house = housesFound[0];

    if (!house) {
      throw new Error('Essa casa não existe');
    }

    if (house.status !== true) {
      throw new Error('Essa casa não esta disponivel');
    }

    if (String(house.user) === String(user_id)) {
      throw new Error('Voce não pode alugar uma casa que já é sua');
    }

    
    const reserveData = {
      user: user_id,
      house: house_id,
      date,
    };
    
    const reserve = await this.reserveRepository.save(reserveData);

    const newReserve = await this.reserveRepository.search({ _id: reserve._id });

    return newReserve[0];
  }
}

export default CreateReserveUseCase;