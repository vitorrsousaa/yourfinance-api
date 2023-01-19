import { Routes as RoutesProvider, Route } from 'react-router-dom';
import Login from './pages/Login';

export default function Routes() {
  return (
    <RoutesProvider>
      <Route path="/" element={<Login />} />
    </RoutesProvider>
  );
}
