import { ThemeProvider } from 'styled-components/native';
import { theme } from '../assets/theme';

import Routes from '../routes';
import { Container } from './styles';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default Main;
