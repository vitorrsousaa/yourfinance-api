import { Button } from '../../components/Button';
import Logo from '../../components/Logo';
import { Container } from './styles';

const Login = () => {
  return (
    <Container>
      <Logo />
      <form>
        <h1>Faça seu login</h1>
        <input type="email" placeholder="Seu E-mail" />
        <input type="password" placeholder="Sua senha" />

        <Button variant="primary" disabled>
          Testando
        </Button>
      </form>

      <a href="">Esqueci minha senha</a>
      <a href="">
        Ainda não tem uma conta? <strong>Crie agora</strong>
      </a>
    </Container>
  );
};

export default Login;
