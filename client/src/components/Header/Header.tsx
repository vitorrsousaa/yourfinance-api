import { useAuthContext } from '../../context/AuthContext';
import { HeaderView } from './Header.view';

interface HeaderProps {
  page: string;
}

export function Header({ page }: HeaderProps) {
  const { user } = useAuthContext();

  return <HeaderView name={user.name} page={page} />;
}
