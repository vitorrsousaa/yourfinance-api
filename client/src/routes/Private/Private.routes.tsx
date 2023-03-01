import { ReactElement } from 'react';
import { Routes as RoutesProvider, Route, Navigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useAuthContext } from '../../context/AuthContext';
import Home from '../../pages/Home';
import Overview from '../../pages/Overview';

interface PrivateRouteProps {
  children: ReactElement;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { authenticated, loading } = useAuthContext();

  if (loading) {
    return <Loader isLoading={loading} />;
  }

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export function PrivateRoutesProvider() {
  return (
    <RoutesProvider>
      <Route
        path="/overview"
        element={
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        }
      />
      <Route
        path="/teste"
        element={
          <PrivateRoute>
            <Overview />
          </PrivateRoute>
        }
      />
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
