import { createContext, ReactNode, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import { User } from '../interface/User';

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  authenticated: boolean;
  loading: boolean;
  handleLogin: (user: User) => void;
  handleLogout: () => void;
  user: User;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const { authenticated, loading, user, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider
      value={{ authenticated, loading, user, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
