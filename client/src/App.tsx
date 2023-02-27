import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Global from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './assets/styles/theme';
import { PrivateRoutes, PublicRoutes } from './routes';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <PublicRoutes />
          <PrivateRoutes />

          <ToastContainer position="top-right" />
          <Global />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
