import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose'
import routes from './routes';


class App{

    constructor(){
        this.server = express();

        mongoose.connect(process.env.DB_CONNECTION);
        this.middlewares();
        this.routes();

    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;