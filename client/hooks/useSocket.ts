import { io, Socket } from 'socket.io-client';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useSocket = (serverPath: string) => {
  //Si lo pongo asi es para conectar automaticamente cuando entramos a la app sin necesidad de llamar a una funcion y setearlo en el state
  // const socket: Socket = useMemo(() => io(serverPath, {
  //   transports: [ 'websocket' ],
  // }), [serverPath]);

  const [socket, setSocket] = useState<Socket | null>(null);

  const [online, setOnline] = useState(false);

  const connectSocket = useCallback(() => {
    const token = localStorage.getItem('token');

    const socketTemp: Socket = io(serverPath, {
      transports: ['websocket'],
      autoConnect: true, //para que se mantenga conectado
      forceNew: true, //para forzar a que siempre que se llame cree una nueva conexion
      query: {
        'x-token': token,
      },
    });
    setSocket(socketTemp);
  }, [serverPath]);

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    socket.on('connect', () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    socket.on('disconnect', () => {
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
    connectSocket,
    disconnectSocket,
  };
};
