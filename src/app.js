import express from 'express';
import mongoose from 'mongoose'
import routes from './routes';

class App{

    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://hotel:hotel@hotelback.ji2p07r.mongodb.net/?retryWrites=true&w=majority&appName=hotelback', {
        });
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