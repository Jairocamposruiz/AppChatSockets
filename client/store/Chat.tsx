import { createContext, ReactNode, useCallback, useReducer } from 'react';

import { Chat, Message, User } from '@interfaces/models';

interface ChatState {
  uid: string;
  activeChat: Chat | null;
  users: User[],
  messages: Message[],
}

type ChatAction =
  | { type: 'load-users', payload: User[] }
  | { type: 'active-chat', payload: Chat }
  | { type: 'new-message', payload: Message }
  | { type: 'add-messages', payload: Message[] }
  | { type: 'clean' }

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'load-users':
      return {
        ...state,
        users: [...action.payload],
      };
    case 'active-chat':
      if (state.activeChat === action.payload) return state;
      return {
        ...state,
        activeChat: action.payload,
        messages: [],
      };
    case 'new-message':
      if (state.activeChat?.uid === action.payload.from || state.activeChat?.uid === action.payload.to) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }
    case 'add-messages':
      return {
        ...state,
        messages: [...action.payload],
      };
    case 'clean':
      return {
        uid: '',
        activeChat: null,
        users: [],
        messages: [],
      };
    default:
      return state;
  }
};

interface ChatContextProps {
  chatState: ChatState;
  loadUsers: (users: User[]) => void;
  activeChat: (chat: Chat) => void;
  newMessage: (message: Message) => void;
  addMessages: (messages: Message[]) => void;
  clean: () => void;
}

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);

const initialState: ChatState = {
  uid: '',
  activeChat: null,
  users: [],
  messages: [],
};

export const ChatProvider = ({ children }: ChatProviderProps) => {

  const [chatState, dispatch] = useReducer(chatReducer, initialState);

  const loadUsers = (users: User[]) => {
    dispatch({ type: 'load-users', payload: users });
  };

  const activeChat = (chat: Chat) => {
    dispatch({ type: 'active-chat', payload: chat });
  };

  const newMessage = useCallback((message: Message) => {
    dispatch({ type: 'new-message', payload: message });
  }, []);

  const addMessages = (messages: Message[]) => {
    dispatch({ type: 'add-messages', payload: messages });
  };

  const clean = () => {
    dispatch({ type: 'clean' });
  };

  return (
    <ChatContext.Provider value={ {
      chatState,
      loadUsers,
      activeChat,
      newMessage,
      addMessages,
      clean,
    } }>
      { children }
    </ChatContext.Provider>
  );
};
