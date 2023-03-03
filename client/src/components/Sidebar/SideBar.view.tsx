import NavLink from './NavLink';

import { StyledSidebar } from './Sidebar.styles';
import IconOverview from '../../assets/icons/IconOverview';
import Transaction from '../../assets/icons/Transaction';
import IconAnalytics from '../../assets/icons/IconAnalytics';
import Settings from '../../assets/icons/Settings';
import Logout from '../../assets/icons/Logout';

export function SidebarView() {
  return (
    <StyledSidebar>
      <header className="header">logo</header>
      <div className="content">
        <nav>
          <NavLink href="/overview" icon={<IconOverview />}>
            Overview
          </NavLink>

          <NavLink href="/transactions" icon={<Transaction />}>
            Transações
          </NavLink>

          <NavLink href="/home" icon={<IconAnalytics />}>
            Analytics
          </NavLink>
        </nav>
        <footer>
          <NavLink href="/configuracoes" icon={<Settings />}>
            configuracoes
          </NavLink>
          <NavLink href="/logout" icon={<Logout />}>
            sair da conta
          </NavLink>
        </footer>
      </div>
    </StyledSidebar>
  );
}
