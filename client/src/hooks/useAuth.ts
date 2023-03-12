import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../services/api';
import AuthService from '../services/AuthService';
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

      if (!token) {
        setAuthenticated(false);
        return;
      }

      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      try {
        setLoading(true);
        await AuthService.auth();

        setAuthenticated(true);
      } catch (error) {
        console.log(error);
        toast.error(
          'Desculpa, tivemos um problema. Tente novamente mais tarde.'
        );

        handleLogout();
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  async function handleLogin(user: User) {
    try {
      const data = await AuthService.login(user);

      localStorage.setItem('@Aion-token', JSON.stringify(data.token));
      localStorage.setItem('@Aion-user', JSON.stringify(data.user.name));
      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setUser({ name: data.user.name });
      setAuthenticated(true);
    } catch (error: any) {
      if (error.response.status === 401) {
        throw new Error('Not Authorized');
      }

      toast.error('Não conseguimos fazer login. Tente novamente mais tarde.');
    }
  }

  async function handleRegister(user: User) {
    try {
      const data = await AuthService.register(user);

      localStorage.setItem('@Aion-token', JSON.stringify(data.token));
      localStorage.setItem('@Aion-user', JSON.stringify(data.user.name));
      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setUser({ name: data.user.name });
      setAuthenticated(true);
    } catch (error: any) {
      if (error.response.status === 401) {
        throw new Error('Not Authorized');
      }

      toast.error(
        'Não conseguimos cadastrar sua conta. Tente novamente mais tarde.'
      );
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('@Aion-token');
    localStorage.removeItem('@Aion-user');
    api.defaults.headers.Authorization = null;
  }

  return {
    handleLogin,
    handleLogout,
    handleRegister,
    loading,
    authenticated,
    user,
  };
}
