import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { User } from '../interface/User';
import { api } from '../services/api';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  authenticated: boolean;
  loading: boolean;
  handleLogin: (user: User) => void;
  userId: string;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  });

  async function handleLogin(user: User) {
    try {
      const { data } = await api.post('/auth/authenticate', user);

      localStorage.setItem('token', JSON.stringify(data.token));
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      setUserId(data.user._id);
      setAuthenticated(true);
    } catch (error: any) {
      const errorMessage = JSON.parse(error.request.response);

      return errorMessage;
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
  }

  return (
    <AuthContext.Provider
      value={{ authenticated, loading, userId, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
