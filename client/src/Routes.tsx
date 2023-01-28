import { ReactElement } from 'react';
import { Routes as RoutesProvider, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';

interface PrivateRouteProps {
  children: ReactElement;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { authenticated, loading } = useAuthContext();

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export default function Routes() {
  return (
    <RoutesProvider>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </RoutesProvider>
  );
}
