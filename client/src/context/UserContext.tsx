import { createContext, ReactNode, useContext } from 'react';
import useUser from '../hooks/useUser';
import { User } from '../interface/User';

interface UserContextProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  user: User;
  setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export function UserProvider({ children }: UserContextProviderProps) {
  const { user, setUser } = useUser();

  console.log('context', user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  return context;
}
