import Global from './assets/global';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes />

          <Global />
        </BrowserRouter>
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
