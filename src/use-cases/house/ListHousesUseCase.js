//buscar e listar casas
import House from '../models/House';

class ListHousesUseCase {
  async execute({ status }) {
    const houses = await House.find({ status });
    return houses;
  }
}

export default ListHousesUseCase;