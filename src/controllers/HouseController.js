
import * as Yup from 'yup';
import House from '../models/House';
import HouseRepository from '../repositories/HouseRepository';
import ListHousesUseCase from '../use-cases/house/ListHousesUseCase';
import CreateHouseUseCase from '../use-cases/house/CreateHouseUseCase';
import UpdateHouseUseCase from '../use-cases/house/UpdateHouseUseCase';
import DeleteHouseUseCase from '../use-cases/house/DeleteHouseUseCase';

class HouseController {

  async index(req, res) {
    const { status } = req.query;

    const houseRepository = new HouseRepository(House);
    const listHouses = new ListHousesUseCase(houseRepository);

    try {
      const houses = await listHouses.execute({ status });
      return res.json(houses);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const { location: thumbnail = '' } = req.file;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    const houseRepository = new HouseRepository(House);
    const createHouse = new CreateHouseUseCase(houseRepository);

    try {
      const house = await createHouse.execute({
        user_id,
        thumbnail,
        description,
        price,
        location,
        status,
      });
      return res.status(201).json(house);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Verificação falhou' });
    }

    const { location: thumbnail = '' } = req.file;
    const { house_id } = req.params;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    const houseRepository = new HouseRepository(House);
    const updateHouse = new UpdateHouseUseCase(houseRepository);

    try {
      await updateHouse.execute({
        user_id,
        house_id,
        thumbnail,
        description,
        price,
        location,
        status,
      });
      return res.status(204).send();
    } catch (error) {
      const statusCode = error.message.includes('Unauthorized') ? 401 : 404;
      return res.status(statusCode).json({ error: error.message });
    }
  }

  async destroy(req, res) {
    
    const { house_id } = req.body; 
    const { user_id } = req.headers;

    const houseRepository = new HouseRepository(House);
    const deleteHouse = new DeleteHouseUseCase(houseRepository);

    try {
      await deleteHouse.execute({ user_id, house_id });
      return res.json({ message: 'Casa deletada' });
    } catch (error) {
      const statusCode = error.message.includes('Unauthorized') ? 401 : 404;
      return res.status(statusCode).json({ error: error.message });
    }
  }
}

export default new HouseController();