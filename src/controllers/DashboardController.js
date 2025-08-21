// src/controllers/DashboardController.js

import House from '../models/House';
import HouseRepository from '../repositories/HouseRepository';
import ListUserHousesUseCase from '../use-cases/dashboard/ListUserHousesUseCase';

class DashboardController {
  async show(req, res) {
    const { user_id } = req.headers;

    
    const houseRepository = new HouseRepository(House);

   
    const listUserHouses = new ListUserHousesUseCase(houseRepository);

    try {
      const houses = await listUserHouses.execute({ user_id });
      return res.json(houses);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new DashboardController();