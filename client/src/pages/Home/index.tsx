import SideIcon from '../../components/SideIcon';
import { Container, SideBar } from './styles';

const Home = () => {
  return (
    <Container>
      <SideBar>
        <div>
          <h1>
            E<span>F</span>
          </h1>

          <SideIcon type="Home" />
          <SideIcon type="Transactions" />
        </div>

        <div>
          <SideIcon type="Account" />
          <SideIcon type="Settings" />
          <SideIcon type="LogOff" />
        </div>
      </SideBar>
    </Container>
  );
};

export default Home;
