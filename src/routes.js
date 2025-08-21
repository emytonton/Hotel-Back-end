import { Router} from 'express';
import multer from 'multer';
import uploadConfig from './config/upload'
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashboardController from './controllers/DashboardController';
import ReserveController from './controllers/ReserveController';
import UserController from './controllers/UserController';


const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);

routes.get('/houses', HouseController.index);

routes.put('/houses/:house_id', upload.single('thumbnail'),HouseController.update);

routes.delete('/houses', HouseController.destroy);

routes.get('/dashborad', DashboardController.show);

routes.post('/houses/:house_id/reserve', ReserveController.store)

routes.get('/reserves', ReserveController.index)

routes.delete('/reserves/cancel', ReserveController.destroy)

routes.put('/reserves/:reserve_id', ReserveController.update)

routes.get('/users', UserController.index);

routes.put('/users/:user_id', UserController.update);

routes.delete('/users/:user_id', UserController.destroy);

routes.post('/users', UserController.store);

export default routes;