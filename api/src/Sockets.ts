import { Server } from 'socket.io';
import { connectUser, disconnectUser, getUsers } from './services/users';
import { saveMessage } from './services/messages';
import { verifyJWT } from './helpers/jwt';

class Sockets {
  io: Server;

  constructor(io: Server) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', async (socket) => {
      const token = socket.handshake.query['x-token'];

      if (!token || typeof token === 'object') {
        console.log('Unidentified socket');
        return socket.disconnect;
      }

      const [valid, id] = verifyJWT(token);

      if (!valid) {
        console.log('Unidentified socket');
        return socket.disconnect;
      }

      const user = await connectUser(id);

      if (!user) {
        console.log('Unidentified socket');
        return socket.disconnect;
      }

      console.log(`Se conecto ${ user.name }`);

      this.io.emit('users-list', await getUsers());

      socket.join(id);

      socket.on('private-message', async (payload) => {
        const message = await saveMessage(payload);
        if (!message) return;
        this.io.to(payload.to).emit('private-message', message);
        this.io.to(payload.from).emit('private-message', message);
      });

      socket.on('disconnect', async () => {
        await disconnectUser(id);
        this.io.emit('users-list', await getUsers());
        console.log(`Se desconecto ${ user.name }`);
      });

    });
  }
}

export default Sockets;
