import { createContext, ReactNode, useEffect, useReducer } from 'react';

interface UIState {
  theme: 'light' | 'dark';
}

export type UIAction =
  | { type: 'setDarkTheme' }
  | { type: 'setLightTheme' }

const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case 'setLightTheme':
      return {
        ...state,
        theme: 'light',
      };
    case 'setDarkTheme':
      return {
        ...state,
        theme: 'dark',
      };
    default:
      return state;
  }
};

interface UIContextProps extends UIState {
  setLightTheme: () => void;
  setDarkTheme: () => void;
}

interface UIProviderProps {
  children: ReactNode;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

const initialState: UIState = {
  theme: 'light',
};

export const UIProvider = ({ children }: UIProviderProps) => {
  const [UIState, dispatch] = useReducer(uiReducer, initialState);

  const setLightTheme = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
    dispatch({ type: 'setLightTheme' });
  };

  const setDarkTheme = () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
    dispatch({ type: 'setDarkTheme' });
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'light') {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }, []);

  return (
    <UIContext.Provider value={ {
      ...UIState,
      setLightTheme,
      setDarkTheme,
    } }>
      { children }
    </UIContext.Provider>
  );
};
