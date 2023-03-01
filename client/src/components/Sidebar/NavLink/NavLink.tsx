import { Link, useLocation } from 'react-router-dom';
import NavLinkView, { NavLinkViewProps } from './NavLink.view';

interface NavLinkProps extends Omit<NavLinkViewProps, 'isActive'> {
  href: string;
}

export function NavLink({ href, ...props }: NavLinkProps) {
  const { pathname } = useLocation();
  let isActive = false;

  if (pathname === href) {
    isActive = true;
  }

  return (
    <Link to={href}>
      <NavLinkView isActive={isActive} {...props} />
    </Link>
  );
}
