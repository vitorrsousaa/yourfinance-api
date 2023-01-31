import Global from './assets/global';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />

        <Global />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
