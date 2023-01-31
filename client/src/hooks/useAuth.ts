import { useEffect, useState } from 'react';
import { User } from '../interface/User';
import { api } from '../services/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  });

  async function handleLogin(user: User) {
    const route = user.name ? '/auth/register' : '/auth/authenticate';

    try {
      const { data } = await api.post(route, user);

      localStorage.setItem('token', JSON.stringify(data.token));
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      setUser({
        _id: data.user._id,
        email: data.user.email,
        name: data.user.name,
        createdAt: data.user.createdAt,
      });

      setAuthenticated(true);
    } catch (error: any) {
      if (error) {
        return { error: 'Failed' };
      }
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
  }

  return { handleLogin, handleLogout, loading, authenticated, user };
}