import { createContext, ReactNode, useCallback, useReducer } from 'react';

import { User } from '@interfaces/models';
import { LoginResponse, RegisterResponse, RevalidateTokenResponse } from '@interfaces/responses';
import { fetchWithoutToken, fetchWithToken } from '@helpers/fetch';

interface AuthState {
  uid: string | null;
  checking: boolean;
  logged: boolean;
  name: string | null;
  email: string | null;
}

type AuthAction =
  | { type: 'login', payload: User }
  | { type: 'logout', payload: null }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  const { type, payload } = action;

  switch (type) {
    case 'login':
      return {
        ...state,
        uid: payload.uid,
        checking: false,
        logged: true,
        name: payload.name,
        email: payload.email,
      };
    case 'logout':
      return {
        ...state,
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      };
    default:
      return state;
  }
};

interface AuthContextProps extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  verifyToken: () => Promise<boolean>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const initialState: AuthState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = async (email: string, password: string): Promise<boolean> => {
    const resp = await fetchWithoutToken<LoginResponse>('/auth/login', { email, password }, 'POST');
    if (resp?.ok) {
      const { user, token } = resp;
      localStorage.setItem('token', token);
      dispatch({ type: 'login', payload: user });
    } else {
      return false;
    }
    return true;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    const resp = await fetchWithoutToken<RegisterResponse>('auth/new', { email, password, name }, 'POST');
    if (resp?.ok) {
      const { user, token } = resp;
      localStorage.setItem('token', token);
      dispatch({ type: 'login', payload: user });
    } else {
      return false;
    }
    return true;
  };

  const verifyToken = useCallback(async (): Promise<boolean> => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch({ type: 'logout', payload: null });
      return false;
    }

    const resp = await fetchWithToken<RevalidateTokenResponse>('auth/renew', {}, 'GET');
    if (resp?.ok) {
      const { user, token } = resp;
      localStorage.setItem('token', token);
      dispatch({ type: 'login', payload: user });
    } else {
      dispatch({ type: 'logout', payload: null });
      return false;
    }
    return true;
  }, []);

  const logout = () => {
    dispatch({ type: 'logout', payload: null });
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={ {
      ...authState,
      login,
      register,
      verifyToken,
      logout,
    } }>
      { children }
    </AuthContext.Provider>
  );
};
