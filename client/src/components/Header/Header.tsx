import { useAuthContext } from '../../context/AuthContext';
import { HeaderView } from './Header.view';

export function Header() {
  const { user } = useAuthContext();

  return <HeaderView name={user.name} />;
}
