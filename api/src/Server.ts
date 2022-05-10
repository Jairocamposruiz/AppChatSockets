import express, { Express } from 'express';
import { createServer, Server as HttpServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import path from 'path';
import cors from 'cors';

import { config } from './config';
import { dbConnection } from './database/config';
import Sockets from './Sockets';
import authController from './controllers/auth';

class Server {
  app: Express;
  port: string | number;
  httpServer: HttpServer;
  io: SocketServer;
  sockets: Sockets;

  constructor() {
    //Express
    this.app = express();
    this.port = config.app.port;

    //Connection DB
    dbConnection();

    //SocketIO
    this.httpServer = createServer(this.app);
    this.io = new SocketServer(this.httpServer);
    this.sockets = new Sockets(this.io);

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  private middlewares() {
    this.app.use(express.static(path.resolve(__dirname, '../../public')));
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use('/api/v1/auth', authController);
  }

  public listen() {
    this.httpServer.listen(this.port, () => {
      console.log(`App is running in http://localhost:${ this.port }`);
    });
  }
}

export default Server;
