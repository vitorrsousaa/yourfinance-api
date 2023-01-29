import { useState } from 'react';
import { User } from '../interface/User';

export default function useUser() {
  const [user, setUser] = useState<User>({} as User);
  console.log('hooks', user);

  return { user, setUser };
}
