import { Routes as RoutesProvider, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';

export default function PublicRoutes() {
  return (
    <RoutesProvider>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/overview" element={<Sidebar />} />
    </RoutesProvider>
  );
}
