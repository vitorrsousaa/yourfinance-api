import { Routes as RoutesProvider, Route } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';

export default function PublicRoutes() {
  return (
    <RoutesProvider>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </RoutesProvider>
  );
}
