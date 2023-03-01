import { ReactNode } from 'react';

import { StyledNavLink } from './NavLink.styles';

export interface NavLinkViewProps {
  children: string;
  isActive: boolean;
  icon: ReactNode;
}

export default function NavLinkView({
  icon,
  children,
  isActive,
}: NavLinkViewProps) {
  return (
    <StyledNavLink isActive={isActive}>
      <>
        {icon}
        <small>{children}</small>
      </>
    </StyledNavLink>
  );
}
