import Arrow from '../../assets/icons/arrow.svg';
import { Container, Content, Summary } from './styles';
import { useAuthContext } from '../../context/AuthContext';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const Home = () => {
  const { user } = useAuthContext();

  return (
    <Container>
      <Sidebar />

      <Content>
        <Header />

        <main>
          <div>
            <h1>Página inicial</h1>
            <h2>{user.name}</h2>
            <small>Acompanhe todas as suas finanças</small>
          </div>
          <small>X</small>
        </main>

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
