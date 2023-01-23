import SideIcon from '../../components/SideIcon';
import Arrow from '../../assets/icons/arrow.svg';
import { Container, Content, Header, SideBar, Summary } from './styles';

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

      <Content>
        <Header>
          <div>
            <h1>Página inicial</h1>
            <small>Acompanhe todas as suas finanças</small>
          </div>
          <small>X</small>
        </Header>

        <Summary>
          <h1>Resumo da sua vida financeira</h1>
          <div className="containerSummary">
            <div>
              <h3>Minhas receitas</h3>
              <strong>R$12.253,70</strong>
            </div>
            <div>
              <h3>Minhas despesas</h3>
              <strong>R$12.253,70</strong>
            </div>
            <div>
              <h3>Meus cartões</h3>
              <strong>R$12.253,70</strong>
            </div>
          </div>
        </Summary>

        <div className="containerSections">
          <section>
            <header>
              <h1>Últimas transações</h1>
              <button>
                <small>Ver todas</small>
                <img src={Arrow} alt="Arrow" />
              </button>
            </header>
          </section>

          <section>
            <header>
              <h1>Meus cartões</h1>
              <button>
                <small>Ver todas</small>
                <img src={Arrow} alt="Arrow" />
              </button>
            </header>
          </section>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
