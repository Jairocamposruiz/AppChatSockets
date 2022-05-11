import { createContext, useContext, useEffect } from 'react';
import { Socket } from 'socket.io-client';

import { scrollToBottomAnimated } from '@helpers/scroll';
import { useSocket } from '@hooks/useSocket';
import { AuthContext } from '@store/Auth';
import { ChatContext } from '@store/Chat';

interface SocketContextProps {
  socket: Socket | null;
  online: boolean;
}

interface SocketProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const SocketContext = createContext<SocketContextProps>({} as SocketContextProps);

const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL;

if (!socketUrl) {
  throw new Error('⚠️ The variable of environment NEXT_PUBLIC_SOCKET_URL is required ⚠️');
}

export const SocketProvider = ({ children }: SocketProviderProps) => {

  const { socket, online, connectSocket, disconnectSocket } = useSocket(socketUrl);
  const { logged } = useContext(AuthContext);
  const { loadUsers, newMessage } = useContext(ChatContext);

  useEffect(() => {
    if (logged) {
      connectSocket();
    }
  }, [logged, connectSocket]);

  useEffect(() => {
    if (!logged) {
      disconnectSocket();
    }
  }, [logged, disconnectSocket]);

  useEffect(() => {
    socket?.on('users-list', (users) => {
      loadUsers(users);
    });
  }, [socket]);

  useEffect(() => {
    socket?.on('private-message', (message) => {
      newMessage(message);

      scrollToBottomAnimated('messages');
    });
  }, [socket, newMessage]);

  return (
    <SocketContext.Provider value={ { socket, online } }>
      { children }
    </SocketContext.Provider>
  );
};
