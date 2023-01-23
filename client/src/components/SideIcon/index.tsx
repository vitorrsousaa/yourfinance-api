import { Container } from './styles';
import Home from '../../assets/icons/home.svg';
import Transactions from '../../assets/icons/transactions.svg';
import Account from '../../assets/icons/account.svg';
import LogOff from '../../assets/icons/logoff.svg';
import Settings from '../../assets/icons/settings.svg';

interface SideIconProps {
  type: 'Home' | 'Transactions' | 'Account' | 'LogOff' | 'Settings';
}

const SideIcon = ({ type }: SideIconProps) => {
  return (
    <Container>
      {type === 'Home' && <img src={Home} alt="Home" />}
      {type === 'Transactions' && <img src={Transactions} alt="Transactions" />}
      {type === 'Account' && <img src={Account} alt="Account" />}
      {type === 'LogOff' && <img src={LogOff} alt="LogOff" />}
      {type === 'Settings' && <img src={Settings} alt="Settings" />}
    </Container>
  );
};

export default SideIcon;
