import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loader from '../../components/Loader';
import Logo from '../../components/Logo';
import { useAuthContext } from '../../context/AuthContext';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';
import { Container } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();
  const [loginError, setLoginError] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { handleLogin, authenticated } = useAuthContext();
  const isFormValid = password && email && errors.length === 0;

  useEffect(() => {
    if (authenticated) {
      navigate('/home');
    }
  }, [authenticated]);

  function handleEmailChange(event: BaseSyntheticEvent) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      return setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
      setLoginError('');
    }
  }

  function handlePasswordChange(event: BaseSyntheticEvent) {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({ field: 'password', message: 'Senha é obrigatória' });
    } else {
      removeError('password');
      setLoginError('');
    }
  }

  async function handleSubmit(event: React.BaseSyntheticEvent) {
    setIsLoading(true);
    event.preventDefault();

    const user = { email, password };

    const err: any = await handleLogin({ email, password });

    if (err) {
      setPassword('');
      setLoginError('Email ou senha inválido');
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Logo />
      <form onSubmit={handleSubmit}>
        <h1>Faça seu login</h1>

        <Input
          category="email"
          placeholder="Seu E-mail"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />

        <Input
          category="password"
          placeholder="Sua senha"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={getErrorMessageByFieldName('password')}
        />

        {loginError && <small className="login-error">{loginError}</small>}

        <Button variant="primary" type="submit" disabled={!isFormValid}>
          Fazer Login
        </Button>
      </form>

      <a href="">Esqueci minha senha</a>
      <Link to="signup">
        Ainda não tem uma conta? <strong>Crie agora</strong>
      </Link>
    </Container>
  );
};

export default Login;
