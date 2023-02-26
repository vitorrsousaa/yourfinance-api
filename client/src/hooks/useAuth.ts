import { useEffect, useState } from 'react';

import { api } from '../services/api';
import { User } from '../types/User';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(() => {
    const name = localStorage.getItem('@Aion-user');
    if (name) {
      return { name: JSON.parse(name) };
    }

    return {};
  });

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@Aion-token');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      }

      try {
        const response = await api.get('/auth');

        if (response.status === 200) {
          setAuthenticated(true);
        }
      } catch {
        setAuthenticated(false);
        handleLogout();
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  async function handleLogin(user: User) {
    const route = user.name ? 'auth/register' : 'auth/authenticate';

    try {
      const { data } = await api.post(route, user);

      localStorage.setItem('@Aion-token', JSON.stringify(data.token));
      localStorage.setItem('@Aion-user', JSON.stringify(data.user.name));
      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setUser({ name: data.user.name });
      setAuthenticated(true);
    } catch (error: any) {
      if (error) {
        return { error: 'Failed' };
      }
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('@Aion-token');
    localStorage.removeItem('@Aion-user');
    api.defaults.headers.Authorization = null;
  }

  return { handleLogin, handleLogout, loading, authenticated, user };
}
