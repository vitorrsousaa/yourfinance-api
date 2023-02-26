import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { api } from '../../services/api';
import SideIcon from '../SideIcon';
import { Container } from './styles';

const Sidebar = () => {
  const { handleLogout: LogoutContext } = useAuthContext();
  const navigate = useNavigate();

  function handleLogout() {
    LogoutContext();
    navigate('/');
  }

  async function handlePremium() {
    const session = await api.post('/create-checkout-session');
    console.log(session.data);
    // window.location.href = `${session.data.url}`;
    const teste = await api.get('/subscription');
  }

  return (
    <Container>
      <div>
        <h1>
          E<span>F</span>
        </h1>

        <button onClick={handlePremium}>Buy</button>

        <SideIcon category="Home" onClick={() => navigate('/')} />
        <SideIcon
          category="Transactions"
          onClick={() => navigate('/transactions')}
        />
      </div>

      <div>
        <SideIcon category="Settings" />
        <SideIcon category="LogOff" onClick={handleLogout} />
      </div>
    </Container>
  );
};

export default Sidebar;
