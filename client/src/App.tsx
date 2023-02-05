import Global from './assets/global';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />

        <ToastContainer position="bottom-center" />
        <Global />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
