import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';
import NavLinkView, { NavLinkViewProps } from './NavLink.view';

interface NavLinkProps extends Omit<NavLinkViewProps, 'isActive'> {
  href: string;
}

export function NavLink({ href, ...props }: NavLinkProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { handleLogout } = useAuthContext();
  let isActive = false;

  if (pathname === href) {
    isActive = true;
  }

  if (pathname === 'logout') {
    handleLogout();
    navigate('/');
    return null;
  }

  return (
    <Link to={href}>
      <NavLinkView isActive={isActive} {...props} />
    </Link>
  );
}
