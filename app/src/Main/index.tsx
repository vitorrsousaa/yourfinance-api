import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from '../assets/theme';
import Routes from '../routes';
import { Container } from './styles';

const Main = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default Main;
