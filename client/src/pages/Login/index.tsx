import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { Container } from './styles';

const Login = () => {
  const navigate = useNavigate();

  function handleSubmit(event: React.BaseSyntheticEvent) {
    event.preventDefault();

    navigate('/home');
  }
  return (
    <Container>
      <Logo />
      <form onSubmit={handleSubmit}>
        <h1>Faça seu login</h1>
        <Input category="email" placeholder="Seu E-mail" type="email" />
        <Input category="password" placeholder="Sua senha" type="password" />

        <Button variant="primary" type="submit">
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
