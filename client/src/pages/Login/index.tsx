import React, { BaseSyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';
import { Container } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useErrors();

  const navigate = useNavigate();
  const isFormValid = password && email && errors.length === 0;

  function handleEmailChange(event: BaseSyntheticEvent) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      return setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(event: BaseSyntheticEvent) {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({ field: 'password', message: 'Senha é obrigatória' });
    } else {
      removeError('password');
    }
  }

  function handleSubmit(event: React.BaseSyntheticEvent) {
    event.preventDefault();

    navigate('/home');
  }

  return (
    <Container>
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

        <Button variant="primary" type="submit" disabled={!isFormValid}>
          Fazer Login
        </Button>
        <Link to="/home">Página home</Link>
      </form>

      <a href="">Esqueci minha senha</a>
      <a href="">
        Ainda não tem uma conta? <strong>Crie agora</strong>
      </a>
    </Container>
  );
};

export default Login;
