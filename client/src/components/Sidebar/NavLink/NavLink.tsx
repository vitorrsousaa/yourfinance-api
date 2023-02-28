import { ElementType } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLinkView from './NavLink.view';

interface NavLinkProps {
  href: string;
  children: string;
  icon: ElementType;
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
