import { Button } from '../../components/Button';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import SideIcon from '../../components/SideIcon';
import { Container, Content } from './styles';

const Transactions = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header />
        <main>
          <div>
            <div className="containerName">
              <SideIcon category="Transactions" />
              <h1>Transações</h1>
            </div>
            <small>Visualize todas as transações anteriores</small>
          </div>
          <Button variant="primary">Cadastrar nova transação + </Button>
        </main>

        <section>
          <div className="sectionHeader">
            <h2>Últimas transações</h2>
            <h3>Mostrando transações de 01 a 15 de jan</h3>
          </div>
        </section>
      </Content>
    </Container>
  );
};

export default Transactions;
