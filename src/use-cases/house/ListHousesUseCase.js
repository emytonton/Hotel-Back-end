
class ListHousesUseCase {
  constructor(houseRepository) {
    this.houseRepository = houseRepository;
  }

  async execute({ status }) {
    const houses = await this.houseRepository.search({ status });
    return houses;
  }
}

export default ListHousesUseCase;