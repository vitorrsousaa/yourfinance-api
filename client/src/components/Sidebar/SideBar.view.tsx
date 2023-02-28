import { StyledSidebar } from './Sidebar.styles';
import Description from '../../assets/icons/Description';
import NavLink from './NavLink';

export function SidebarView() {
  return (
    <StyledSidebar>
      <header>logo</header>
      <div className="content">
        <nav>
          <NavLink href="/overview" icon={Description}>
            OverView
          </NavLink>

          <NavLink href="/transactins" icon={Description}>
            Transações
          </NavLink>

          <NavLink href="/analytics" icon={Description}>
            Analytics
          </NavLink>
        </nav>
        <footer>
          <NavLink href="/configuracoes" icon={Description}>
            configuracoes
          </NavLink>
          <NavLink href="/logout" icon={Description}>
            sair da conta
          </NavLink>
        </footer>
      </div>
    </StyledSidebar>
  );
}
