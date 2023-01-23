import { Routes as RoutesProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export default function Routes() {
  return (
    <RoutesProvider>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </RoutesProvider>
  );
}
