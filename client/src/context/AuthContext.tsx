import { createContext, ReactNode, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import { User } from '../types/User';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  authenticated: boolean;
  loading: boolean;
  handleLogin: (user: User) => Promise<void>;
  handleRegister: (user: User) => Promise<void>;
  handleLogout: () => void;
  user: User;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
