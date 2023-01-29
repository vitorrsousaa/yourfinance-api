import { useEffect, useState } from 'react';
import { User } from '../interface/User';
import { api } from '../services/api';

export default function useAuth() {
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
    const route = user.name ? '/auth/register' : '/auth/authenticate';

    try {
      const { data } = await api.post(route, user);

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

  return { handleLogin, handleLogout, loading, authenticated, userId };
}
