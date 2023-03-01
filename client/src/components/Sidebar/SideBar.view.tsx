import { StyledSidebar } from './Sidebar.styles';
import NavLink from './NavLink';
import Overview from '../../assets/icons/Overview';
import Transaction from '../../assets/icons/Transaction';
import Analytics from '../../assets/icons/Analytics';
import Settings from '../../assets/icons/Settings';
import Logout from '../../assets/icons/Logout';

export function SidebarView() {
  return (
    <StyledSidebar>
      <header>logo</header>
      <div className="content">
        <nav>
          <NavLink href="/overview" icon={<Overview />}>
            Overview
          </NavLink>

          <NavLink href="/transactions" icon={<Transaction />}>
            Transações
          </NavLink>

          <NavLink href="/analytics" icon={<Analytics />}>
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
