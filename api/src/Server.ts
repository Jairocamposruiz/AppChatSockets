import express, { Express } from 'express';
import { createServer, Server as HttpServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import path from 'path';
import cors from 'cors';

import { config } from './config';
import { dbConnection } from './database/config';
import Sockets from './Sockets';
import authController from './controllers/auth';
import messagesController from './controllers/messages';
import publicMessagesController from './controllers/publicMessages';

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
    this.io = new SocketServer(this.httpServer, {
      path: '/socket.io'
    });
    this.sockets = new Sockets(this.io);

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use('/api/v1/auth', authController);
    this.app.use('/api/v1/messages', messagesController);
    this.app.use('/api/v1/public_messages', publicMessagesController)
  }

  public listen() {
    this.httpServer.listen(this.port, () => {
      console.log(`App is running in http://localhost:${ this.port }`);
    });
  }
}

export default Server;
