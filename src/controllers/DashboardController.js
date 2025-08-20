import ListUserHousesUseCase from '../use-cases/dashboard/ListUserHousesUseCase';

class DashboardController {
  async show(req, res) {
    const { user_id } = req.headers;
    const listUserHouses = new ListUserHousesUseCase();

    try {
      const houses = await listUserHouses.execute({ user_id });
      return res.json(houses);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new DashboardController();