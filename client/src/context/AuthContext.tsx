import { AxiosError } from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User } from '../interface/User';
import { api } from '../services/api';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  authenticated: boolean;
  loading: boolean;
  handleLogin: (user: User) => void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(true);

  async function handleLogin(user: User) {
    try {
      const data = await api.post('/auth/authenticate', user);

      if (data) {
        console.log('tem data');
      }
      if (!data) {
        console.log('não tem data');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ authenticated, loading, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
