import { ReactNode } from 'react';

import { StyledNavLink } from './NavLink.styles';

export interface NavLinkViewProps {
  children: string;
  isActive: boolean;
  icon: ReactNode;
  onClick?: () => void;
}

export default function NavLinkView(props: NavLinkViewProps) {
  const { icon, children, isActive, onClick } = props;
  return (
    <StyledNavLink isActive={isActive} role="button" onClick={onClick}>
      <>
        {icon}
        <small>{children}</small>
      </>
    </StyledNavLink>
  );
}
