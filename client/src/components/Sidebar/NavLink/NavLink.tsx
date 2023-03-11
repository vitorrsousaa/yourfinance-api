import { Link, useLocation } from 'react-router-dom';

import NavLinkView, { NavLinkViewProps } from './NavLink.view';

interface NavLinkProps extends Omit<NavLinkViewProps, 'isActive'> {
  href?: string;
  onClick?: () => void;
}

export function NavLink(props: NavLinkProps) {
  const { href, onClick, ...rest } = props;
  const { pathname } = useLocation();

  let isActive = false;

  if (pathname === href) {
    isActive = true;
  }

  return (
    <>
      {href ? (
        <Link to={href}>
          <NavLinkView isActive={isActive} {...rest} />
        </Link>
      ) : (
        <NavLinkView isActive={isActive} onClick={onClick} {...rest} />
      )}
    </>
  );
}
