import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import SideIcon from '../SideIcon';
import { Container } from './styles';

const Sidebar = () => {
  const { handleLogout: LogoutContext } = useAuthContext();
  const navigate = useNavigate();

  function handleLogout() {
    LogoutContext();
    navigate('/');
  }

  return (
    <Container>
      <div>
        <h1>
          E<span>F</span>
        </h1>

        <SideIcon category="Home" onClick={() => navigate('/')} />
        <SideIcon category="Transactions" />
      </div>

      <div>
        <SideIcon category="Account" />
        <SideIcon category="Settings" />
        <SideIcon category="LogOff" onClick={handleLogout} />
      </div>
    </Container>
  );
};

export default Sidebar;
