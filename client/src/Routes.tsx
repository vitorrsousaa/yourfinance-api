import { Routes as RoutesProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';

export default function Routes() {
  return (
    <RoutesProvider>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </RoutesProvider>
  );
}
