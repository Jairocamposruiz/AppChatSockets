import { createContext, ReactNode, useCallback, useReducer } from 'react';

import { Chat, Message, User } from '@interfaces/models';

interface ChatState {
  uid: string;
  activeChat: Chat | null;
  publicActiveChat: Chat | null;
  users: User[],
  chats: Chat[],
  messages: Message[],
  publicMessages: Message[],
}

type ChatAction =
  | { type: 'load-users', payload: User[] }
  | { type: 'load-chats', payload: Chat[] }
  | { type: 'active-chat', payload: Chat }
  | { type: 'active-public-chat', payload: Chat }
  | { type: 'new-message', payload: Message }
  | { type: 'new-public-message', payload: Message }
  | { type: 'add-messages', payload: Message[] }
  | { type: 'add-public-messages', payload: Message[] }
  | { type: 'clean' }

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'load-users':
      return {
        ...state,
        users: [...action.payload],
      };
    case 'load-chats':
      return {
        ...state,
        chats: [...action.payload],
      };
    case 'active-chat':
      if (state.activeChat === action.payload) return state;
      return {
        ...state,
        activeChat: action.payload,
        messages: [],
      };
    case 'active-public-chat':
      if (state.publicActiveChat === action.payload) return state;
      return {
        ...state,
        publicActiveChat: action.payload,
        publicMessages: [],
      };
    case 'new-message':
      if (state.activeChat?.uid === action.payload.from.uid || state.activeChat?.uid === action.payload.to || true) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }
    case 'new-public-message':
      if (state.publicActiveChat?.uid === action.payload.from.uid || state.publicActiveChat?.uid === action.payload.to) {
        return {
          ...state,
          publicMessages: [...state.publicMessages, action.payload],
        };
      } else {
        return state;
      }
    case 'add-messages':
      return {
        ...state,
        messages: [...action.payload],
      };
    case 'add-public-messages':
      return {
        ...state,
        publicMessages: [...action.payload],
      };
    case 'clean':
      return {
        uid: '',
        activeChat: null,
        publicActiveChat: null,
        users: [],
        chats: [],
        messages: [],
        publicMessages: [],
      };
    default:
      return state;
  }
};

interface ChatContextProps {
  chatState: ChatState;
  loadUsers: (users: User[]) => void;
  loadChats: (chats: Chat[]) => void;
  activeChat: (chat: Chat) => void;
  activePublicChat: (chat: Chat) => void;
  newMessage: (message: Message) => void;
  newPublicMessage: (message: Message) => void;
  addMessages: (messages: Message[]) => void;
  addPublicMessages: (messages: Message[]) => void;
  clean: () => void;
}

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);

const initialState: ChatState = {
  uid: '',
  activeChat: null,
  publicActiveChat: null,
  users: [],
  chats: [],
  messages: [],
  publicMessages: [],
};

export const ChatProvider = ({ children }: ChatProviderProps) => {

  const [chatState, dispatch] = useReducer(chatReducer, initialState);

  const loadUsers = (users: User[]) => {
    dispatch({ type: 'load-users', payload: users });
  };

  const loadChats = (chats: Chat[]) => {
    dispatch({ type: 'load-chats', payload: chats });
  };

  const activeChat = (chat: Chat) => {
    dispatch({ type: 'active-chat', payload: chat });
  };

  const activePublicChat = (chat: Chat) => {
    dispatch({ type: 'active-public-chat', payload: chat });
  };

  const newMessage = useCallback((message: Message) => {
    console.log('asdfasdfasdfasdfasdf')
    dispatch({ type: 'new-message', payload: message });
  }, []);

  const newPublicMessage = useCallback((message: Message) => {
    dispatch({ type: 'new-public-message', payload: message });
  }, []);

  const addMessages = (messages: Message[]) => {
    dispatch({ type: 'add-messages', payload: messages });
  };

  const addPublicMessages = (messages: Message[]) => {
    dispatch({ type: 'add-public-messages', payload: messages });
  };

  const clean = () => {
    dispatch({ type: 'clean' });
  };

  return (
    <ChatContext.Provider value={ {
      chatState,
      loadUsers,
      loadChats,
      activeChat,
      activePublicChat,
      newMessage,
      newPublicMessage,
      addMessages,
      addPublicMessages,
      clean,
    } }>
      { children }
    </ChatContext.Provider>
  );
};
