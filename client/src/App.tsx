import Global from './assets/global';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes />

      <Global />
    </BrowserRouter>
  );
}

export default App;
