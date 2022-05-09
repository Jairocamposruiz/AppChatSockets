import { Server } from 'socket.io';

class Sockets {
  io: Server;


  constructor (io: Server) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents () {

  }
}

export default Sockets;
