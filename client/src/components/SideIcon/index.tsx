import { Container } from './styles';
import Home from '../../assets/icons/home.svg';
import Transactions from '../../assets/icons/transactions.svg';
import Account from '../../assets/icons/account.svg';
import LogOff from '../../assets/icons/logoff.svg';
import Settings from '../../assets/icons/settings.svg';
import { ButtonHTMLAttributes } from 'react';

interface SideIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category: 'Home' | 'Transactions' | 'Account' | 'LogOff' | 'Settings';
}

const SideIcon = ({ category, ...rest }: SideIconProps) => {
  return (
    <Container {...rest}>
      {category === 'Home' && <img src={Home} alt="Home" />}
      {category === 'Transactions' && (
        <img src={Transactions} alt="Transactions" />
      )}
      {category === 'Account' && <img src={Account} alt="Account" />}
      {category === 'LogOff' && <img src={LogOff} alt="LogOff" />}
      {category === 'Settings' && <img src={Settings} alt="Settings" />}
    </Container>
  );
};

export default SideIcon;
