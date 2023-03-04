import { useAuthContext } from '../../context/AuthContext';
import { HeaderView } from './Header.view';

interface HeaderProps {
  page: string;
  subtitle?: string;
}

export function Header({ ...props }: HeaderProps) {
  const { user } = useAuthContext();

  return <HeaderView name={user.name} {...props} />;
}
