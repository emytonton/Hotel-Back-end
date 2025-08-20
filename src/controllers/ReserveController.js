import * as Yup from 'yup';
import ListUserReservesUseCase from '../use-cases/reserve/ListUserReservesUseCase';
import CreateReserveUseCase from '../use-cases/reserve/CreateReserveUseCase';
import UpdateReserveUseCase from '../use-cases/reserve/UpdateReserveUseCase';
import DeleteReserveUseCase from '../use-cases/reserve/DeleteReserveUseCase';

class ReserveController {

  async index(req, res) {
    const { user_id } = req.headers;
    const listUserReserves = new ListUserReservesUseCase();

    try {
      const reserves = await listUserReserves.execute({ user_id });
      return res.json(reserves);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }


  async store(req, res) {
    const schema = Yup.object().shape({
      date: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data é obrigatorio' });
    }

    const { user_id } = req.headers;
    const { house_id } = req.params;
    const { date } = req.body;

    const createReserve = new CreateReserveUseCase();

    try {
      const reserve = await createReserve.execute({ user_id, house_id, date });
      return res.status(201).json(reserve);
    } catch (error) {
      const statusCode = error.message.includes('Não autorizado') ? 401 : 400;
      return res.status(statusCode).json({ error: error.message });
    }
  }


  async update(req, res) {
    const { reserve_id } = req.params;
    const { date } = req.body;
    const { user_id } = req.headers; 

    const updateReserve = new UpdateReserveUseCase();

    try {
      await updateReserve.execute({ user_id, reserve_id, date });
      return res.status(204).send();
    } catch (error) {
      const statusCode = error.message.includes('Nao autorizado') ? 401 : 404;
      return res.status(statusCode).json({ error: error.message });
    }
  }


  async destroy(req, res) {
    const { reserve_id } = req.body; 
    const { user_id } = req.headers; 

    const deleteReserve = new DeleteReserveUseCase();

    try {
      await deleteReserve.execute({ user_id, reserve_id });
      return res.json({ message: 'Reserva Cancelada' });
    } catch (error) {
      const statusCode = error.message.includes('Nao autorizada') ? 401 : 404;
      return res.status(statusCode).json({ error: error.message });
    }
  }


}

export default new ReserveController();